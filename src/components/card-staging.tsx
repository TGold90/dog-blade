import Card, { CardData } from './card';

interface CardStagingProps {
  cards: (CardData | null)[];
  maxCards?: number;
  faceDown?: boolean;
}

function CardStaging({ cards, maxCards = 3, faceDown = true }: CardStagingProps) {
  // Ensure we always have exactly maxCards slots
  const displayCards = [...cards];
  while (displayCards.length < maxCards) {
    displayCards.push(null);
  }
  const slicedCards = displayCards.slice(0, maxCards);

  return (
    <div className="flex gap-6 items-center">
      {slicedCards.map((card, index) => (
        <div key={index} className="relative group">
          <Card 
            card={card || undefined}
            faceDown={faceDown && card !== null}
            size="medium"
          />
          {index === maxCards - 1 && card && (
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gray-900 text-yellow-400 text-xs font-bold px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
              Next Card
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default CardStaging;

