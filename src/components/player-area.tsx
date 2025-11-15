import React, { useState, useEffect } from 'react';
import Card from './card';
import Deck from './deck';

interface CardType {
  name: string;
  atk: number;
  hp: number;
}

interface PlayerAreaProps {
  player: string;
}

// Function to generate a random fantasy monster name
function generateRandomName(): string {
  const prefixes = ['Fire', 'Ice', 'Shadow', 'Storm', 'Earth', 'Wind', 'Light', 'Dark'];
  const suffixes = ['Dragon', 'Golem', 'Phoenix', 'Troll', 'Elf', 'Orc', 'Goblin', 'Wraith'];
  const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
  const suffix = suffixes[Math.floor(Math.random() * suffixes.length)];
  return `${prefix} ${suffix}`;
}

// Function to generate a random card
function generateRandomCard(): CardType {
  return {
    name: generateRandomName(),
    atk: Math.floor(Math.random() * (100 - 10 + 1)) + 10, // Random atk between 10 and 100
    hp: Math.floor(Math.random() * (150 - 30 + 1)) + 30,  // Random hp between 30 and 150
  };
}

// Function to generate a deck of 10 random cards
function generateDeck(): CardType[] {
  return Array.from({ length: 10 }, generateRandomCard);
}

function PlayerArea({ player }: PlayerAreaProps) {
  const [deck, setDeck] = useState<CardType[]>([]);
  const [activeCard, setActiveCard] = useState<CardType | null>(null);

  useEffect(() => {
    setDeck(generateDeck());
  }, []);

  const handleDeckClick = () => {
    if (deck.length > 0) {
      setActiveCard(deck[0]); // Set the first card as the active card
    }
  };

  return (
    <div className="player-area">
      <h2>{player}</h2>
      <div className="deck-and-card">
        <Deck onClick={player !== "Dog Blade" ? handleDeckClick : undefined} />
        <div className="active-card">
          {activeCard && <Card name={activeCard.name} atk={activeCard.atk} hp={activeCard.hp} />}
        </div>
      </div>
      {/* Only show the deck list for Player 1 */}
      {player !== "Dog Blade" && (
        <div className="deck-list-container">
          <h3>Current Deck:</h3>
          <div className="deck-list">
            {deck.map((card, index) => (
              <div key={index} className="card-info">
                <p>{card.name}</p>
                <p>ATK: {card.atk}</p>
                <p>HP: {card.hp}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default PlayerArea;

