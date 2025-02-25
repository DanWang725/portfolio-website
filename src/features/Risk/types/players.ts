import { IDiceStats } from './dice';

export interface IPlayerData {
  diceStats: IDiceStats;
  initialTroops: number;
  troops: number;
}
