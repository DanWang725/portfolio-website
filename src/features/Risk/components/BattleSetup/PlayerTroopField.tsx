import { riskTroops } from '@features/Risk/utils/troopsUtils';
import { Box, Button, Input, SxProps, Typography } from '@mui/material';
import { replace } from 'react-router-dom';

interface PlayerTroopFieldProps {
  troopCount: number;
  playerLabel: string;
  addTroops: (troopValue: number, replace?: boolean) => void;
}

const PlayerTroopField: React.FC<PlayerTroopFieldProps> = ({
  troopCount,
  playerLabel,
  addTroops,
}) => {
  return (
    <Box display={'flex'} flexDirection={'column'}>
      <Typography variant="h5">{playerLabel} Units</Typography>
      <Input
        type="number"
        value={troopCount}
        onChange={(e) => addTroops(parseInt(e.target.value), true)}
      />
      <Box>
        {riskTroops.map((troop, index) => (
          <Button
            onClick={() => addTroops(troop.value)}
            key={index}
            sx={{ color: 'dodgerblue' }}
          >
            <troop.Icon />+{troop.value}
          </Button>
        ))}
      </Box>
      <Box>
        {riskTroops.map((troop, index) => (
          <Button
            onClick={() => addTroops(-troop.value)}
            key={index}
            sx={{ color: 'salmon' }}
            disabled={troopCount < troop.value}
          >
            <troop.Icon />-{troop.value}
          </Button>
        ))}
      </Box>
    </Box>
  );
};
export default PlayerTroopField;
