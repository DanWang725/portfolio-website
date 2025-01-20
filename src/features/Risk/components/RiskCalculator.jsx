import { diceStats } from './utils';

const getDiceRoll = () => Math.floor(Math.random() * 6) + 1;
const getDiceRollSeeded = (m) => Math.floor(m.random() * 6) + 1;

const getPlayerRolls = (diceAmt, generator) =>
  [...Array(diceAmt).keys()]
    .map(() => (generator ? getDiceRollSeeded(generator) : getDiceRoll()))
    .sort((a, b) => b - a);

const calculateBattlePhase = (
  attackerTroopCount,
  defenderTroopCount,
  generator,
) => {
  console.log(attackerTroopCount, defenderTroopCount);
  const attackRolls = getPlayerRolls(
    Math.min(attackerTroopCount, 3),
    generator,
  );
  const defenceRolls = getPlayerRolls(
    Math.min(defenderTroopCount, 2),
    generator,
  );
  let lossesA = 0;
  let lossesD = 0;
  const diceResults = [
    ...Array(Math.min(attackRolls.length, defenceRolls.length)).keys(),
  ].map((val, i) => {
    if (attackRolls[i] > defenceRolls[i]) {
      lossesD = lossesD + 1;
      return 'A';
    } else {
      lossesA = lossesA + 1;
      return 'D';
    }
  });
  const results = {
    attackerTroopCount,
    defenderTroopCount,
    attkLosses: lossesA,
    defLosses: lossesD,
    attackerRolls: attackRolls,
    defenderRolls: defenceRolls,
    diceMatches: diceResults,
  };
  return results;
};

const getTroopCount = (battles) => {
  if (!battles || battles?.length === 0) return {};

  const recentBattle = battles[battles.length - 1];
  const curAttackerCount =
    recentBattle.attackerTroopCount - recentBattle.attkLosses;
  const curDefenderCount =
    recentBattle.defenderTroopCount - recentBattle.defLosses;

  return { attacker: curAttackerCount, defender: curDefenderCount };
};

const getStatisticsOfBattle = (battles) => {
  if (!battles || battles?.length === 0) return {};

  const initialStats = {
    attackerRollCount: structuredClone(diceStats),
    defenderRollCount: structuredClone(diceStats),
    attackerWins: 0,
    defenderWins: 0,
  };

  const battleStats = battles?.reduce((prevStats, curResult) => {
    const { attackerRollCount, defenderRollCount, attackerWins, defenderWins } =
      prevStats;
    const { attkLosses, defLosses, attackerRolls, defenderRolls, diceMatches } =
      curResult;

    for (let i = 0; i < diceMatches.length; i++) {
      const diceA = attackerRolls[i];
      attackerRollCount[diceA] = attackerRollCount[diceA] + 1;

      const diceD = defenderRolls[i];
      defenderRollCount[diceD] = defenderRollCount[diceD] + 1;
    }
    const newAttackerWins = attackerWins + defLosses;
    const newDefenderWins = defenderWins + attkLosses;
    return {
      attackerRollCount,
      defenderRollCount,
      attackerWins: newAttackerWins,
      defenderWins: newDefenderWins,
    };
  }, initialStats);

  const { attackerRollCount, defenderRollCount, attackerWins, defenderWins } =
    battleStats;

  const { attacker: curAttackerTroops, defender: curDefenderTroops } =
    getTroopCount(battles);
  var winner = 'NA';
  if (!curAttackerTroops) {
    winner = 'D';
  } else if (!curDefenderTroops) {
    winner = 'A';
  }
  const attacker = {
    rolls: attackerRollCount,
    battlesWon: attackerWins,
    originalTroopCount: battles[0].attackerTroopCount,
    currentTroopCount: curAttackerTroops,
  };
  const defender = {
    rolls: defenderRollCount,
    battlesWon: defenderWins,
    originalTroopCount: battles[0].defenderTroopCount,
    currentTroopCount: curDefenderTroops,
  };

  return { attacker, defender, winner, roundsPlayed: battles.length - 1 };
};

const calculateBattle = (attackerTroopCount, defenderTroopCount, seed) => {
  let rounds = [];
  let attkCount = attackerTroopCount;
  let defCount = defenderTroopCount;
  while (attkCount > 0 && defCount > 0) {
    console.log(attkCount, defCount);
    const roundResult = calculateBattlePhase(attkCount, defCount, seed);
    rounds.push(roundResult);
    attkCount = attkCount - roundResult.attkLosses;
    defCount = defCount - roundResult.defLosses;
  }
  return rounds;
};

export {
  calculateBattlePhase,
  calculateBattle,
  getTroopCount,
  getStatisticsOfBattle,
};
