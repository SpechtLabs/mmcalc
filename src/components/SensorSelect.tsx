import { getSensorGroups, getCropFactor } from '../data/sensors';

interface SensorSelectProps {
  id?: string;
  value: string;
  onChange: (sensorId: string) => void;
}

const groups = getSensorGroups();

export function SensorSelect({ id, value, onChange }: SensorSelectProps) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">
        Sensor Size
      </label>
      <select
        id={id}
        value={value}
        onChange={e => onChange(e.target.value)}
        className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-500 dark:focus:ring-teal-400 transition-colors"
      >
        {groups.map(group => (
          <optgroup key={group.label} label={group.label}>
            {group.sensors.map(sensor => (
              <option key={sensor.id} value={sensor.id}>
                {sensor.name} ({getCropFactor(sensor).toFixed(2)}x)
                {sensor.models.length > 0 ? ` - ${sensor.models.slice(0, 2).join(', ')}` : ''}
              </option>
            ))}
          </optgroup>
        ))}
      </select>
    </div>
  );
}
