const getDiceRoll = () => Math.floor(Math.random() * 6) + 1;

const getPlayerRolls = (diceAmt) =>
  [...Array(diceAmt).keys()].map(() => getDiceRoll()).sort((a, b) => b - a);

const calculateBattlePhase = (attackerTroopCount, defenderTroopCount) => {
  const attackRolls = getPlayerRolls(Math.min(attackerTroopCount, 3));
  const defenceRolls = getPlayerRolls(Math.min(defenderTroopCount, 2));
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
    attkLosses: lossesA,
    defLosses: lossesD,
    attackerRolls: attackRolls,
    defenderRolls: defenceRolls,
    diceMatches: diceResults,
  };
  return results;
};

const calculateBattle = (attackerTroopCount, defenderTroopCount) => {
  let rounds = [];
  let attkCount = attackerTroopCount;
  let defCount = defenderTroopCount;
  while (attkCount > 0 && defCount > 0) {
    const { attkLosses, defLosses, ...results } = calculateBattlePhase(
      attkCount,
      defCount,
    );
    rounds.append(results);
    attkCount = attkCount - attkLosses;
    defCount = defCount - defLosses;
  }
  return rounds;
};
export default calculateBattle;
