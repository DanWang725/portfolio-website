import { DiceRoller } from './DiceRoller';

export class DiceRollStats {
  diceRolls: number[] = [0, 0, 0, 0, 0, 0];
  roller: DiceRoller;
  constructor(diceRoller: DiceRoller) {
    this.roller = diceRoller;
  }
  addRoll(roll: number) {
    if (roll < 1 || roll > 6) {
      throw new Error('Invalid dice roll');
    }
    this.diceRolls[roll - 1]++;
  }
  getStats() {
    return this.diceRolls;
  }
  getRoll() {
    const roll = this.roller.roll();
    this.addRoll(roll);
    return roll;
  }
}
