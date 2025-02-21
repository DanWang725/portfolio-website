import ContentSection from '@components/Sections/ContentSection';
import { Button, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { Battle, BattleStatus } from '../battles/Battles';
import useRiskBattleManager from '../battles/useRiskBattleManager';

const RiskBattle: React.FC = () => {
  const { attacker, defender, battleStatus, init, playRound, rounds } =
    useRiskBattleManager();

  const handleStart = () => {
    init(10, 10, 1);
  };
  return (
    <ContentSection>
      <Typography variant="h4">Risk Battle</Typography>
      {battleStatus == BattleStatus.NotStarted && (
        <Button variant="contained" onClick={handleStart}>
          Start
        </Button>
      )}
      {battleStatus === BattleStatus.Ongoing && (
        <>
          <p>Attacker Troops: {attacker?.troops}</p>
          <p>Defender Troops: {defender?.troops}</p>
          <Button variant="contained" onClick={() => playRound()}>
            Play Round
          </Button>
          {rounds.map((round, index) => {
            return (
              <div key={`round-${index}`}>
                <Typography>Round {index + 1}</Typography>
                <Typography>
                  Attacker: {round.attackerRolls.join(', ')}
                </Typography>
                <Typography>
                  Defender: {round.defenderRolls.join(', ')}
                </Typography>
                <Typography>Attacker Losses: {round.attackerLosses}</Typography>
                <Typography>Defender Losses: {round.defenderLosses}</Typography>
              </div>
            );
          })}
        </>
      )}
      <Typography>{battleStatus}</Typography>
      <Typography>{rounds.length}</Typography>
      {battleStatus !== BattleStatus.Ongoing &&
        battleStatus !== BattleStatus.NotStarted && (
          <>
            <Typography>
              {battleStatus === BattleStatus.AttackerWins
                ? 'Attacker Wins'
                : 'Defender Wins'}
            </Typography>
            <Button variant="contained" onClick={() => handleStart()}>
              Reset
            </Button>
          </>
        )}
    </ContentSection>
  );
};
export default RiskBattle;
