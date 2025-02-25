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

const RiskBattle: React.FC = () => {
  const [autoBattleSpeed, setAutoBattleSpeed] = useState(800);
  const {
    attacker,
    defender,
    battleStatus,
    init,
    playRound,
    reset,
    rounds,
    seed,
  } = useRiskBattleManager();

  const { text, setIsActive } = useCyclicShifting(battleStatus, 1000);

  const { start: startAutoBattle, isAutoBattling } = useAutoBattler(
    playRound,
    battleStatus,
    autoBattleSpeed,
  );

  useEffect(() => {
    if (
      battleStatus === BattleStatus.AttackerWins ||
      battleStatus === BattleStatus.DefenderWins
    )
      setIsActive(true);
  }, [battleStatus]);

  const handleStart = (attackertroops: number, defenderTroops: number) => {
    init(attackertroops, defenderTroops);
  };
  return (
    <>
      {battleStatus == BattleStatus.NotStarted && (
        <BattleSetup handleStart={handleStart} />
      )}
      {battleStatus !== BattleStatus.Ongoing &&
        battleStatus !== BattleStatus.NotStarted && (
          <Typography>{text}</Typography>
        )}
      {battleStatus !== BattleStatus.NotStarted && (
        <Grid2 container mt="1rem">
          <BattleTracker
            attacker={attacker}
            defender={defender}
            battleStatus={battleStatus}
            rounds={rounds}
            actions={{
              playRound: playRound,
              startAutoBattle: startAutoBattle,
              setAutoBattleSpeed: setAutoBattleSpeed,
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
            <Box
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
            </Box>
            <Button variant="contained" onClick={() => reset()}>
              Reset
            </Button>
          </>
        )}
    </>
  );
};
export default RiskBattle;
