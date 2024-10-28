import ResultDisplay from './ResultDisplay';

/**
 * Generates a list of battle results given an array
 * @param {Array} props.battles
 * @returns {import('react').FC<>}
 */
const BattleList = ({ battles }) => {
  return (
    <div className="battle-list-container">
      <h2 className="article-title">Battle History</h2>
      {battles.map((battle, index) => (
        <ResultDisplay results={battle} key={index} battleNumber={index} />
      ))}
    </div>
  );
};
export default BattleList;
