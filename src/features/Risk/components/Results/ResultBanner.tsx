import { BattleResult, BattleStatus } from '@features/Risk/types/battles';
import { IRoundResult } from '@features/Risk/types/dice';
import { IPlayerData, Player } from '@features/Risk/types/players';
import { calculateBattleOutcome } from '@features/Risk/utils/playerUtils';
import { Box, Button, Grid2, Typography } from '@mui/material';
import { Link } from '@mui/icons-material';
import { VictoryAxis, VictoryChart, VictoryLine, VictoryTheme } from 'victory';
import { getSeriesData } from '@features/Risk/utils/statsUtils';
import { useState } from 'react';

interface ResultBannerProps {
  battleStatus: BattleStatus;
  actions: {
    handleReset: () => void;
    copyGameToClipboard: () => void;
  };
  rounds: IRoundResult[];
  attacker: IPlayerData;
  defender: IPlayerData;
}

const PlayerLabelMap = {
  [Player.Attacker]: 'Attacker',
  [Player.Defender]: 'Defender',
};

const BattleResultMap = {
  [BattleResult.Minor]: 'Minor',
  [BattleResult.Major]: 'Major',
  [BattleResult.Overwhelming]: 'Overwhelming',
};

const ResultBanner: React.FC<ResultBannerProps> = ({
  actions,
  rounds,
  attacker,
  defender,
}) => {
  const { handleReset, copyGameToClipboard } = actions;
  const [showDetails, setShowDetails] = useState(false);
  const battleOutcome = calculateBattleOutcome(attacker, defender);
  return (
    <Box
      className="battle-results-container"
      padding={2}
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
    >
      <Box>
        <Typography variant="h4">
          {`${PlayerLabelMap[battleOutcome.winner]} ${BattleResultMap[battleOutcome.result]} Victory`}
        </Typography>
      </Box>
      <Box display="flex" flexDirection="column" gap={2} alignItems="flex-end">
        <Button onClick={copyGameToClipboard} sx={{ width: '6rem' }}>
          <Link /> Share
        </Button>
        <Button
          variant="contained"
          onClick={handleReset}
          sx={{ width: '10rem' }}
        >
          New Battle
        </Button>
      </Box>
      <Box sx={{ justifyContent: 'center' }}>
        <Button onClick={() => setShowDetails(!showDetails)}>
          {showDetails ? 'Hide Graph' : 'Show Graph'}
        </Button>

        <Grid2
          container
          sx={{
            maxHeight: {
              xs: showDetails ? '20rem' : '0px',
              sm: showDetails ? '40rem' : '0px',
            },
            overflow: 'hidden',
            transition: 'max-height 0.5s ease-in-out',
          }}
        >
          <Grid2 size={{ xs: 12, md: 8 }}>
            <VictoryChart
              theme={VictoryTheme.clean}
              style={{ parent: { maxWidth: '40rem' } }}
            >
              <VictoryAxis
                label="Rounds"
                style={{
                  tickLabels: {
                    fill: '#FFF',
                    fontSize: 10,
                  },
                  axis: { stroke: '#FFF' },
                  grid: { stroke: '#555' },
                  ticks: {
                    fill: 'white',
                    fontSize: 10,
                  },
                  axisLabel: {
                    fill: 'white',
                    fontSize: 10,
                  },
                }}
              />
              <VictoryAxis
                dependentAxis
                label="Troops"
                style={{
                  tickLabels: {
                    fill: 'white',
                    fontSize: 10,
                    // fontFamily: 'monospace',
                  },
                  axis: { stroke: 'white' },
                  grid: { stroke: '#555' },
                  axisLabel: {
                    fill: 'white',
                    fontSize: 10,
                  },
                  ticks: {
                    fill: 'white',
                    fontSize: 10,
                    // fontFamily: 'monospace',
                  },
                }}
              />
              <VictoryLine
                style={{
                  data: {
                    stroke: '#c43a31',
                    strokeWidth: 3.1,
                  },
                }}
                data={getSeriesData(rounds, attacker, Player.Attacker)}
              />
              <VictoryLine
                style={{
                  data: {
                    stroke: '#3153c4ff',
                    strokeWidth: 3.1,
                  },
                }}
                data={getSeriesData(rounds, defender, Player.Defender)}
              />
            </VictoryChart>
          </Grid2>
          <Grid2 size={{ xs: 12, md: 2 }} paddingY="4rem">
            <Box display="flex" margin="10px">
              <Box
                sx={{
                  width: '20px',
                  height: '20px',
                  border: '1px solid white',
                  backgroundColor: '#c43a31',
                }}
              ></Box>
              <Typography variant="body2" color="white" sx={{ ml: 1 }}>
                Attacker
              </Typography>
            </Box>
            <Box display="flex" margin="10px">
              <Box
                sx={{
                  width: '20px',
                  height: '20px',
                  border: '1px solid white',
                  backgroundColor: '#3153c4ff',
                }}
              ></Box>
              <Typography variant="body2" color="white" sx={{ ml: 1 }}>
                Defender
              </Typography>
            </Box>
          </Grid2>
        </Grid2>
      </Box>
    </Box>
  );
};
export default ResultBanner;
