import { IconType } from 'react-icons';

export type DiceRoll = number;
export type IDiceStats = DiceRoll[];

export interface DiceIcon {
  [key: number]: IconType;
}

export enum RoundSide {
  Attacker = 'attacker',
  Defender = 'defender',
}

export interface IRoundResult {
  attackerRolls: DiceRoll[];
  defenderRolls: DiceRoll[];
  diceResults: RoundSide[];
  attackerLosses: number;
  defenderLosses: number;
}
