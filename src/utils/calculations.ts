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
  return ap.toFixed(1);
}
