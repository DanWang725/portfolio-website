import { Box, Button, Input } from '@mui/material';
import { useState } from 'react';

interface RiskSetupProps {
  handleStart: (attackerTroops: number, defenderTroops: number) => void;
}

const RiskSetup: React.FC<RiskSetupProps> = ({ handleStart }) => {
  const [attackerTroops, setAttackerTroops] = useState<number>(0);
  const [defenderTroops, setDefenderTroops] = useState<number>(0);

  return (
    <Box>
      <Input
        type="number"
        value={attackerTroops}
        onChange={(e) => setAttackerTroops(parseInt(e.target.value))}
      />
      <Input
        type="number"
        value={defenderTroops}
        onChange={(e) => setDefenderTroops(parseInt(e.target.value))}
      />
      <Button
        variant="contained"
        onClick={() => handleStart(attackerTroops, defenderTroops)}
        disabled={attackerTroops === 0 || defenderTroops === 0}
      >
        Start
      </Button>
    </Box>
  );
};

export default RiskSetup;
