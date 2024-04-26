export const diceStats = {
  1: 0,
  2: 0,
  3: 0,
  4: 0,
  5: 0,
  6: 0,
};
const playerStats = {
  rolls: diceStats,
  battlesWon: 0,
  originalTroopCount: 0,
  currentTroopCount: 0,
};
export const battleStatsTemplate = {
  attacker: playerStats,
  defender: playerStats,
  winner: 'NA',
  roundsPlayed: 0,
};
