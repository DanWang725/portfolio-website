import { DiceRoller } from './DiceRoller';

export type DiceRoll = number;

export interface DiceRollCount {
  one: number;
  two: number;
  three: number;
  four: number;
  five: number;
  six: number;
}

export class DiceRollStats {
  diceRolls: number[] = [0, 0, 0, 0, 0, 0];
  roller: DiceRoller;
  constructor(diceRoller: DiceRoller) {
    this.roller = diceRoller;
  }
  private addRoll(roll: number) {
    if (roll < 1 || roll > 6) {
      throw new Error('Invalid dice roll');
    }
    this.diceRolls[roll - 1]++;
  }
  public getStats(): number[] {
    return this.diceRolls;
  }

  public getStatsObject(): DiceRollCount {
    return {
      one: this.diceRolls[0],
      two: this.diceRolls[1],
      three: this.diceRolls[2],
      four: this.diceRolls[3],
      five: this.diceRolls[4],
      six: this.diceRolls[5],
    };
  }

  public getRoll(): DiceRoll {
    const roll = this.roller.roll();
    this.addRoll(roll);
    return roll;
  }
}
