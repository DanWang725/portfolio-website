import { Button, Input, TextField } from '@mui/material';
import { useState } from 'react';
import ResultDisplay from './component/ResultDisplay';
import calculateBattle from './RiskCalculator';
import MersenneTwister from '../../shared-utils/src/Mersenne Twister/Mersenne Twister';

const CalculatorWindow = () => {
  const [attackerCount, setAttackerCount] = useState(0);
  const [defenderCount, setDefenderCount] = useState(0);
  const [battleResult, setBattleResult] = useState([]);
  const [seed, setSeed] = useState();

  const handleCalculateBattle = () => {
    var m = seed ? new MersenneTwister(seed) : new MersenneTwister();
    const results = calculateBattle(attackerCount, defenderCount, m);
    console.log(results);
    setBattleResult(results);
  };

  return (
    <>
      <div style={{ display: 'flex' }}>
        <TextField
          onChange={(e) => setAttackerCount(e.currentTarget.value)}
          label="Attacker Troop Count"
          title="Number of Attacker Troops"
          type="number"
        />
        <TextField
          onChange={(e) => setDefenderCount(e.currentTarget.value)}
          title="Number of Defender Troops"
          label="Defender Troop Count"
          type="number"
        />
        <TextField
          onChange={(e) => setSeed(e.currentTarget.value)}
          title="Seed"
          label="Seed"
          type="number"
        />
      </div>
      <Button
        variant="contained"
        disabled={!attackerCount && !defenderCount}
        onClick={handleCalculateBattle}
      >
        Calculate Battle
      </Button>
      {battleResult &&
        battleResult?.length > 0 &&
        battleResult.map((battle, index) => (
          <ResultDisplay results={battle} key={index} battleNumber={index} />
        ))}
    </>
  );
};
export default CalculatorWindow;
