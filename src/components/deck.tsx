import React from 'react';

interface DeckProps {
  cardsRemaining: number;
  onClick?: () => void;
  position?: 'left' | 'right';
}

function Deck({ cardsRemaining, onClick, position = 'left' }: DeckProps) {
  const stackDepth = Math.min(8, Math.max(1, Math.ceil(cardsRemaining / 3)));
  
  return (
    <div 
      onClick={onClick}
      className="relative cursor-pointer group"
      style={{ 
        width: '120px',
        height: '160px',
        perspective: '1000px'
      }}
    >
      {/* 3D Stacked cards effect with diagonal offset */}
      {[...Array(stackDepth)].map((_, index) => (
        <div
          key={index}
          className="absolute w-24 h-36 bg-gradient-to-br from-blue-900 to-purple-900 rounded-lg border-4 border-blue-700 flex items-center justify-center transition-all group-hover:scale-105"
          style={{
            bottom: `${index * 2}px`,
            left: `${index * 2}px`,
            zIndex: index,
            boxShadow: '2px 4px 8px rgba(0, 0, 0, 0.4)',
            transform: `translate(${-index * 1.5}px, ${-index * 1.5}px)`,
          }}
        >
          {index === stackDepth - 1 && (
            <>
              <div className="text-blue-300 text-4xl font-bold opacity-50">?</div>
            </>
          )}
        </div>
      ))}

      {/* Card count badge */}
      <div 
        className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-blue-800 bg-opacity-80 text-blue-200 text-xs font-bold px-2 py-1 rounded pointer-events-none"
        style={{ zIndex: stackDepth + 1 }}
      >
        {cardsRemaining}
      </div>

      {/* Tooltip */}
      <div 
        className={`absolute -top-8 ${position === 'right' ? 'right-0' : 'left-0'} bg-gray-900 text-gray-300 text-xs font-bold px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-50`}
      >
        Deck ({cardsRemaining} cards)
      </div>
    </div>
  );
}

export default Deck;
