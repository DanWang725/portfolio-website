import { DiceRollStats } from '../dice/DiceStats';
import { RoundResult } from './RoundResult';

enum BattleResultWinner {
  Attacker = 'attacker',
  Defender = 'defender',
  Draw = 'draw',
}

interface Battle {
  attackerRolls: DiceRollStats;
  defenderRolls: DiceRollStats;
  rounds: RoundResult[];
  attackerInitialTroops: number;
  defenderInitialTroops: number;
  attackerLosses: number;
  defenderLosses: number;
}

interface BattleResult extends Battle {
  result: BattleResultWinner;
}
