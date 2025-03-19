import { BattleResult, BattleStatus } from '@features/Risk/types/battles';
import { IRoundResult } from '@features/Risk/types/dice';
import { IPlayerData, Player } from '@features/Risk/types/players';
import { calculateBattleOutcome } from '@features/Risk/utils/playerUtils';
import { Box, Button, IconButton, Typography } from '@mui/material';
import { Link } from '@mui/icons-material';

interface ResultBannerProps {
  battleStatus: BattleStatus;
  actions: {
    handleReset: () => void;
    copyGameToClipboard: () => void;
  };
  rounds: IRoundResult[];
  attacker: IPlayerData;
  defender: IPlayerData;
}

const PlayerLabelMap = {
  [Player.Attacker]: 'Attacker',
  [Player.Defender]: 'Defender',
};

const BattleResultMap = {
  [BattleResult.Minor]: 'Minor',
  [BattleResult.Major]: 'Major',
  [BattleResult.Overwhelming]: 'Overwhelming',
};

const ResultBanner: React.FC<ResultBannerProps> = ({
  actions,
  rounds,
  attacker,
  defender,
}) => {
  const { handleReset, copyGameToClipboard } = actions;
  const battleOutcome = calculateBattleOutcome(attacker, defender);
  return (
    <Box
      className="battle-results-container"
      padding={2}
      display="flex"
      justifyContent="space-between"
    >
      <Box>
        <Typography variant="h4">
          {PlayerLabelMap[battleOutcome.winner]}{' '}
          {BattleResultMap[battleOutcome.result]} Victory
        </Typography>
      </Box>
      <Box display="flex" flexDirection="column" gap={2} alignItems="flex-end">
        <Button onClick={copyGameToClipboard} sx={{ width: '6rem' }}>
          <Link /> Share
        </Button>
        <Button
          variant="contained"
          onClick={handleReset}
          sx={{ width: '10rem' }}
        >
          New Battle
        </Button>
      </Box>
    </Box>
  );
};
export default ResultBanner;
