import { IRoundResult, RoundSide } from '@features/Risk/types/dice';
import { diceIcons } from '@features/Risk/utils/diceUtils';
import { Box, Divider, Grid2, Typography } from '@mui/material';
import { useEffect } from 'react';
import '../RiskBattle.css';
import { RoundResult } from '@features/Risk/battles/RoundResult';

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
      return 'round-dice-lose';
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
              <Typography>Round {index + 1}</Typography>
              <Typography>
                Attacker:{' '}
                {round.attackerRolls.map((roll, i) => {
                  const Icon = diceIcons[roll];

                  return (
                    <Icon
                      key={roll}
                      key={`round-${index}-attacker-${i}`}
                      className={getDiceClass(
                        RoundSide.Attacker,
                        round.diceResults[i],
                      )}
                    />
                  );
                })}
                Attacker Losses: {round.attackerLosses}
              </Typography>
              <Typography>
                Defender:{' '}
                {round.defenderRolls.map((roll, i) => {
                  const Icon = diceIcons[roll];

                  return (
                    <Icon
                      key={roll}
                      key={`round-${index}-defender-${i}`}
                      className={getDiceClass(
                        RoundSide.Defender,
                        round.diceResults[i],
                      )}
                    />
                  );
                })}
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
