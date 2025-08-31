import { BattleOutcome, BattleResult } from '../types/battles';
import { IPlayerData, Player } from '../types/players';

export const initializePlayerData = (): IPlayerData => {
  return {
    diceStats: [],
    initialTroops: 0,
    troops: 0,
  };
};

const determineBattleOutcomeForBothTroopsLeft = (
  attacker: IPlayerData,
  defender: IPlayerData,
): BattleOutcome => {
  const attackerTroopRatio = attacker.troops / attacker.initialTroops;
  const defenderTroopRatio = defender.troops / defender.initialTroops;
  const winner =
    attackerTroopRatio > defenderTroopRatio ? Player.Attacker : Player.Defender;
  const x =
    winner == Player.Attacker
      ? attackerTroopRatio - defenderTroopRatio
      : defenderTroopRatio - attackerTroopRatio;

  let victoryResult: BattleResult;
  if (x > 0.5) {
    victoryResult = BattleResult.Overwhelming;
  } else if (x > 0.2) {
    victoryResult = BattleResult.Major;
  } else {
    victoryResult = BattleResult.Minor;
  }

  return {
    winner,
    result: victoryResult,
  };
};

const determineBattleOutcomeForOneSideTroopsLeft = (
  attacker: IPlayerData,
  defender: IPlayerData,
): BattleOutcome => {
  const winner = attacker.troops != 0 ? Player.Attacker : Player.Defender;
  const winnerRemainingTroopsRatio =
    winner == Player.Attacker
      ? attacker.troops / attacker.initialTroops
      : defender.troops / defender.initialTroops;

  let result: BattleResult;
  if (winnerRemainingTroopsRatio > 0.5) {
    result = BattleResult.Overwhelming;
  } else if (winnerRemainingTroopsRatio > 0.15) {
    result = BattleResult.Major;
  } else {
    result = BattleResult.Minor;
  }

  return {
    winner,
    result,
  };
};

export const calculateBattleOutcome = (
  attacker: IPlayerData,
  defender: IPlayerData,
): BattleOutcome => {
  if (attacker.troops != 0 && defender.troops != 0) {
    return determineBattleOutcomeForBothTroopsLeft(attacker, defender);
  } else {
    return determineBattleOutcomeForOneSideTroopsLeft(attacker, defender);
  }
};
