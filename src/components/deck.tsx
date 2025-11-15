import React from 'react';

interface DeckProps {
  onClick?: () => void;
}

function Deck({ onClick }: DeckProps) {
  return (
    <div className="deck" onClick={onClick}>
      <p>Deck</p>
    </div>
  );
}

export default Deck;
