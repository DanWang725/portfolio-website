import { DicePair } from '../dice/DicePair';

export interface RoundResult {
  diceRolls: DicePair[];
  attackerLosses: number;
  defenderLosses: number;
}
