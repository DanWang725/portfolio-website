import { IRoundResult } from '@features/Risk/types/dice';
import { Box, Grid2, Typography } from '@mui/material';
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
    <Grid2
      id="rounds-container"
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
    </Grid2>
  );
};

export default RoundList;
