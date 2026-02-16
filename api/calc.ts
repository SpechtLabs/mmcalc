import type { VercelRequest, VercelResponse } from '@vercel/node';

const FULL_FRAME_DIAGONAL = Math.sqrt(36 ** 2 + 24 ** 2);

interface SensorDef {
  name: string;
  width: number;
  height: number;
}

const SENSORS: Record<string, SensorDef> = {
  'ff': { name: 'Full Frame', width: 36, height: 24 },
  'apsh': { name: 'APS-H', width: 27.9, height: 18.6 },
  'apsc': { name: 'APS-C', width: 23.5, height: 15.6 },
  'apsc-canon': { name: 'APS-C Canon', width: 22.3, height: 14.9 },
  'mft': { name: 'Micro Four Thirds', width: 17.3, height: 13 },
  '1inch': { name: '1-inch', width: 13.2, height: 8.8 },
  'gfx': { name: 'Fujifilm GFX', width: 43.8, height: 32.9 },
  'hasselblad': { name: 'Hasselblad X', width: 43.8, height: 32.9 },
  'phaseone': { name: 'Phase One', width: 53.4, height: 40 },
  'pentax645d': { name: 'Pentax 645D/Z', width: 43.8, height: 32.8 },
  '645': { name: '645 Film', width: 56, height: 42 },
  '6x6': { name: '6x6 Film', width: 56, height: 56 },
  '6x7': { name: '6x7 Film', width: 56, height: 69 },
  '6x9': { name: '6x9 Film', width: 56, height: 83 },
  '4x5': { name: '4x5 inch', width: 100, height: 120 },
  '8x10': { name: '8x10 inch', width: 195, height: 246 },
};

function getCropFactor(s: SensorDef): number {
  return FULL_FRAME_DIAGONAL / Math.sqrt(s.width ** 2 + s.height ** 2);
}

function formatFL(fl: number): string {
  return fl < 10 ? fl.toFixed(1) : Math.round(fl).toString();
}

function formatAp(ap: number): string {
  if (ap >= 10) return Math.round(ap).toString();
  return ap.toFixed(1);
}

const CLI_AGENTS = ['curl', 'wget', 'httpie', 'powershell', 'fetch'];

function isCLI(ua: string | undefined): boolean {
  if (!ua) return false;
  const lower = ua.toLowerCase();
  return CLI_AGENTS.some(a => lower.includes(a));
}

export default function handler(req: VercelRequest, res: VercelResponse) {
  const rawPath = (req.query.path as string) || '';
  // Parse: sensor-focalLength-aperture (sensor may contain dashes like "apsc-canon")
  // Strategy: try known multi-word sensor IDs first, then fall back to single-word
  let sensorId: string | undefined;
  let rest: string | undefined;

  const knownMultiWordIds = Object.keys(SENSORS).filter(id => id.includes('-')).sort((a, b) => b.length - a.length);
  for (const id of knownMultiWordIds) {
    if (rawPath.startsWith(id + '-')) {
      sensorId = id;
      rest = rawPath.slice(id.length + 1);
      break;
    }
  }

  if (!sensorId) {
    const firstDash = rawPath.indexOf('-');
    if (firstDash === -1) {
      res.status(400).send('Usage: /<sensor>-<focal_length>-<aperture>\nExample: /gfx-80-1.7\n');
      return;
    }
    sensorId = rawPath.slice(0, firstDash);
    rest = rawPath.slice(firstDash + 1);
  }

  const lastDash = rest.lastIndexOf('-');
  if (lastDash === -1) {
    res.status(400).send('Usage: /<sensor>-<focal_length>-<aperture>\nExample: /gfx-80-1.7\n');
    return;
  }

  const flStr = rest.slice(0, lastDash);
  const apStr = rest.slice(lastDash + 1);
  const fl = parseFloat(flStr);
  const ap = parseFloat(apStr);

  if (isNaN(fl) || isNaN(ap) || fl <= 0 || ap <= 0) {
    res.status(400).send(`Invalid focal length or aperture: ${flStr}, ${apStr}\n`);
    return;
  }

  const sensor = SENSORS[sensorId];
  if (!sensor) {
    const available = Object.keys(SENSORS).join(', ');
    res.status(400).send(`Unknown sensor: ${sensorId}\nAvailable: ${available}\n`);
    return;
  }

  const cf = getCropFactor(sensor);
  const eqFL = fl * cf;
  const eqAp = ap * cf;

  if (isCLI(req.headers['user-agent'])) {
    res.setHeader('Content-Type', 'text/plain');
    res.send(`FF Equivalent: ${formatFL(eqFL)}mm f/${formatAp(eqAp)}\nCrop Factor: ${cf.toFixed(2)}x\n`);
  } else {
    // Browser: redirect to the SPA with query params
    res.redirect(302, `/?sensor=${sensorId}&fl=${fl}&ap=${ap}`);
  }
}
