import { DiceRoll } from '../dice/DiceRoller';

export enum RoundSide {
  Attacker = 'attacker',
  Defender = 'defender',
}

export class RoundResult {
  defenderRolls: DiceRoll[];
  attackerRolls: DiceRoll[];
  /** the winner of that dice index */
  diceResults: RoundSide[];

  attackerLosses: number;
  defenderLosses: number;
  hasComputed: boolean;

  constructor() {
    this.defenderRolls = [];
    this.attackerRolls = [];
    this.attackerLosses = 0;
    this.defenderLosses = 0;
    this.diceResults = [];
    this.hasComputed = false;
  }

  private calculateLosses(): void {
    const min = Math.min(this.attackerRolls.length, this.defenderRolls.length);
    for (let i = 0; i < min; i++) {
      if (this.attackerRolls[i] > this.defenderRolls[i]) {
        this.defenderLosses++;
        this.diceResults.push(RoundSide.Attacker);
      } else {
        this.attackerLosses++;
        this.diceResults.push(RoundSide.Defender);
      }
    }
  }
  public addAttackerRolls(rolls: DiceRoll[]): void {
    this.attackerRolls.push(...rolls);
    this.attackerRolls.sort((a, b) => b - a);
  }

  public addAttackerRoll(roll: DiceRoll): void {
    this.attackerRolls.push(roll);
    this.attackerRolls.sort((a, b) => b - a);
  }

  public addDefenderRolls(rolls: DiceRoll[]): void {
    this.defenderRolls.push(...rolls);
    this.defenderRolls.sort((a, b) => b - a);
  }

  public addDefenderRoll(roll: DiceRoll): void {
    this.defenderRolls.push(roll);
    this.defenderRolls.sort((a, b) => b - a);
  }

  public getAttackerRolls(): DiceRoll[] {
    return this.attackerRolls;
  }
  public getDefenderRolls(): DiceRoll[] {
    return this.defenderRolls;
  }

  public getAttackerLosses(): number {
    if (!this.hasComputed) {
      this.calculateLosses();
      this.hasComputed = true;
    }
    return this.attackerLosses;
  }

  public getDefenderLosses(): number {
    if (!this.hasComputed) {
      this.calculateLosses();
      this.hasComputed = true;
    }
    return this.defenderLosses;
  }
}
