const COMMON_APERTURES = [1.0, 1.2, 1.4, 1.7, 1.8, 2.0, 2.8, 4.0, 5.6, 8, 11, 16, 22];

interface ApertureInputProps {
  value: string;
  onChange: (value: string) => void;
}

export function ApertureInput({ value, onChange }: ApertureInputProps) {
  return (
    <div className="flex-1">
      <label className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">
        Aperture
      </label>
      <div className="relative">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500 text-sm pointer-events-none">
          f/
        </span>
        <input
          type="number"
          value={value}
          onChange={e => onChange(e.target.value)}
          min="0.7"
          max="64"
          step="0.1"
          list="apertures"
          placeholder="1.8"
          className="w-full pl-8 pr-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-500 dark:focus:ring-teal-400 transition-colors"
        />
        <datalist id="apertures">
          {COMMON_APERTURES.map(ap => (
            <option key={ap} value={ap} />
          ))}
        </datalist>
      </div>
    </div>
  );
}
