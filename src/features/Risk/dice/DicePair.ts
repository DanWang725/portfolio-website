export enum DicePairWinner {
  Attacker = 'attacker',
  Defender = 'defender',
}

export class DicePair {
  attackerRoll?: number;
  defenderRoll?: number;
  constructor() {
    this.attackerRoll = undefined;
    this.defenderRoll = undefined;
  }
  setAttackerRoll(roll: number) {
    this.attackerRoll = roll;
  }
  setDefenderRoll(roll: number) {
    this.defenderRoll = roll;
  }
  getRolls() {
    return { attacker: this.attackerRoll, defender: this.defenderRoll };
  }
  getWinner() {
    if (!this.attackerRoll) {
      throw new Error('Attacker roll not set');
    }
    if (!this.defenderRoll) {
      return DicePairWinner.Attacker;
    }
    if (this.attackerRoll > this.defenderRoll) {
      return DicePairWinner.Attacker;
    }
    return DicePairWinner.Defender;
  }
}
