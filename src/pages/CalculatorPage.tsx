import { useState, useCallback, useEffect } from 'react';
import { CalculatorCard, type CardState } from '../components/CalculatorCard';

let nextId = 1;

function createCard(sensorId = 'ff', focalLength = '', aperture = '', distance = ''): CardState {
  return {
    id: String(nextId++),
    sensorId,
    focalLength,
    aperture,
    distance,
  };
}

function parseCardParam(param: string): CardState | null {
  // Format: sensor-fl-ap or sensor-fl-ap@dist
  let distance = '';
  let core = param;
  const atIdx = param.indexOf('@');
  if (atIdx !== -1) {
    distance = param.slice(atIdx + 1);
    core = param.slice(0, atIdx);
  }

  const lastDash = core.lastIndexOf('-');
  if (lastDash === -1) return null;
  const rest = core.slice(0, lastDash);
  const aperture = core.slice(lastDash + 1);

  const secondLastDash = rest.lastIndexOf('-');
  if (secondLastDash === -1) return null;
  const sensorId = rest.slice(0, secondLastDash);
  const focalLength = rest.slice(secondLastDash + 1);

  if (!sensorId) return null;
  return createCard(sensorId, focalLength, aperture, distance);
}

function getInitialCards(): CardState[] {
  const params = new URLSearchParams(window.location.search);

  // New format: ?c=gfx-80-1.7&c=apsc-50-1.8
  const cardParams = params.getAll('c');
  if (cardParams.length > 0) {
    const cards = cardParams.map(parseCardParam).filter((c): c is CardState => c !== null);
    if (cards.length > 0) return cards;
  }

  // Legacy format from API redirect: ?sensor=gfx&fl=80&ap=1.7
  const sensor = params.get('sensor');
  const fl = params.get('fl');
  const ap = params.get('ap');
  if (sensor && fl && ap) {
    return [createCard(sensor, fl, ap)];
  }

  return [createCard()];
}

function syncUrl(cards: CardState[]) {
  const params = new URLSearchParams();
  for (const card of cards) {
    if (card.focalLength || card.aperture || card.sensorId !== 'ff') {
      let value = `${card.sensorId}-${card.focalLength || '0'}-${card.aperture || '0'}`;
      if (card.distance) {
        value += `@${card.distance}`;
      }
      params.append('c', value);
    }
  }
  const qs = params.toString();
  const url = qs ? `/?${qs}` : '/';
  window.history.replaceState({}, '', url);
}

export function CalculatorPage() {
  const [cards, setCards] = useState<CardState[]>(getInitialCards);

  useEffect(() => {
    syncUrl(cards);
  }, [cards]);

  const updateCard = useCallback((updated: CardState) => {
    setCards(prev => prev.map(c => c.id === updated.id ? updated : c));
  }, []);

  const removeCard = useCallback((id: string) => {
    setCards(prev => prev.filter(c => c.id !== id));
  }, []);

  const addCard = useCallback(() => {
    setCards(prev => {
      const last = prev[prev.length - 1];
      return [...prev, createCard(last?.sensorId, last?.focalLength, last?.aperture, last?.distance)];
    });
  }, []);

  return (
    <main className="flex-1 max-w-7xl mx-auto w-full px-4 py-4">
      <div className="grid grid-cols-1 sm:grid-cols-[repeat(auto-fill,minmax(320px,1fr))] gap-5">
        {cards.map(card => (
          <CalculatorCard
            key={card.id}
            card={card}
            onChange={updateCard}
            onRemove={cards.length > 1 ? () => removeCard(card.id) : undefined}
          />
        ))}

        <button
          onClick={addCard}
          className="rounded-xl border-2 border-dashed border-gray-300 dark:border-gray-600 hover:border-teal-500 dark:hover:border-teal-400 flex items-center justify-center py-6 text-gray-500 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors cursor-pointer bg-transparent"
        >
          <div className="text-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto mb-2">
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
            <span className="text-sm font-medium">Add Comparison</span>
          </div>
        </button>
      </div>
    </main>
  );
}
