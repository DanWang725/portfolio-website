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

const calculateBattlePhaseSeeded = (
  attackerTroopCount,
  defenderTroopCount,
  generator,
) => {
  let rounds = [];
  let attkCount = attackerTroopCount;
  let defCount = defenderTroopCount;
  while (attkCount > 0 && defCount > 0) {
    console.log(attkCount, defCount);
    const roundResult = calculateBattlePhase(attkCount, defCount, generator);
    rounds.push(roundResult);
    attkCount = attkCount - roundResult.attkLosses;
    defCount = defCount - roundResult.defLosses;
  }
  return rounds;
};
export default calculateBattle;
