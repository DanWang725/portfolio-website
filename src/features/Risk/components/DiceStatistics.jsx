import { LinearProgress } from '@mui/material';

const DiceStatistics = ({
  diceStats = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 },
  additionalClassname = '',
  hidden = false,
}) => {
  const totalRolls = Object.values(diceStats).reduce((total, current) => {
    return total + current;
  }, 0);
  return (
    hidden &&
    Object.entries(diceStats).map(([diceValue, num], index) => {
      const relativeFrequency = (num / totalRolls) * 100;
      return (
        <div
          key={index}
          className={`dice-roll-statistics ${additionalClassname}`}
        >
          <h2>{diceValue}</h2>
          <LinearProgress value={relativeFrequency} variant="determinate" />
          <p>{num}</p>
        </div>
      );
    })
  );
};
export default DiceStatistics;
