import { DiceRoller } from '../dice/DiceRoller';
import { BattleStatus } from '../types/battles';
import { Player } from './Player';
import { RoundResult } from './RoundResult';

export class Battle {
  rounds: RoundResult[];
  attacker: Player;
  defender: Player;
  status: BattleStatus;

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
    this.status = BattleStatus.Ongoing;
  }

  private updateStatus(): string {
    if (!this.attacker.canBattle()) {
      return BattleStatus.Ended;
    }
    if (!this.defender.canBattle()) {
      return BattleStatus.Ended;
    }
    return BattleStatus.Ongoing;
  }

  public playRound(): RoundResult | null {
    console.log('battle');
    if (this.status !== BattleStatus.Ongoing) {
      return null;
    }
    const round = new RoundResult();
    round.addAttackerRolls(this.attacker.getRolls());
    round.addDefenderRolls(this.defender.getRolls());
    this.rounds.push(round);
    this.updateStatus();
    return round;
  }

  public getRoundsPlayed(): number {
    console.log('I got called');
    return this.rounds.length;
  }
}
