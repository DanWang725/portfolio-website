import { useEffect, useState } from 'react';
import ResultDisplay from './component/ResultDisplay';
import { calculateBattle, getStatisticsOfBattle } from './RiskCalculator';
import MersenneTwister from '../../shared-utils/src/Mersenne Twister/Mersenne Twister';
import { useParams } from 'react-router-dom';
import DiceStatistics from './component/DiceStatistics';
const RiskBattleStats = ({ statistics }) => {
  const [isDiceRollsShown, setIsDiceRollsShown] = useState(false);
  const { attacker, defender, winner, roundsPlayed } = statistics;

  return (
    <>
      <div className="battle-statistics">
        <div className="battle-statistics-player">
          <h3>Attacker</h3>
          Battles Won: {attacker.battlesWon}
          <br></br>
          {`${attacker.originalTroopCount} Troops -> ${attacker.currentTroopCount} Troops`}
          <h4>Dice Rolls</h4>
          <DiceStatistics
            diceStats={attacker.rolls}
            hidden={isDiceRollsShown}
          />
        </div>
        <div
          className="battle-statistics-player"
          style={{ alignItems: 'flex-end' }}
        >
          <h3>Defender</h3>
          Battles Won: {defender.battlesWon}
          <br></br>
          {`${defender.originalTroopCount} Troops ->${defender.currentTroopCount} Troops`}
          <h4>Dice Rolls</h4>
          <DiceStatistics
            diceStats={defender.rolls}
            additionalClassname="reverse-stats"
            hidden={isDiceRollsShown}
          />
        </div>
      </div>
      <button onClick={() => setIsDiceRollsShown((value) => !value)}>
        {isDiceRollsShown ? 'Hide' : 'Show'}
      </button>
    </>
  );
};
const RiskCalculatorResult = () => {
  const [battleResult, setBattleResult] = useState([]);
  const results = getStatisticsOfBattle(battleResult);
  const { result } = useParams();
  useEffect(() => {
    const results = result?.split(':');
    if (!results || results?.length < 3) return;

    const parsedResults = results.map((val) => parseInt(val, 16));
    console.log('seed', parsedResults[0]);
    var m = new MersenneTwister(parsedResults[0]);
    setBattleResult(calculateBattle(parsedResults[1], parsedResults[2], m));
  }, [result]);
  console.log(results);

  return (
    <>
      <h1 className="article-title">Risk Battle Results</h1>
      {battleResult && battleResult?.length > 0 && (
        <>
          <RiskBattleStats statistics={results} />
          {battleResult.map((battle, index) => (
            <ResultDisplay results={battle} key={index} battleNumber={index} />
          ))}
        </>
      )}
    </>
  );
};
export default RiskCalculatorResult;
