import { Button, Checkbox, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import ResultDisplay from './component/ResultDisplay';
import {
  calculateBattle,
  calculateBattlePhase,
  getTroopCount,
} from './RiskCalculator';
import MersenneTwister from '../../shared-utils/src/Mersenne Twister/Mersenne Twister';
import { ContentCopy } from '@mui/icons-material';
import BattleList from './component/BattleList';
import RiskBattleStats from './component/RiskBattleStats';

const CalculatorWindow = () => {
  const [attackerCount, setAttackerCount] = useState(0);
  const [defenderCount, setDefenderCount] = useState(0);
  const [battleResult, setBattleResult] = useState([]);
  const [isAllBattles, setIsAllBattles] = useState(false);
  const [canContinueBattles, setCanContinueBattles] = useState(true);

  const getLatestTroopCount = () => {
    const { attacker, defender } = getTroopCount(battleResult);

    return {
      attacker: attacker ?? attackerCount,
      defender: defender ?? defenderCount,
    };
  };

  const canBattleFurther = () => {
    const { attacker, defender } = getLatestTroopCount();
    return attacker && defender;
  };
  useEffect(() => {
    if (!(battleResult && battleResult.length > 0)) return;
    setCanContinueBattles(canBattleFurther());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [battleResult]);

  const [seed, setSeed] = useState();
  const [numberGenerator, setNumberGenerator] = useState(null);

  const handleCalculateBattle = (shouldComputeAllBattles = false) => {
    var m = numberGenerator;

    if (!numberGenerator) {
      const tempSeed = Math.ceil(Math.random() * 10000);
      console.log('seed', tempSeed);
      m = new MersenneTwister(tempSeed);
      setSeed(tempSeed);
      setNumberGenerator(m);
    }

    const { attacker, defender } = getLatestTroopCount();

    const results = shouldComputeAllBattles
      ? calculateBattle(attacker, defender, m)
      : [calculateBattlePhase(attacker, defender, m)];
    console.log(results);
    setBattleResult((val) => [...val, ...results]);
  };

  return (
    <>
      {battleResult && battleResult?.length > 0 ? (
        <>
          <div className="battle-result-list-header first-article">
            <h3>{`${battleResult.length + 1} rounds`}</h3>
            <Button
              startIcon={<ContentCopy />}
              variant="outlined"
              onClick={() =>
                navigator.clipboard.writeText(
                  `${window.location.href}/${seed.toString(16)}:${attackerCount.toString(16)}:${defenderCount.toString(16)}:${battleResult.length.toString(16)}`,
                )
              }
            >
              Share Battle Results
            </Button>
            <Button onClick={() => setBattleResult([])}>
              Calculate New Battle
            </Button>
          </div>
          {!canContinueBattles && <RiskBattleStats battles={battleResult} />}
          <div>
            <h3>Last Round</h3>
            <ResultDisplay
              results={battleResult[battleResult.length - 1]}
              battleNumber={battleResult.length - 1}
            />
            {!!canContinueBattles && (
              <>
                <Button onClick={() => handleCalculateBattle(false)}>
                  Next Round
                </Button>
                <Button onClick={() => handleCalculateBattle(true)}>
                  All Rounds
                </Button>
              </>
            )}
          </div>
          <BattleList battles={battleResult} />
        </>
      ) : (
        <>
          <div style={{ display: 'flex' }} className="battle-calculator-inputs">
            <TextField
              onChange={(e) =>
                setAttackerCount(parseInt(e.currentTarget.value, 10))
              }
              label="Attacker Troop Count"
              title="Number of Attacker Troops"
              type="number"
            />
            <TextField
              onChange={(e) =>
                setDefenderCount(parseInt(e.currentTarget.value, 10))
              }
              title="Number of Defender Troops"
              label="Defender Troop Count"
              type="number"
            />
          </div>
          <div>
            <Checkbox
              label="Play all Consecutive Battles"
              onChange={(e) => setIsAllBattles(e.target.checked)}
              checked={isAllBattles}
            />
            Play all Consecutive Battles
          </div>
          <Button
            variant="contained"
            disabled={!attackerCount && !defenderCount}
            onClick={() => handleCalculateBattle(isAllBattles)}
          >
            Calculate Battle
          </Button>
        </>
      )}
    </>
  );
};
export default CalculatorWindow;
