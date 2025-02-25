import { useEffect, useState } from 'react';

const RiskCalculatorResult = () => {
  return <></>;
  // const [battleResult, setBattleResult] = useState([]);
  // const { result } = useParams();
  // useEffect(() => {
  //   const results = result?.split(':');
  //   if (!results || results?.length < 3) return;

  //   const parsedResults = results.map((val) => parseInt(val, 16));
  //   console.log('seed', parsedResults[0]);
  //   var m = new MersenneTwister(parsedResults[0]);
  //   setBattleResult(calculateBattle(parsedResults[1], parsedResults[2], m));
  // }, [result]);

  // return (
  //   <>
  //     <h1 className="article-title">Risk Battle Results</h1>
  //     {battleResult && battleResult?.length > 0 && (
  //       <>
  //         <RiskBattleStats battles={battleResult} />
  //         <BattleList battles={battleResult} />
  //       </>
  //     )}
  //   </>
  // );
};
export default RiskCalculatorResult;
