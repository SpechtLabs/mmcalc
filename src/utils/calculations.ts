const FULL_FRAME_DIAGONAL = Math.sqrt(36 ** 2 + 24 ** 2); // ~43.27mm

export function cropFactor(sensorWidth: number, sensorHeight: number): number {
  const diagonal = Math.sqrt(sensorWidth ** 2 + sensorHeight ** 2);
  return FULL_FRAME_DIAGONAL / diagonal;
}

export function equivalentFocalLength(focalLength: number, cf: number): number {
  return focalLength * cf;
}

export function equivalentAperture(aperture: number, cf: number): number {
  return aperture * cf;
}

export function formatFocalLength(fl: number): string {
  return fl < 10 ? fl.toFixed(1) : Math.round(fl).toString();
}

export function formatAperture(ap: number): string {
  if (ap >= 10) return Math.round(ap).toString();
  return ap.toFixed(2);
}

export interface DepthOfFieldResult {
  nearLimit: number;   // mm
  farLimit: number;    // mm (Infinity if beyond hyperfocal)
  total: number;       // mm (Infinity if beyond hyperfocal)
  hyperfocal: number;  // mm
}

/**
 * Calculate circle of confusion for a sensor.
 * Standard: sensor diagonal / 1500.
 */
export function circleOfConfusion(sensorWidth: number, sensorHeight: number): number {
  const diagonal = Math.sqrt(sensorWidth ** 2 + sensorHeight ** 2);
  return diagonal / 1500;
}

/**
 * Calculate depth of field.
 * @param focalLength - mm
 * @param aperture - f-number
 * @param distance - focus distance in meters
 * @param coc - circle of confusion in mm
 */
export function depthOfField(
  focalLength: number,
  aperture: number,
  distance: number,
  coc: number,
): DepthOfFieldResult {
  const distMm = distance * 1000; // convert to mm
  const H = (focalLength * focalLength) / (aperture * coc) + focalLength;

  const nearLimit = (distMm * (H - focalLength)) / (H + distMm - 2 * focalLength);
  const farDenom = H - distMm;

  let farLimit: number;
  if (farDenom <= 0) {
    farLimit = Infinity;
  } else {
    farLimit = (distMm * (H - focalLength)) / farDenom;
  }

  const total = farLimit - nearLimit;

  return { nearLimit, farLimit, total, hyperfocal: H };
}

export function formatDistance(mm: number): string {
  if (!isFinite(mm)) return 'Infinity';
  if (mm >= 1000) {
    const m = mm / 1000;
    return m >= 100 ? `${Math.round(m)}m` : `${m.toFixed(1)}m`;
  }
  return `${Math.round(mm)}mm`;
}
