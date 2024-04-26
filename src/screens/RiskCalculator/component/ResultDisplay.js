const UnusedDieNumber = ({ diceValue, key }) => {
  return <span key={key}>{diceValue}</span>;
};
const LosingDiceNumber = ({ diceValue, key }) => {
  return (
    <b key={key}>
      <s>{diceValue}</s>
    </b>
  );
};
const WinningDiceNumber = ({ diceValue, key }) => {
  return <b key={key}>{diceValue}</b>;
};

/**
 * ResultDisplay
 * display the result of one fight and display it in a component
 */
const ResultDisplay = ({ results, battleNumber }) => {
  const {
    attackerTroopCount,
    defenderTroopCount,
    attkLosses,
    defLosses,
    attackerRolls,
    defenderRolls,
    diceMatches,
  } = results;
  return (
    <div className="battle-result-container">
      <h3>{`Round ${battleNumber + 1}`}</h3>
      <div className="battle-result-header">
        <div className="battle-result-player">
          <h2>Attacker</h2>
          <span>{attackerTroopCount} Troops</span>
          <div className="battle-result-dice-display">
            {attackerRolls.map((diceValue, index) => {
              const dieKey = `attacker-${index}`;
              if (index >= diceMatches.length)
                return <UnusedDieNumber diceValue={diceValue} key={dieKey} />;

              return diceMatches[index] === 'A' ? (
                <WinningDiceNumber diceValue={diceValue} key={dieKey} />
              ) : (
                <LosingDiceNumber diceValue={diceValue} key={dieKey} />
              );
            })}
          </div>
        </div>
        <div className="battle-result-player">
          <h2>Defender</h2>
          <span>{defenderTroopCount} Troops</span>
          <div className="battle-result-dice-display">
            {defenderRolls.map((diceValue, index) => {
              const dieKey = `defender-${index}`;
              if (index >= diceMatches.length)
                return <UnusedDieNumber diceValue={diceValue} key={dieKey} />;

              return diceMatches[index] === 'D' ? (
                <WinningDiceNumber diceValue={diceValue} key={dieKey} />
              ) : (
                <LosingDiceNumber diceValue={diceValue} key={dieKey} />
              );
            })}
          </div>
        </div>
      </div>
      <div className="battle-result-outcome">
        Outcome:
        <div>
          <span>Attacker looses {attkLosses} troops</span>
          <span>Defender looses {defLosses} troops</span>
        </div>
      </div>
    </div>
  );
};
export default ResultDisplay;
