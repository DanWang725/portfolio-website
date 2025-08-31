import { DiceRoller } from '../dice/DiceRoller';
import { DiceRollStats } from '../dice/DiceStats';
import { DiceRoll } from '../types/dice';

export class Player {
  diceStats: DiceRollStats;
  initialTroops: number;
  troops: number;
  constructor(roller: DiceRoller, initialTroops: number) {
    this.diceStats = new DiceRollStats(roller);
    this.initialTroops = initialTroops;
    this.troops = initialTroops;
  }

  public getTroops(): number {
    return this.troops;
  }

  public getInitialTroops(): number {
    return this.initialTroops;
  }

  public getDiceStats(): number[] {
    return this.diceStats.getStats();
  }

  public getRolls(): DiceRoll[] {
    const maxRolls = Math.min(this.troops, 3);
    return Array(maxRolls).map(() => this.diceStats.getRoll());
  }

  public removeTroops(amount: number): void {
    this.troops -= amount;
  }
  public canBattle(): boolean {
    return this.troops > 1;
  }
}
