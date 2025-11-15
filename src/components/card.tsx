import React from 'react';

export interface CardData {
  id: string;
  name: string;
  atk: number;
  hp: number;
  currentHp?: number;
}

interface CardProps {
  card?: CardData;
  faceDown?: boolean;
  onClick?: () => void;
  className?: string;
  size?: 'small' | 'medium' | 'large';
}

function Card({ card, faceDown = false, onClick, className = '', size = 'medium' }: CardProps) {
  const sizeClasses = {
    small: 'w-16 h-24',
    medium: 'w-24 h-36',
    large: 'w-32 h-48',
  };

  if (faceDown) {
    return (
      <div
        onClick={onClick}
        className={`${sizeClasses[size]} bg-gradient-to-br from-blue-900 to-purple-900 rounded-lg border-4 border-blue-700 flex items-center justify-center cursor-pointer transition-transform hover:scale-105 shadow-lg ${className}`}
      >
        <div className="text-blue-300 text-4xl font-bold opacity-50">?</div>
      </div>
    );
  }

  if (!card) {
    return (
      <div
        className={`${sizeClasses[size]} bg-gray-800 bg-opacity-50 rounded-lg border-2 border-dashed border-gray-600 flex items-center justify-center ${className}`}
      >
        <div className="text-gray-500 text-xs">Empty</div>
      </div>
    );
  }

  const currentHp = card.currentHp ?? card.hp;
  const hpPercentage = (currentHp / card.hp) * 100;
  const hpColor = hpPercentage > 60 ? 'bg-green-500' : hpPercentage > 30 ? 'bg-yellow-500' : 'bg-red-500';

  return (
    <div
      onClick={onClick}
      className={`${sizeClasses[size]} bg-gradient-to-br from-amber-100 to-amber-200 rounded-lg border-4 border-amber-600 p-2 flex flex-col justify-between cursor-pointer transition-transform hover:scale-105 shadow-xl ${className}`}
    >
      <div className="text-center">
        <h3 className="font-bold text-xs text-gray-800 truncate">{card.name}</h3>
      </div>

      <div className="flex-1 flex items-center justify-center">
        <div className="w-12 h-12 bg-gray-300 rounded-full border-2 border-gray-600 flex items-center justify-center">
          <span className="text-2xl">🐕</span>
        </div>
      </div>

      <div className="space-y-1">
        <div className="flex justify-between items-center text-xs">
          <span className="font-bold text-red-700">ATK</span>
          <span className="font-bold text-red-900">{card.atk}</span>
        </div>
        
        <div className="space-y-0.5">
          <div className="flex justify-between items-center text-xs">
            <span className="font-bold text-green-700">HP</span>
            <span className="font-bold text-green-900">{currentHp}/{card.hp}</span>
          </div>
          <div className="w-full bg-gray-300 rounded-full h-1.5">
            <div
              className={`${hpColor} h-1.5 rounded-full transition-all duration-300`}
              style={{ width: `${hpPercentage}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
