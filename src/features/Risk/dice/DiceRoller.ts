import MersenneTwister from '@utils/Mersenne Twister/Mersenne Twister';

export type DiceRoll = number;

export class DiceRoller {
  generator: MersenneTwister;
  seed: number;

  constructor(seed?: number) {
    if (!seed) seed = Math.ceil(Math.random() * 10000);
    this.seed = seed;
    this.generator = new MersenneTwister(seed);
  }
  roll(): DiceRoll {
    return Math.floor(this.generator.random() * 6) + 1;
  }
}
