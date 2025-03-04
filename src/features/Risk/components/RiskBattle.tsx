import { Box, Button, Grid2, Typography } from '@mui/material';
import './RiskBattle.css';
import useAutoBattler from '../battles/useAutoBattler';
import BattleSetup from './BattleSetup/BattleSetup';
import DiceStatistics from './DiceStatistics';
import RoundList from './RoundList';
import BattleTracker from './BattleTracker/BattleTracker';
import useRiskBattleManager from '../battles/useRiskBattleManager';
import { BattleStatus } from '../types/battles';
import useCyclicShifting from '@hooks/TextEffects/useCyclicShifting';
import { useScrollSection } from '@hooks/useScrollSection';
import { useEffect, useState } from 'react';
import useSaveableBattles from '../battles/useSaveableBattles';
import { useNavigate, useParams } from 'react-router-dom';

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
      {battleStatus !== BattleStatus.Ongoing &&
        battleStatus !== BattleStatus.NotStarted && (
          <>
            <Typography>
              {battleStatus === BattleStatus.AttackerWins
                ? 'Attacker Wins'
                : 'Defender Wins'}
            </Typography>
            <Box>
              <Button variant="contained" onClick={handleReset}>
                Reset
              </Button>
              <Button onClick={copyGameToClipboard}>Share</Button>
            </Box>
            {/* <Box
              display="flex"
              flexDirection="row"
              justifyContent={'space-around'}
            >
              <Box width={'100%'}>
                <DiceStatistics diceStats={attacker?.diceStats ?? []} />
              </Box>
              <Box width={'100%'}>
                <DiceStatistics diceStats={defender?.diceStats ?? []} />
              </Box>
            </Box> */}
          </>
        )}
    </>
  );
};
export default RiskBattle;
