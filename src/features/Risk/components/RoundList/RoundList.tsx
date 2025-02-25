import { IRoundResult, RoundSide } from '@features/Risk/types/dice';
import { diceIcons } from '@features/Risk/utils/diceUtils';
import { Box, Divider, Grid2, Typography } from '@mui/material';
import { useEffect } from 'react';
import '../RiskBattle.css';

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

  const getDiceClass = (side: RoundSide, winner?: RoundSide) => {
    if (!winner) {
      return 'round-dice-unused';
    }

    if (side === winner) {
      return 'round-dice-win';
    } else {
      return 'round-dice-unused';
    }
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
              <Typography variant="h6">Round {index + 1}</Typography>
              <Box display="flex" justifyContent="start" gap="1rem">
                <Box>
                  <Typography height="2rem">Attacker: </Typography>
                  <Typography height="2rem">Defender: </Typography>
                </Box>
                <Box>
                  <Typography>
                    {round.attackerRolls.map((roll, i) => {
                      const Icon = diceIcons[roll];

                      return (
                        <Icon
                          key={`round-${index}-attacker-${i}`}
                          className={`round-dice ${getDiceClass(
                            RoundSide.Attacker,
                            round.diceResults[i],
                          )}`}
                        />
                      );
                    })}
                  </Typography>
                  <Typography>
                    {round.defenderRolls.map((roll, i) => {
                      const Icon = diceIcons[roll];

                      return (
                        <Icon
                          key={`round-${index}-defender-${i}`}
                          className={`round-dice ${getDiceClass(
                            RoundSide.Defender,
                            round.diceResults[i],
                          )}`}
                        />
                      );
                    })}
                  </Typography>
                </Box>
                <Box>
                  <Typography height={'2rem'}>
                    Attacker Losses: {round.attackerLosses}
                  </Typography>
                  <Typography height={'2rem'}>
                    Defender Losses: {round.defenderLosses}
                  </Typography>
                </Box>
              </Box>
            </Box>
          );
        })}
      </Box>
    </Grid2>
  );
};

export default RoundList;
