import { IRoundResult } from '@features/Risk/types/dice';
import { Box, Divider, Grid2, Typography } from '@mui/material';
import { useEffect } from 'react';

interface RoundListProps {
  rounds: IRoundResult[];
}
const RoundList: React.FC<RoundListProps> = ({ rounds }) => {
  useEffect(() => {
    updateScroll();
  }, [rounds]);

  const updateScroll = () => {
    const element = document.getElementById('rounds-container');
    if (!element) return;
    element.scrollTop = element.scrollHeight;
  };
  return (
    <Grid2 size={{ xs: 12, md: 8 }} key={`rounds`}>
      <Box mb="1rem">
        <Typography variant="h6">Past Rounds</Typography>
        <Divider />
      </Box>
      <Box
        id="rounds-container"
        sx={{
          height: { xs: 'auto', md: '50vh' },
          width: '100%',
          overflow: { xs: 'visible', md: 'scroll' },
        }}
      >
        {rounds.map((round, index) => {
          return (
            <Box
              key={`round-${index}`}
              mb="1rem"
              sx={{
                animation: 'fadeIn 0.5s',
                opacity: 1,
              }}
            >
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
      </Box>
    </Grid2>
  );
};

export default RoundList;
