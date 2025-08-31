import { IDiceStats } from './dice';

export interface IPlayerData {
  diceStats: IDiceStats;
  initialTroops: number;
  troops: number;
}

export enum Player {
  Attacker = 'attacker',
  Defender = 'defender',
}
