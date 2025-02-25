import { Box, Button, Grid2, Typography } from '@mui/material';
import './RiskBattle.css';
import useAutoBattler from '../battles/useAutoBattler';
import RiskSetup from './RiskSetup';
import DiceStatistics from './DiceStatistics';
import RoundList from './RoundList';
import BattleTracker from './BattleTracker/BattleTracker';
import useRiskBattleManager from '../battles/useRiskBattleManager';
import { BattleStatus } from '../types/battles';

const RiskBattle: React.FC = () => {
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

  const { start: startAutoBattle, isAutoBattling } = useAutoBattler(
    playRound,
    battleStatus,
    50,
  );

  const handleStart = (attackertroops: number, defenderTroops: number) => {
    init(attackertroops, defenderTroops);
  };
  return (
    <>
      {battleStatus == BattleStatus.NotStarted && (
        <RiskSetup handleStart={handleStart} />
      )}
      {battleStatus !== BattleStatus.NotStarted && (
        <Grid2 container>
          <BattleTracker
            attacker={attacker}
            defender={defender}
            battleStatus={battleStatus}
            rounds={rounds}
            actions={{ playRound: playRound, startAutoBattle: startAutoBattle }}
            isAutoBattling={isAutoBattling}
          />
          <RoundList rounds={rounds} />
        </Grid2>
      )}
      <Typography>{battleStatus}</Typography>
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
