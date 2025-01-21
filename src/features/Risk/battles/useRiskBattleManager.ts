import { useState } from 'react';
import { DiceRoll, DiceRoller } from '../dice/DiceRoller';
import { BattleStatus } from './Battles';
import { Player } from './Player';
import { RoundResult, RoundSide } from './RoundResult';

type IDiceStats = DiceRoll[];

interface IPlayerData {
  diceStats: IDiceStats;
  initialTroops: number;
  troops: number;
}

interface IRoundResult {
  attackerRolls: DiceRoll[];
  defenderRolls: DiceRoll[];
  diceResults: RoundSide[];
  attackerLosses: number;
  defenderLosses: number;
}

const useRiskBattleManager = () => {
  const [battleStatus, setBattleStatus] = useState(BattleStatus.NotStarted);
  const [rounds, setRounds] = useState<IRoundResult[]>([]);
  const [attacker, setAttacker] = useState<IPlayerData>();
  const [defender, setDefender] = useState<IPlayerData>();
  const [roller, setRoller] = useState<DiceRoller>(new DiceRoller(1));

  //=============================================================================
  const getRollsFromPlayer = (player: IPlayerData): DiceRoll[] => {
    const maxRolls = Math.min(player.troops, 3);
    return Array(maxRolls)
      .map(() => roller.roll())
      .sort((a, b) => b - a);
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

  const playRound = () => {
    if (!attacker || !defender) return;
    if (battleStatus !== BattleStatus.Ongoing) return;

    const attackerRolls = getRollsFromPlayer(attacker);
    const defenderRolls = getRollsFromPlayer(defender);
    const roundResult = calculateRoundResult(attackerRolls, defenderRolls);
    setRounds([...rounds, roundResult]);
    setAttacker(
      getUpdatedPlayerData(attacker, attackerRolls, roundResult.attackerLosses),
    );
    setDefender(
      getUpdatedPlayerData(defender, defenderRolls, roundResult.defenderLosses),
    );
    if (attacker.troops == 0) {
      setBattleStatus(BattleStatus.DefenderWins);
    } else if (defender.troops == 0) {
      setBattleStatus(BattleStatus.AttackerWins);
    }
  };

  const init = (
    attackerTroops: number,
    defenderTroops: number,
    seed: number,
  ) => {
    if (seed === undefined) seed = Math.ceil(Math.random() * 10000);
    const roller = new DiceRoller(seed);
    setRoller(roller);
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

  return { playRound, init, rounds, attacker, defender, battleStatus };
};
