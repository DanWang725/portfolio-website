import { useEffect, useState } from 'react';
import { BattleStatus } from '../types/battles';
import { IPlayerData } from '../types/players';
import { InitBattleFunction, IRiskBattleManager } from './useRiskBattleManager';
import { IRoundResult } from '../types/dice';
import { Battle } from './Battles';

const useSaveableBattles = (battleManager: IRiskBattleManager) => {
  const [roundsToPlay, setRoundsToPlay] = useState(0);
  const [loadingBattle, setLoadingBattle] = useState(0);
  const loadBattle = (encodedString: string) => {
    const results = encodedString?.split(':');
    if (!results || results?.length != 4) return;
    const parsedResults = results.map((val) => parseInt(val, 16));
    init(parsedResults[1], parsedResults[2], parsedResults[0]);
    setRoundsToPlay(parsedResults[3]);
    setLoadingBattle(1);
  };

  const {
    init,
    playRound,
    end,
    attacker,
    defender,
    rounds,
    seed,
    battleStatus,
  } = battleManager;

  useEffect(() => {
    if (battleStatus !== BattleStatus.Ongoing || !loadingBattle) return;
    if (loadingBattle === 1) {
      playRound(roundsToPlay);
      setLoadingBattle(2);
    }
    if (loadingBattle === 2) {
      if (battleStatus === BattleStatus.Ongoing) {
        end();
      }
      setLoadingBattle(0);
    }
  }, [battleManager]);

  const getEncodedString = () => {
    if (!attacker || !defender) return '';
    const encodedString = `${seed.toString(16)}:${attacker.initialTroops.toString(16)}:${defender.initialTroops.toString(16)}:${rounds.length.toString(16)}`;
    return encodedString;
  };

  return { loadBattle, getEncodedString };
};
export default useSaveableBattles;
