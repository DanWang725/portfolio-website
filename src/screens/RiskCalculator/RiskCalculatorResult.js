import { useEffect, useState } from 'react';
import ResultDisplay from './component/ResultDisplay';
import { calculateBattle, getStatisticsOfBattle } from './RiskCalculator';
import MersenneTwister from '../../shared-utils/src/Mersenne Twister/Mersenne Twister';
import { useParams } from 'react-router-dom';
const RiskBattleStats = ({ statistics }) => {
  const { attacker, defender, winner, roundsPlayed } = statistics;

  return (
    <div>
      {`Winner: ${winner}`}
      <div>
        <h3>Attacker</h3>
        Battles Won: {attacker.battlesWon}
        {`${attacker.originalTroopCount} Troops -> ${attacker.currentTroopCount} Troops`}
        {Object.entries(attacker.rolls).map(([key, value], index) => {
          return <h2 key={index}>{`${key}:${value}`}</h2>;
        })}
      </div>
      <div>
        <h3>Defender</h3>
        Battles Won: {defender.battlesWon}
        {`${defender.originalTroopCount} Troops ->${defender.currentTroopCount} Troops`}
        {Object.entries(defender.rolls).map(([key, value], index) => {
          return <h2 key={index}>{`${key}:${value}`}</h2>;
        })}
      </div>
    </div>
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
