import { DiceRoller } from '../dice/DiceRoller';
import { DiceRollStats } from '../dice/DiceStats';
import { Player } from './Player';
import { RoundResult } from './RoundResult';

enum BattleStatus {
  Ongoing = 'ongoing',
  AttackerWins = 'attackerWins',
  DefenderWins = 'defenderWins',
}

class Battle {
  rounds: RoundResult[];
  attacker: Player;
  defender: Player;

  public static init(
    attackerTroops: number,
    defenderTroops: number,
    seed: number | undefined,
  ): Battle {
    if (seed === undefined) seed = Math.ceil(Math.random() * 10000);
    const roller = new DiceRoller(seed);
    const attacker = new Player(roller, attackerTroops);
    const defender = new Player(roller, defenderTroops);
    const battle = new Battle(attacker, defender);

    return battle;
  }

  public constructor(attacker: Player, defender: Player) {
    this.attacker = attacker;
    this.defender = defender;
    this.rounds = [];
  }

  public getStatus(): string {
    if (!this.attacker.canBattle()) {
      return BattleStatus.DefenderWins;
    }
    if (!this.defender.canBattle()) {
      return BattleStatus.AttackerWins;
    }
    return BattleStatus.Ongoing;
  }

  public playRound(): RoundResult | null {
    if (this.getStatus() !== BattleStatus.Ongoing) {
      return null;
    }
    const round = new RoundResult();
    round.addAttackerRolls(this.attacker.getRolls());
    round.addDefenderRolls(this.defender.getRolls());
    this.rounds.push(round);
    return round;
  }

  public getRoundsPlayed(): number {
    return this.rounds.length;
  }
}
