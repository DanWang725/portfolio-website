import { IPlayerData } from '../types/players';

export const initializePlayerData = (): IPlayerData => {
  return {
    diceStats: [],
    initialTroops: 0,
    troops: 0,
  };
};
