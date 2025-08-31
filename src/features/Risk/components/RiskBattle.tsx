import { Box, Button, Grid2, Typography } from '@mui/material';
import './RiskBattle.css';
import useAutoBattler from '../battles/useAutoBattler';
import BattleSetup from './BattleSetup/BattleSetup';
import RoundList from './RoundList';
import BattleTracker from './BattleTracker/BattleTracker';
import useRiskBattleManager from '../battles/useRiskBattleManager';
import { BattleStatus } from '../types/battles';
import { useEffect, useState } from 'react';
import useSaveableBattles from '../battles/useSaveableBattles';
import { useNavigate, useParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import ResultBanner from './Results/ResultBanner';
import { VictoryChart, VictoryLine } from 'victory';

const RiskBattle: React.FC = () => {
  const { result } = useParams();
  const navigate = useNavigate();

  const [autoBattleSpeed, setAutoBattleSpeed] = useState(800);
  const battleManager = useRiskBattleManager();
  const {
    attacker,
    defender,
    battleStatus,
    init,
    playRound,
    reset,
    rounds,
    end,
  } = battleManager;

  const { toggle: toggleAutobattle, isAutoBattling } = useAutoBattler(
    playRound,
    battleStatus,
    autoBattleSpeed,
  );

  const { getEncodedString, loadBattle } = useSaveableBattles(battleManager);

  const copyGameToClipboard = () => {
    toast.success('Copied to clipboard');
    navigator.clipboard.writeText(
      `${window.location.href}/${getEncodedString()}`,
    );
  };

  useEffect(() => {
    if (result) {
      console.log('result', result);
      loadBattle(result);
    }
  }, [result]);

  const handleStart = (attackertroops: number, defenderTroops: number) => {
    init(attackertroops, defenderTroops);
  };

  const handleReset = () => {
    if (result) {
      navigate('/projects/risk-calculator');
    }
    reset();
  };
  return (
    <>
      {battleStatus == BattleStatus.NotStarted && (
        <BattleSetup handleStart={handleStart} />
      )}
      {battleStatus == BattleStatus.Ended && (
        <ResultBanner
          battleStatus={battleStatus}
          actions={{ handleReset, copyGameToClipboard }}
          rounds={rounds}
          attacker={attacker}
          defender={defender}
        />
      )}

      {battleStatus !== BattleStatus.NotStarted && (
        <Grid2 container mt="1rem" spacing={2}>
          <BattleTracker
            attacker={attacker}
            defender={defender}
            battleStatus={battleStatus}
            rounds={rounds}
            actions={{
              playRound: playRound,
              toggleAutoBattle: toggleAutobattle,
              setAutoBattleSpeed: setAutoBattleSpeed,
              endBattle: end,
            }}
            autoBattleSpeed={autoBattleSpeed}
            isAutoBattling={isAutoBattling}
          />
          <RoundList rounds={rounds} />
        </Grid2>
      )}
    </>
  );
};
export default RiskBattle;
