import { useState } from 'react';
import DiceStatistics from './DiceStatistics';
import { getStatisticsOfBattle } from '../RiskCalculator';
import { Button } from '@mui/material';

const RiskBattleStats = ({ battles }) => {
  const statistics = getStatisticsOfBattle(battles);

  const [isDiceRollsShown, setIsDiceRollsShown] = useState(false);
  const { attacker, defender, winner } = statistics;

  return (
    <>
      <div className="battle-statistics">
        <div className="battle-statistics-player">
          <h3>Attacker {winner === 'A' && '(Winner)'}</h3>
          Battles Won: {attacker.battlesWon}
          <br></br>
          {`${attacker.originalTroopCount} Troops -> ${attacker.currentTroopCount} Troops`}
          {isDiceRollsShown && <h4>Dice Rolls</h4>}
          <DiceStatistics
            diceStats={attacker.rolls}
            hidden={isDiceRollsShown}
          />
        </div>
        <div
          className="battle-statistics-player"
          style={{ alignItems: 'flex-end' }}
        >
          <h3>Defender {winner === 'D' && '(Winner)'}</h3>
          Battles Won: {defender.battlesWon}
          <br></br>
          {`${defender.originalTroopCount} Troops ->${defender.currentTroopCount} Troops`}
          {isDiceRollsShown && <h4>Dice Rolls</h4>}
          <DiceStatistics
            diceStats={defender.rolls}
            additionalClassname="reverse-stats"
            hidden={isDiceRollsShown}
          />
        </div>
      </div>
      <Button onClick={() => setIsDiceRollsShown((value) => !value)}>
        {isDiceRollsShown ? 'Hide' : 'Show Dice Rolls'}
      </Button>
    </>
  );
};
export default RiskBattleStats;
