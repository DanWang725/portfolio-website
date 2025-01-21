import ContentSection from '@components/Sections/ContentSection';
import { Button, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { Battle, BattleStatus } from '../battles/Battles';

const RiskBattle: React.FC = () => {
  const [battle, setBattle] = useState<Battle | null>(null);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    setIsFinished(battle?.status !== BattleStatus.Ongoing);
  }, [battle?.status]);

  const handleStart = () => {
    setBattle(Battle.init(10, 10, 1));
  };
  return (
    <ContentSection>
      <Typography variant="h4">Risk Battle</Typography>
      {!battle && (
        <Button variant="contained" onClick={handleStart}>
          Start
        </Button>
      )}
      {battle && (
        <Button variant="contained" onClick={() => battle.playRound()}>
          Play Round
        </Button>
      )}
      <Typography>{battle?.status}</Typography>
      <Typography>{battle?.getRoundsPlayed()}</Typography>
      {isFinished && (
        <Button variant="contained" onClick={() => setBattle(null)}>
          Reset
        </Button>
      )}
    </ContentSection>
  );
};
export default RiskBattle;
