import {
  getRiskTroopSplit,
  riskTroops,
} from '@features/Risk/utils/troopsUtils';
import { Box } from '@mui/material';
import '../RiskBattle.css';

interface TroopDisplayProps {
  troopCount: number;
}
const TroopDisplay: React.FC<TroopDisplayProps> = ({ troopCount }) => {
  const counts = getRiskTroopSplit(troopCount);

  return (
    <Box
      sx={{
        height: '2rem',
      }}
    >
      {riskTroops.toReversed().map((troop, index) => (
        <>
          {counts[index] < 20 ? (
            Array.from(Array(counts[index])).map((_, i) => (
              <troop.Icon key={i} className="troop-display-icon" />
            ))
          ) : (
            <>
              <troop.Icon className="troop-display-icon" /> x {counts[index]}
            </>
          )}
        </>
      ))}
    </Box>
  );
};
export default TroopDisplay;
