import MersenneTwister from '../../../shared-utils/src/Mersenne Twister/Mersenne Twister';

export class DiceRoller {
  generator: MersenneTwister;

  constructor(generator: MersenneTwister) {
    this.generator = generator;
  }
  roll() {
    return this.generator.random();
  }
}
