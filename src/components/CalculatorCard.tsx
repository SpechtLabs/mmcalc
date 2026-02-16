import { SensorSelect } from './SensorSelect';
import { ApertureInput } from './ApertureInput';
import { findSensorById, getCropFactor } from '../data/sensors';
import { equivalentFocalLength, equivalentAperture, formatFocalLength, formatAperture } from '../utils/calculations';

export interface CardState {
  id: string;
  sensorId: string;
  focalLength: string;
  aperture: string;
}

interface CalculatorCardProps {
  card: CardState;
  onChange: (card: CardState) => void;
  onRemove?: () => void;
}

export function CalculatorCard({ card, onChange, onRemove }: CalculatorCardProps) {
  const sensor = findSensorById(card.sensorId);
  const fl = parseFloat(card.focalLength);
  const ap = parseFloat(card.aperture);
  const cf = sensor ? getCropFactor(sensor) : 1;

  const hasResult = sensor && !isNaN(fl) && fl > 0 && !isNaN(ap) && ap > 0;

  return (
    <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/50 p-5 shadow-sm hover:shadow-md transition-shadow relative group">
      {onRemove && (
        <button
          onClick={onRemove}
          aria-label="Remove card"
          className="absolute top-3 right-3 p-1 rounded-md text-gray-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 opacity-0 group-hover:opacity-100 transition-all"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      )}

      <div className="space-y-4">
        <SensorSelect
          value={card.sensorId}
          onChange={sensorId => onChange({ ...card, sensorId })}
        />

        <div className="flex gap-3">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">
              Focal Length
            </label>
            <div className="relative">
              <input
                type="number"
                value={card.focalLength}
                onChange={e => onChange({ ...card, focalLength: e.target.value })}
                min="1"
                step="1"
                placeholder="50"
                className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-500 dark:focus:ring-teal-400 transition-colors pr-10"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500 text-sm pointer-events-none">
                mm
              </span>
            </div>
          </div>

          <ApertureInput
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
              <div className="text-2xl font-bold text-teal-700 dark:text-teal-400">
                f/{formatAperture(equivalentAperture(ap, cf))}
              </div>
            </div>
          ) : (
            <div className="text-2xl font-bold text-gray-300 dark:text-gray-600">
              - mm &nbsp; f/-
            </div>
          )}
          {hasResult && (
            <div className="text-sm text-gray-500 dark:text-gray-400">
              Crop factor: {cf.toFixed(2)}x
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
