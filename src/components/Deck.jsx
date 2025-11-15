import React from 'react';

function Deck({ onClick }) {
  return (
    <div className="deck" onClick={onClick}>
      <p>Deck</p>
    </div>
  );
}

export default Deck; 