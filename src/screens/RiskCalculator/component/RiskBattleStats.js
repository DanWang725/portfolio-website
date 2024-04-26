import { useState } from 'react';
import DiceStatistics from './DiceStatistics';
import { getStatisticsOfBattle } from '../RiskCalculator';

const RiskBattleStats = ({ battles }) => {
  const statistics = getStatisticsOfBattle(battles);

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
export default RiskBattleStats;
