import { Box, Button, Divider, Grid2, Slider, Typography } from '@mui/material';
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
    setAutoBattleSpeed: (speed: number) => void;
    endBattle: () => void;
  };
  autoBattleSpeed: number;
  isAutoBattling: boolean;
}

const BattleTracker: React.FC<BattleTrackerProps> = ({
  attacker,
  defender,
  rounds,
  battleStatus,
  actions: { playRound, startAutoBattle, setAutoBattleSpeed, endBattle },
  isAutoBattling,
  autoBattleSpeed,
}) => {
  const handleSpeedChange = (event: Event, newValue: number | number[]) => {
    setAutoBattleSpeed(newValue as number);
  };
  return (
    <Grid2
      size={{ xs: 12, md: 4 }}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <Box>
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
      </Box>

      {battleStatus === BattleStatus.Ongoing && (
        <Box display="flex" flexDirection="column" gap="1rem" mt="1rem">
          <Box
            display={'flex'}
            flexDirection={'row'}
            alignItems={'center'}
            justifyContent={'space-between'}
            gap="1rem"
          >
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
              variant="outlined"
              color="error"
              disabled={isAutoBattling}
              onClick={() => {
                endBattle();
              }}
            >
              End Battle
            </Button>
          </Box>
          <Box
            display={'flex'}
            flexDirection={'row'}
            alignItems={'center'}
            gap="1rem"
          >
            <Button
              variant="contained"
              disabled={isAutoBattling}
              onClick={() => {
                startAutoBattle();
              }}
            >
              Auto
            </Button>
            <Typography>Speed</Typography>
            <Slider
              valueLabelDisplay="auto"
              valueLabelFormat={(value) => `${800 / value}x`}
              value={autoBattleSpeed}
              onChange={handleSpeedChange}
              min={400}
              max={2000}
              step={400}
            ></Slider>
          </Box>
        </Box>
      )}
    </Grid2>
  );
};
export default BattleTracker;
