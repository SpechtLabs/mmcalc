export interface Sensor {
  id: string;
  name: string;
  width: number;
  height: number;
  models: string[];
  category: string;
}

export interface SensorGroup {
  label: string;
  sensors: Sensor[];
}

const FULL_FRAME_DIAGONAL = Math.sqrt(36 ** 2 + 24 ** 2); // 43.27mm

export function getCropFactor(sensor: Sensor): number {
  const diagonal = Math.sqrt(sensor.width ** 2 + sensor.height ** 2);
  return FULL_FRAME_DIAGONAL / diagonal;
}

export const sensors: Sensor[] = [
  // Large Format
  { id: '8x10', name: '8×10 inch', width: 195, height: 246, models: [], category: 'Large Format' },
  { id: '4x5', name: '4×5 inch', width: 100, height: 120, models: ['Chamonix', 'Intrepid'], category: 'Large Format' },

  // Medium Format Film
  { id: '6x9', name: '6×9', width: 56, height: 83, models: ['Fuji GSW690'], category: 'Medium Format Film' },
  { id: '6x7', name: '6×7', width: 56, height: 69, models: ['Mamiya RB67', 'Pentax 67'], category: 'Medium Format Film' },
  { id: '6x6', name: '6×6', width: 56, height: 56, models: ['Hasselblad 500C/M', 'Rolleiflex'], category: 'Medium Format Film' },
  { id: '645', name: '645', width: 56, height: 42, models: ['Mamiya 645', 'Pentax 645', 'Contax 645'], category: 'Medium Format Film' },

  // Medium Format Digital
  { id: 'phaseone', name: 'Phase One IQ4', width: 53.4, height: 40, models: ['Phase One IQ4 150MP'], category: 'Medium Format Digital' },
  { id: 'gfx', name: 'Fujifilm GFX', width: 43.8, height: 32.9, models: ['GFX 100S', 'GFX 100 II', 'GFX 50S II'], category: 'Medium Format Digital' },
  { id: 'hasselblad', name: 'Hasselblad X', width: 43.8, height: 32.9, models: ['X1D II', 'X2D 100C'], category: 'Medium Format Digital' },
  { id: 'pentax645d', name: 'Pentax 645D/Z', width: 43.8, height: 32.8, models: ['Pentax 645D', 'Pentax 645Z'], category: 'Medium Format Digital' },

  // Full Frame
  { id: 'ff', name: 'Full Frame (35mm)', width: 36, height: 24, models: ['Sony A7', 'Canon R5', 'Nikon Z8', 'Leica M'], category: 'Full Frame' },

  // APS
  { id: 'apsh', name: 'APS-H', width: 27.9, height: 18.6, models: ['Canon 1D Mark IV'], category: 'APS' },
  { id: 'apsc', name: 'APS-C (Nikon/Sony/Fuji)', width: 23.5, height: 15.6, models: ['Fuji X-T5', 'Sony A6700', 'Nikon Z50'], category: 'APS-C' },
  { id: 'apsc-canon', name: 'APS-C (Canon)', width: 22.3, height: 14.9, models: ['Canon R7', 'Canon 90D'], category: 'APS-C' },

  // Smaller sensors
  { id: 'mft', name: 'Micro Four Thirds', width: 17.3, height: 13, models: ['OM-1', 'Panasonic GH6', 'Panasonic G9 II'], category: 'Micro Four Thirds' },
  { id: '1inch', name: '1-inch', width: 13.2, height: 8.8, models: ['Sony RX100', 'Nikon 1'], category: '1-inch' },
];

export function getSensorGroups(): SensorGroup[] {
  const groupMap = new Map<string, Sensor[]>();
  for (const sensor of sensors) {
    const group = groupMap.get(sensor.category) || [];
    group.push(sensor);
    groupMap.set(sensor.category, group);
  }
  return Array.from(groupMap.entries()).map(([label, sensors]) => ({ label, sensors }));
}

export function findSensorById(id: string): Sensor | undefined {
  return sensors.find(s => s.id === id);
}
