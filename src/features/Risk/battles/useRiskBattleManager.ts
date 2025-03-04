import { useState } from 'react';
import useDiceRoller from '../dice/useDiceRoller';
import { BattleStatus } from '../types/battles';
import { DiceRoll, IDiceStats, IRoundResult, RoundSide } from '../types/dice';
import { IPlayerData } from '../types/players';
import { initializePlayerData } from '../utils/playerUtils';

export type InitBattleFunction = (
  attackerTroops: number,
  defenderTroops: number,
  seed?: number,
) => void;

const useRiskBattleManager = () => {
  const [battleStatus, setBattleStatus] = useState(BattleStatus.NotStarted);
  const [rounds, setRounds] = useState<IRoundResult[]>([]);
  const [attacker, setAttacker] = useState<IPlayerData>(initializePlayerData());
  const [defender, setDefender] = useState<IPlayerData>(initializePlayerData());
  const roller = useDiceRoller();

  //=============================================================================
  const getRollsFromPlayer = (
    player: IPlayerData,
    maxDice: number,
  ): DiceRoll[] => {
    const maxRolls = Math.min(player.troops, maxDice);
    const rolls = Array.from(Array(maxRolls), () => roller.roll());
    return rolls.sort((a, b) => b - a);
  };
  const getNewDiceStats = (
    diceStats: IDiceStats,
    rolls: DiceRoll[],
  ): IDiceStats =>
    diceStats.map(
      (rollCount, index) =>
        rollCount + rolls.filter((r) => r === index + 1).length,
    );

  const getUpdatedPlayerData = (
    curData: IPlayerData,
    rolls: DiceRoll[],
    losses: number,
  ): IPlayerData => {
    const newDiceStats = getNewDiceStats(curData.diceStats, rolls);
    return {
      initialTroops: curData.initialTroops,
      diceStats: newDiceStats,
      troops: curData.troops - losses,
    };
  };

  //=============================================================================

  const calculateDiceResults = (
    attackerRolls: DiceRoll[],
    defenderRolls: DiceRoll[],
  ): RoundSide[] => {
    const diceResults: RoundSide[] = [];
    const min = Math.min(attackerRolls.length, defenderRolls.length);
    for (let i = 0; i < min; i++) {
      if (attackerRolls[i] > defenderRolls[i]) {
        diceResults.push(RoundSide.Attacker);
      } else {
        diceResults.push(RoundSide.Defender);
      }
    }
    return diceResults;
  };

  const calculateLosses = (
    diceResults: RoundSide[],
  ): [attacker: number, defender: number] => {
    const attackerLosses = diceResults.filter(
      (r) => r === RoundSide.Defender,
    ).length;
    const defenderLosses = diceResults.filter(
      (r) => r === RoundSide.Attacker,
    ).length;
    return [attackerLosses, defenderLosses];
  };

  const calculateRoundResult = (
    attackerRolls: DiceRoll[],
    defenderRolls: DiceRoll[],
  ): IRoundResult => {
    const diceResults = calculateDiceResults(attackerRolls, defenderRolls);
    const [attackerLosses, defenderLosses] = calculateLosses(diceResults);
    return {
      attackerRolls,
      defenderRolls,
      diceResults,
      attackerLosses,
      defenderLosses,
    };
  };

  //=============================================================================

  const playSingleRound = (
    attackerData: IPlayerData,
    defenderData: IPlayerData,
  ) => {
    const attackerRolls = getRollsFromPlayer(attackerData, 3);
    const defenderRolls = getRollsFromPlayer(defenderData, 2);
    const roundResult = calculateRoundResult(attackerRolls, defenderRolls);
    const newAttackerData = getUpdatedPlayerData(
      attackerData,
      attackerRolls,
      roundResult.attackerLosses,
    );
    const newDefenderData = getUpdatedPlayerData(
      defenderData,
      defenderRolls,
      roundResult.defenderLosses,
    );
    return { newAttackerData, newDefenderData, roundResult };
  };

  const playRound = (numRounds: number = 1) => {
    let attackerData = attacker;
    let defenderData = defender;
    let curBattleStatus = battleStatus;
    let curRounds = [];
    for (let i = 0; i < numRounds; i++) {
      if (curBattleStatus !== BattleStatus.Ongoing) return;
      const { newAttackerData, newDefenderData, roundResult } = playSingleRound(
        attackerData,
        defenderData,
      );

      if (newAttackerData.troops === 0) {
        curBattleStatus = BattleStatus.DefenderWins;
      } else if (newDefenderData.troops === 0) {
        curBattleStatus = BattleStatus.AttackerWins;
      }
      curRounds.push(roundResult);
      attackerData = newAttackerData;
      defenderData = newDefenderData;
    }
    setBattleStatus(curBattleStatus);
    setRounds([...rounds, ...curRounds]);
    setAttacker(attackerData);
    setDefender(defenderData);
  };

  const init: InitBattleFunction = (
    attackerTroops: number,
    defenderTroops: number,
    seed?: number,
  ) => {
    roller.init(seed);
    setRounds([]);
    setAttacker({
      initialTroops: attackerTroops,
      diceStats: [0, 0, 0, 0, 0, 0],
      troops: attackerTroops,
    });
    setDefender({
      initialTroops: defenderTroops,
      diceStats: [0, 0, 0, 0, 0, 0],
      troops: defenderTroops,
    });
    setBattleStatus(BattleStatus.Ongoing);
  };

  const end = () => {
    if (battleStatus !== BattleStatus.Ongoing) return;
    const attackerLosses = attacker.initialTroops - attacker.troops;
    const defenderLosses = defender.initialTroops - defender.troops;
    const result =
      attackerLosses > defenderLosses
        ? BattleStatus.AttackerWins
        : BattleStatus.DefenderWins;
    setBattleStatus(result);
  };

  const reset = () => {
    setBattleStatus(BattleStatus.NotStarted);
    setRounds([]);
    setAttacker(initializePlayerData());
    setDefender(initializePlayerData());
  };

  return {
    playRound,
    init,
    end,
    reset,
    rounds,
    attacker,
    defender,
    battleStatus,
    seed: roller.seed,
  };
};

export default useRiskBattleManager;
