# Dog Blade - Game Rules

## Overview
Dog Blade is a simplified 1v1 card battle game inspired by "dit dit". Two players face off with their monsters in turn-based combat until one player runs out of cards.

## Game Setup

### Deck Generation
- Each player receives a randomly generated deck of **20 cards**
- Each card represents a monster with two stats:
  - **ATK (Attack)**: The damage dealt to the opponent's monster each turn
  - **HP (Health Points)**: The amount of damage the monster can take before being defeated

### Starting the Game
1. Both players draw their first card from their deck and place it as their active monster
2. A coin flip (or random selection) determines which player goes first
3. Players take turns attacking each other's active monster

## Gameplay

### Turn Structure
1. **Active Turn**: The current player's monster attacks the opponent's active monster
2. **Damage Calculation**: The attacking monster's ATK is subtracted from the defending monster's current HP
3. **Turn End**: Turn passes to the opponent

### Example Battle
```
Player 1's Monster: 50 ATK / 60 HP
Player 2's Monster: 30 ATK / 120 HP

Turn 1 (Player 1): Player 2's monster takes 50 damage → 120 - 50 = 70 HP remaining
Turn 2 (Player 2): Player 1's monster takes 30 damage → 60 - 30 = 30 HP remaining
Turn 3 (Player 1): Player 2's monster takes 50 damage → 70 - 50 = 20 HP remaining
Turn 4 (Player 2): Player 1's monster takes 30 damage → 30 - 30 = 0 HP (DEFEATED!)
```

### Monster Defeat
When a monster's HP reaches **0 or below**:
1. The monster is defeated and removed from play
2. The player who lost their monster draws the next card from their deck
3. The new monster enters with **full HP**
4. **Important**: The player who just drew a new monster gets the next turn (defender's advantage)

### Win Condition
The game continues until one player **runs out of cards**. The player who still has cards remaining is the winner.

## Key Rules Summary

- ✅ **20 cards per deck** (randomly generated)
- ✅ **2 stats per card**: ATK and HP
- ✅ **1v1 combat**: Only one monster active per player at a time
- ✅ **Turn-based**: Players alternate attacking
- ✅ **Defender's advantage**: When your monster is defeated, you draw a new card and get the next turn
- ✅ **No draws**: Game continues until one player has no cards left
- ✅ **No abilities or special moves**: Pure ATK vs HP combat

## Game Flow Diagram

```
Start Game
    ↓
Generate 20 random cards for each player
    ↓
Both players draw their first card
    ↓
Random player goes first
    ↓
    ┌─────────────────────────┐
    │  Active Player Attacks  │
    └─────────────────────────┘
              ↓
    ┌─────────────────────────┐
    │ Subtract ATK from       │
    │ Defender's HP           │
    └─────────────────────────┘
              ↓
         HP > 0?
         ↙     ↘
      YES      NO
       ↓        ↓
    Switch   Defender draws
    Turns    next card
       ↓        ↓
       ↓    Defender gets
       ↓    next turn
       ↓        ↓
       └────────┘
           ↓
    Any player out
    of cards?
         ↙     ↘
       NO      YES
        ↓        ↓
     Continue  Game Over
     Battle    (Other player wins!)
        ↑
        └─────┘
```

## Strategy Tips

- **High ATK, Low HP**: Glass cannon - deals lots of damage but goes down quickly
- **Low ATK, High HP**: Tank - survives longer but deals less damage
- **Balanced**: Moderate stats in both categories
- **Card advantage**: Keeping more cards than your opponent is key to winning
- **Defender's advantage**: When your monster dies, you get to attack first with your fresh monster

