import React, { useState } from 'react';
import Card, { CardData } from './card';
import CardMat from './card-mat';

// Mock data for demonstration
const generateMockCard = (id: string, name: string): CardData => ({
  id,
  name,
  atk: Math.floor(Math.random() * 50) + 20,
  hp: Math.floor(Math.random() * 100) + 50,
});

function Board() {
  // Game state - this will eventually come from game logic
  const [playerDeckCount, setPlayerDeckCount] = useState(20);
  const [opponentDeckCount, setOpponentDeckCount] = useState(20);
  
  const [playerIncomingCards] = useState<(CardData | null)[]>([
    generateMockCard('p1', 'Wolf'),
    generateMockCard('p2', 'Bear'),
    generateMockCard('p3', 'Tiger'),
  ]);
  
  const [opponentIncomingCards] = useState<(CardData | null)[]>([
    generateMockCard('o1', 'Lion'),
    generateMockCard('o2', 'Panther'),
    generateMockCard('o3', 'Leopard'),
  ]);

  const [playerActiveCard] = useState<CardData>(
    generateMockCard('pa', 'Dragon')
  );
  
  const [opponentActiveCard] = useState<CardData>(
    generateMockCard('oa', 'Phoenix')
  );

  return (
    <div className="w-full h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 p-8 overflow-auto">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Opponent Mat */}
        <CardMat
          deckCount={opponentDeckCount}
          incomingCards={opponentIncomingCards}
          isOpponent={true}
          onDeckClick={() => console.log('Opponent deck clicked')}
        />

        {/* Battle Area */}
        <div className="flex flex-col items-center gap-6 py-8">
          {/* Opponent Active Card */}
          <div className="relative group">
            <Card card={opponentActiveCard} size="large" />
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-red-400 text-xs font-bold px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
              Opposing Active Card
            </div>
          </div>

          {/* VS indicator */}
          <div className="text-4xl font-bold text-yellow-400 animate-pulse">
            ⚔️ VS ⚔️
          </div>

          {/* Player Active Card */}
          <div className="relative group">
            <Card card={playerActiveCard} size="large" />
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-green-400 text-xs font-bold px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
              Active Card
            </div>
          </div>
        </div>

        {/* Player Mat */}
        <CardMat
          deckCount={playerDeckCount}
          incomingCards={playerIncomingCards}
          isOpponent={false}
          onDeckClick={() => console.log('Player deck clicked')}
        />

      </div>
    </div>
  );
}

export default Board;
