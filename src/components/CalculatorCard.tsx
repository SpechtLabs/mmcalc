import { useState, useRef, useEffect } from 'react';
import { SensorSelect } from './SensorSelect';
import { ApertureInput } from './ApertureInput';
import { findSensorById, getCropFactor } from '../data/sensors';
import {
  equivalentFocalLength, equivalentAperture, formatFocalLength, formatAperture,
  depthOfField, circleOfConfusion, formatDistance,
} from '../utils/calculations';

export interface CardState {
  id: string;
  sensorId: string;
  focalLength: string;
  aperture: string;
  distance: string;
}

interface CalculatorCardProps {
  card: CardState;
  onChange: (card: CardState) => void;
  onRemove?: () => void;
}

function ApertureInfoTip() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent | TouchEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    document.addEventListener('touchstart', handler);
    return () => {
      document.removeEventListener('mousedown', handler);
      document.removeEventListener('touchstart', handler);
    };
  }, [open]);

  return (
    <div
      className="relative inline-block"
      ref={ref}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        onClick={() => setOpen(prev => !prev)}
        aria-label="Aperture equivalence info"
        aria-expanded={open}
        className="text-gray-500 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors ml-0.5 cursor-pointer"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="16" x2="12" y2="12" />
          <line x1="12" y1="8" x2="12.01" y2="8" />
        </svg>
      </button>
      {open && (
        <div role="tooltip" className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-56 px-3 py-2 rounded-lg bg-gray-800 dark:bg-gray-700 text-xs text-gray-100 shadow-lg z-20">
          Equivalent aperture is for depth of field comparison only, not exposure.
          <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-800 dark:border-t-gray-700" />
        </div>
      )}
    </div>
  );
}

export function CalculatorCard({ card, onChange, onRemove }: CalculatorCardProps) {
  const [advancedOpen, setAdvancedOpen] = useState(false);
  const sensor = findSensorById(card.sensorId);
  const fl = parseFloat(card.focalLength);
  const ap = parseFloat(card.aperture);
  const dist = parseFloat(card.distance);
  const cf = sensor ? getCropFactor(sensor) : 1;

  const hasResult = sensor && !isNaN(fl) && fl > 0 && !isNaN(ap) && ap > 0;
  const hasDof = hasResult && !isNaN(dist) && dist > 0;

  return (
    <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/50 p-5 shadow-sm hover:shadow-md transition-shadow relative group">
      {onRemove && (
        <button
          onClick={onRemove}
          aria-label="Remove card"
          className="absolute top-3 right-3 p-1.5 rounded-md text-gray-500 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      )}

      <div className="space-y-4">
        <SensorSelect
          id={`sensor-${card.id}`}
          value={card.sensorId}
          onChange={sensorId => onChange({ ...card, sensorId })}
        />

        <div className="flex gap-3">
          <div className="flex-1">
            <label htmlFor={`fl-${card.id}`} className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">
              Focal Length
            </label>
            <div className="relative">
              <input
                id={`fl-${card.id}`}
                type="number"
                value={card.focalLength}
                onChange={e => onChange({ ...card, focalLength: e.target.value })}
                min="1"
                step="1"
                placeholder="50"
                className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-500 dark:focus:ring-teal-400 transition-colors pr-10"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400 text-sm pointer-events-none">
                mm
              </span>
            </div>
          </div>

          <ApertureInput
            id={`ap-${card.id}`}
            value={card.aperture}
            onChange={aperture => onChange({ ...card, aperture })}
          />
        </div>

        <hr className="border-gray-200 dark:border-gray-700" />

        <div className="space-y-2">
          <div className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
            Full Frame Equivalent
          </div>
          {hasResult ? (
            <div className="flex items-baseline gap-4">
              <div className="text-2xl font-bold text-teal-700 dark:text-teal-400">
                {formatFocalLength(equivalentFocalLength(fl, cf))}mm
              </div>
              <div className="text-2xl font-bold text-teal-700 dark:text-teal-400 flex items-baseline gap-1">
                f/{formatAperture(equivalentAperture(ap, cf))}
                <ApertureInfoTip />
              </div>
            </div>
          ) : (
            <div className="text-2xl font-bold text-gray-500 dark:text-gray-400">
              - mm &nbsp; f/-
            </div>
          )}
          {hasResult && (
            <div className="text-sm text-gray-500 dark:text-gray-400">
              Crop factor: {cf.toFixed(2)}x
            </div>
          )}
        </div>

        <div>
          <button
            onClick={() => setAdvancedOpen(prev => !prev)}
            aria-expanded={advancedOpen}
            className="flex items-center gap-1.5 text-xs font-medium text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              className={`transition-transform ${advancedOpen ? 'rotate-90' : ''}`}
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
            Advanced
          </button>

          {advancedOpen && (
            <div className="mt-3 space-y-3">
              <div>
                <label htmlFor={`dist-${card.id}`} className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">
                  Focus Distance
                </label>
                <div className="relative">
                  <input
                    id={`dist-${card.id}`}
                    type="number"
                    value={card.distance}
                    onChange={e => onChange({ ...card, distance: e.target.value })}
                    min="0.01"
                    step="0.1"
                    placeholder="2.0"
                    className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-500 dark:focus:ring-teal-400 transition-colors pr-10"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400 text-sm pointer-events-none">
                    m
                  </span>
                </div>
              </div>

              {hasDof && sensor && (
                <div className="rounded-lg bg-gray-50 dark:bg-gray-800 p-3 space-y-2">
                  <div className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                    Depth of Field
                  </div>
                  {(() => {
                    const coc = circleOfConfusion(sensor.width, sensor.height);
                    const dof = depthOfField(fl, ap, dist, coc);
                    return (
                      <div className="space-y-1 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-500 dark:text-gray-400">Total DoF</span>
                          <span className="font-medium text-teal-700 dark:text-teal-400">{formatDistance(dof.total)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-500 dark:text-gray-400">Near limit</span>
                          <span className="text-gray-700 dark:text-gray-300">{formatDistance(dof.nearLimit)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-500 dark:text-gray-400">Far limit</span>
                          <span className="text-gray-700 dark:text-gray-300">{formatDistance(dof.farLimit)}</span>
                        </div>
                      </div>
                    );
                  })()}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
