import React from 'react';
import PlayerArea from './PlayerArea';

function Board() {
  return (
    <div className="board">
      <PlayerArea player="Player 1" />
      <PlayerArea player="Dog Blade" />
    </div>
  );
}

export default Board; 