export type DiceRoll = number;
export type IDiceStats = DiceRoll[];

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
