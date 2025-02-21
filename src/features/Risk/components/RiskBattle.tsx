import ContentSection from '@components/Sections/ContentSection';
import { Box, Button, Grid2, Typography } from '@mui/material';
import { BattleStatus } from '../battles/Battles';
import useRiskBattleManager, {
  IPlayerData,
} from '../battles/useRiskBattleManager';
import './RiskBattle.css';
import TroopTracker from './TroopTracker';

const RiskBattle: React.FC = () => {
  const { attacker, defender, battleStatus, init, playRound, rounds, seed } =
    useRiskBattleManager();

  const handleStart = () => {
    init(
      Math.floor(Math.random() * 25) + 5,
      Math.floor(Math.random() * 25) + 5,
    );
  };
  return (
    <ContentSection>
      <Typography variant="h4">Risk Battle</Typography>
      {battleStatus == BattleStatus.NotStarted && (
        <Button variant="contained" onClick={handleStart}>
          Start
        </Button>
      )}
      {battleStatus !== BattleStatus.NotStarted && (
        <Grid2 container>
          <Grid2
            size={{ xs: 12, md: 4 }}
            sx={{ border: '1px solid black', width: '30%' }}
          >
            <p>{seed}</p>
            <p>
              <TroopTracker
                id="attacker-live-troops"
                player={attacker ?? ({} as IPlayerData)}
                roundTroopLosses={rounds?.[rounds?.length - 1]?.attackerLosses}
              />
            </p>
            <p>
              <TroopTracker
                id="defender-live-troops"
                player={defender ?? ({} as IPlayerData)}
                roundTroopLosses={rounds?.[rounds?.length - 1]?.defenderLosses}
              />
            </p>
            {battleStatus === BattleStatus.Ongoing && (
              <Button
                variant="contained"
                onClick={() => {
                  playRound();
                }}
              >
                Play Round
              </Button>
            )}
          </Grid2>
          <Grid2
            size={{ xs: 12, md: 8 }}
            key={`rounds`}
            sx={{
              border: '1px solid black',
              height: '50vh',
              width: '100%',
              overflow: { xs: 'auto', md: 'scroll' },
            }}
          >
            {rounds.map((round, index) => {
              return (
                <Box key={`round-${index}`} mb="1rem">
                  <Typography>Round {index + 1}</Typography>
                  <Typography>
                    Attacker: {round.attackerRolls.join(', ')}
                    Attacker Losses: {round.attackerLosses}
                  </Typography>
                  <Typography>
                    Defender: {round.defenderRolls.join(', ')}
                    Defender Losses: {round.defenderLosses}
                  </Typography>
                </Box>
              );
            })}
          </Grid2>
        </Grid2>
      )}
      <Typography>{battleStatus}</Typography>
      <Typography>{rounds.length}</Typography>
      {battleStatus !== BattleStatus.Ongoing &&
        battleStatus !== BattleStatus.NotStarted && (
          <>
            <Typography>
              {battleStatus === BattleStatus.AttackerWins
                ? 'Attacker Wins'
                : 'Defender Wins'}
            </Typography>
            <Button variant="contained" onClick={() => handleStart()}>
              Reset
            </Button>
          </>
        )}
    </ContentSection>
  );
};
export default RiskBattle;
