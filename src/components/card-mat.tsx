import Deck from './deck';
import CardStaging from './card-staging';
import { CardData } from './card';

interface CardMatProps {
  deckCount: number;
  incomingCards: (CardData | null)[];
  isOpponent?: boolean;
  onDeckClick?: () => void;
}

function CardMat({ deckCount, incomingCards, isOpponent = false, onDeckClick }: CardMatProps) {
  const deckPosition = isOpponent ? 'right' : 'left';
  const label = isOpponent ? 'Opposing Player Mat' : 'Player Mat';

  return (
    <div className={`relative bg-linear-to-br ${isOpponent ? 'from-red-900/20 to-red-700/20' : 'from-green-900/20 to-green-700/20'} border-4 ${isOpponent ? 'border-red-500' : 'border-green-500'} rounded-xl p-6 min-h-[200px] group`}>
      {/* Tooltip */}
      <div className={`absolute top-2 right-4 bg-gray-900 text-sm font-bold px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity ${isOpponent ? 'text-red-400' : 'text-green-400'}`}>
        {label}
      </div>

      {/* Deck - positioned absolutely */}
      <div className={`absolute ${deckPosition === 'right' ? 'right-6' : 'left-6'} top-1/2 transform -translate-y-1/2`}>
        <Deck 
          cardsRemaining={deckCount} 
          onClick={onDeckClick}
          position={deckPosition}
        />
      </div>

      {/* Incoming Cards Staging - centered */}
      <div className="flex items-center justify-center">
        <CardStaging cards={incomingCards} maxCards={3} faceDown={isOpponent} />
      </div>
    </div>
  );
}

export default CardMat;
