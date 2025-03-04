import {
  getRiskTroopSplit,
  riskTroops,
} from '@features/Risk/utils/troopsUtils';
import { Box } from '@mui/material';
import '../RiskBattle.css';

interface TroopDisplayProps {
  troopCount: number;
  classname?: string;
}
const TroopDisplay: React.FC<TroopDisplayProps> = ({
  troopCount,
  classname = '',
}) => {
  const counts = getRiskTroopSplit(troopCount);

  return (
    <Box
      sx={{
        minHeight: '2rem',
      }}
    >
      {riskTroops.toReversed().map((troop, index) => (
        <>
          {counts[index] < 5 ? (
            Array.from(Array(counts[index])).map((_, i) => (
              <troop.Icon
                key={`troop-display-${counts[index]}-${index}-${i}`}
                className={`troop-display-icon ${classname}`}
              />
            ))
          ) : (
            <>
              <troop.Icon
                className={`troop-display-icon ${classname}`}
                key={`troop-display-multi-${counts[index]}-${index}`}
              />{' '}
              <span className={`troop-display-count ${classname}`}>
                x {counts[index]}
              </span>
            </>
          )}
        </>
      ))}
    </Box>
  );
};
export default TroopDisplay;
