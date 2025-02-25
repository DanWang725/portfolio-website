import { Button, Grid2 } from '@mui/material';
import TroopTracker from './TroopTracker';
import { IPlayerData } from '@features/Risk/types/players';
import { IRoundResult } from '@features/Risk/types/dice';
import { BattleStatus } from '@features/Risk/types/battles';

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
    <Grid2
      size={{ xs: 12, md: 4 }}
      sx={{ border: '1px solid black', width: '30%' }}
    >
      <p>
        <TroopTracker
          id="attacker-live-troops"
          label="Attacker Troops: "
          player={attacker ?? ({} as IPlayerData)}
          roundTroopLosses={rounds?.[rounds?.length - 1]?.attackerLosses}
        />
      </p>
      <p>
        <TroopTracker
          id="defender-live-troops"
          label="Defender Troops: "
          player={defender ?? ({} as IPlayerData)}
          roundTroopLosses={rounds?.[rounds?.length - 1]?.defenderLosses}
        />
      </p>

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
