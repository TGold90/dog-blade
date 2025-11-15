import React from 'react';

function Card({ name, atk, hp }) {
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