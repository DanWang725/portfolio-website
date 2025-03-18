import { Box, Button, Grid2, Typography } from '@mui/material';
import './RiskBattle.css';
import useAutoBattler from '../battles/useAutoBattler';
import BattleSetup from './BattleSetup/BattleSetup';
import RoundList from './RoundList';
import BattleTracker from './BattleTracker/BattleTracker';
import useRiskBattleManager from '../battles/useRiskBattleManager';
import { BattleStatus } from '../types/battles';
import { useEffect, useState } from 'react';
import useSaveableBattles from '../battles/useSaveableBattles';
import { useNavigate, useParams } from 'react-router-dom';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  CategoryScale,
} from 'chart.js';

ChartJS.register(LineElement, PointElement, LinearScale, Title, CategoryScale);

const RiskBattle: React.FC = () => {
  const { result } = useParams();
  const navigate = useNavigate();

  const [autoBattleSpeed, setAutoBattleSpeed] = useState(800);
  const battleManager = useRiskBattleManager();
  const {
    attacker,
    defender,
    battleStatus,
    init,
    playRound,
    reset,
    rounds,
    end,
  } = battleManager;

  const { toggle: toggleAutobattle, isAutoBattling } = useAutoBattler(
    playRound,
    battleStatus,
    autoBattleSpeed,
  );

  const { getEncodedString, loadBattle } = useSaveableBattles(battleManager);

  const copyGameToClipboard = () => {
    navigator.clipboard.writeText(
      `${window.location.href}/${getEncodedString()}`,
    );
  };

  const getChartData = () => {
    const data = {
      labels: ['0', ...rounds.map((_, i) => (i + 1).toString())],
      datasets: [
        {
          label: 'Attacker Troops',
          data: rounds.reduce<number[]>(
            (prev, cur) => {
              if (prev.length === 0) {
                return [attacker.initialTroops - cur.attackerLosses];
              }
              return [...prev, prev[prev.length - 1] - cur.attackerLosses];
            },
            [attacker.initialTroops],
          ),
          borderColor: 'rgba(255, 99, 132, 1)',
          cubicInterpolationMode: 'monotone',
        },
        {
          label: 'Defender Troops',
          data: rounds.reduce<number[]>(
            (prev, cur) => {
              if (prev.length === 0) {
                return [defender.initialTroops - cur.defenderLosses];
              }
              return [...prev, prev[prev.length - 1] - cur.defenderLosses];
            },
            [defender.initialTroops],
          ),
          borderColor: 'rgba(54, 162, 235, 1)',
          cubicInterpolationMode: 'monotone',
        },
      ],
    };
    console.log(data);
    return data;
  };

  useEffect(() => {
    if (result) {
      console.log('result', result);
      loadBattle(result);
    }
  }, [result]);

  const handleStart = (attackertroops: number, defenderTroops: number) => {
    init(attackertroops, defenderTroops);
  };

  const handleReset = () => {
    if (result) {
      navigate('/projects/risk-calculator');
    }
    reset();
  };
  return (
    <>
      {battleStatus == BattleStatus.NotStarted && (
        <BattleSetup handleStart={handleStart} />
      )}
      {battleStatus !== BattleStatus.Ongoing &&
        battleStatus !== BattleStatus.NotStarted && (
          <Box
            sx={{ textAlign: 'center' }}
            className="battle-results-container"
          >
            <Typography>
              {battleStatus === BattleStatus.AttackerWins
                ? 'Attacker Wins'
                : 'Defender Wins'}
            </Typography>
            <Box>
              <Button variant="contained" onClick={handleReset}>
                Reset
              </Button>
              <Button onClick={copyGameToClipboard}>Share</Button>
            </Box>
            <Typography>Stuff</Typography>
            {/* <Line data={getChartData()} className="troop-chart"></Line> */}
            {/* <Box
              display="flex"
              flexDirection="row"
              justifyContent={'space-around'}
            >
              <Box width={'100%'}>
                <DiceStatistics diceStats={attacker?.diceStats ?? []} />
              </Box>
              <Box width={'100%'}>
                <DiceStatistics diceStats={defender?.diceStats ?? []} />
              </Box>
            </Box> */}
          </Box>
        )}
      {battleStatus !== BattleStatus.NotStarted && (
        <Grid2 container mt="1rem" spacing={2}>
          <BattleTracker
            attacker={attacker}
            defender={defender}
            battleStatus={battleStatus}
            rounds={rounds}
            actions={{
              playRound: playRound,
              toggleAutoBattle: toggleAutobattle,
              setAutoBattleSpeed: setAutoBattleSpeed,
              endBattle: end,
            }}
            autoBattleSpeed={autoBattleSpeed}
            isAutoBattling={isAutoBattling}
          />
          <RoundList rounds={rounds} />
        </Grid2>
      )}
    </>
  );
};
export default RiskBattle;
