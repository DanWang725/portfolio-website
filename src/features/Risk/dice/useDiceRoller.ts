import MersenneTwister from '@utils/Mersenne Twister/Mersenne Twister';
import { useState } from 'react';
import { DiceRoll } from './DiceStats';

const useDiceRoller = () => {
  const [seed, setSeed] = useState<number>(1);
  const [generator, setGenerator] = useState<MersenneTwister | null>(null);

  const init = (seed?: number) => {
    if (!seed) seed = Math.ceil(Math.random() * 10000);
    setSeed(seed);
    const newGenerator = new MersenneTwister(seed);
    setGenerator(newGenerator);
  };

  const roll = (): DiceRoll => {
    if (!generator) {
      throw new Error('DiceRoller not initialized');
    }
    const result = Math.floor(generator.random() * 6) + 1;
    console.log('Roll:', result);
    return result;
  };

  return { init, roll, seed };
};
export default useDiceRoller;
