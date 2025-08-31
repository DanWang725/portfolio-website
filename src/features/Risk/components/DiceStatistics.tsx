import { Box, LinearProgress } from '@mui/material';
import { IDiceStats } from '../types/dice';

interface DiceStatisticsProps {
  diceStats: IDiceStats;
  additionalClassname?: string;
  hidden?: boolean;
}
const DiceStatistics: React.FC<DiceStatisticsProps> = ({
  diceStats,
  additionalClassname = '',
  hidden = false,
}) => {
  const totalRolls = diceStats.reduce((total, current) => {
    return total + current;
  }, 0);
  return diceStats.map((num, index) => {
    const relativeFrequency = (num / totalRolls) * 100;
    return (
      <Box
        key={index}
        className={`dice-roll-statistics ${additionalClassname}`}
      >
        <h2>{index + 1}</h2>
        <LinearProgress value={relativeFrequency} variant="determinate" />
        <p>{num}</p>
      </Box>
    );
  });
};
export default DiceStatistics;
