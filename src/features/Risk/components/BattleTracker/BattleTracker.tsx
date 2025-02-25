import { Box, Button, Divider, Grid2, Typography } from '@mui/material';
import TroopTracker from './TroopTracker';
import { IPlayerData } from '@features/Risk/types/players';
import { IRoundResult } from '@features/Risk/types/dice';
import { BattleStatus } from '@features/Risk/types/battles';
import TroopDisplay from './TroopDisplay';

interface BattleTrackerProps {
  attacker: IPlayerData;
  defender: IPlayerData;
  rounds: IRoundResult[];
  battleStatus: BattleStatus;
  actions: {
    playRound: () => void;
    startAutoBattle: () => void;
  };
  isAutoBattling: boolean;
}

const BattleTracker: React.FC<BattleTrackerProps> = ({
  attacker,
  defender,
  rounds,
  battleStatus,
  actions: { playRound, startAutoBattle },
  isAutoBattling,
}) => {
  return (
    <Grid2 size={{ xs: 12, md: 4 }} sx={{ width: '30%' }}>
      <Box mb="1rem">
        <Typography variant="h6">Battle Statistics</Typography>
        <Divider />
      </Box>
      <p>
        <TroopTracker
          id="attacker-live-troops"
          label="Attacker's Troops: "
          player={attacker ?? ({} as IPlayerData)}
          roundTroopLosses={rounds?.[rounds?.length - 1]?.attackerLosses}
        />
      </p>
      <TroopDisplay troopCount={attacker.troops} />
      <p>
        <TroopTracker
          id="defender-live-troops"
          label="Defender's Troops: "
          player={defender ?? ({} as IPlayerData)}
          roundTroopLosses={rounds?.[rounds?.length - 1]?.defenderLosses}
        />
      </p>
      <TroopDisplay troopCount={defender.troops} />

      {battleStatus === BattleStatus.Ongoing && (
        <>
          <Button
            variant="contained"
            disabled={isAutoBattling}
            onClick={() => {
              playRound();
            }}
          >
            Play Round
          </Button>
          <Button
            variant="contained"
            disabled={isAutoBattling}
            onClick={() => {
              startAutoBattle();
            }}
          >
            AutoBattle
          </Button>
        </>
      )}
    </Grid2>
  );
};
export default BattleTracker;
