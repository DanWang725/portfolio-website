import { Box, Button, IconButton, Input, Typography } from '@mui/material';
import { useState } from 'react';
import PlayerTroopField from './PlayerTroopField';

interface BattleSetupProps {
  handleStart: (attackerTroops: number, defenderTroops: number) => void;
}

const BattleSetup: React.FC<BattleSetupProps> = ({ handleStart }) => {
  const [attackerTroops, setAttackerTroops] = useState<number>(0);
  const [defenderTroops, setDefenderTroops] = useState<number>(0);
  const addDefenderTroops = (value: number, replace = false) => {
    const newValue = replace ? value : defenderTroops + value;
    setDefenderTroops(Math.max(newValue, 0));
  };
  const addAttackerTroops = (value: number, replace = false) => {
    const newValue = replace ? value : attackerTroops + value;
    setAttackerTroops(Math.max(newValue, 0));
  };
  return (
    <Box
      alignItems={'center'}
      display={'flex'}
      flexDirection={'column'}
      mt="1rem"
    >
      <Box
        display={'flex'}
        flexDirection={'row'}
        justifyContent={'space-evenly'}
        width={'100%'}
      >
        <PlayerTroopField
          playerLabel="Attacker"
          troopCount={attackerTroops}
          addTroops={addAttackerTroops}
        />
        <PlayerTroopField
          playerLabel="Defender"
          troopCount={defenderTroops}
          addTroops={addDefenderTroops}
        />
      </Box>
      <Button
        onClick={() => handleStart(attackerTroops, defenderTroops)}
        variant="contained"
        disabled={attackerTroops === 0 || defenderTroops === 0}
      >
        Start Battle!
      </Button>
    </Box>
  );
};

export default BattleSetup;
