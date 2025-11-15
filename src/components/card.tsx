import React from 'react';

interface CardProps {
  name: string;
  atk?: number;
  hp?: number;
}

function Card({ name, atk, hp }: CardProps) {
  return (
    <div className="card">
      <p>{name}</p>
      {atk !== undefined && hp !== undefined && (
        <>
          <p>ATK: {atk}</p>
          <p>HP: {hp}</p>
        </>
      )}
    </div>
  );
}

export default Card;
