import { useEffect, useState } from 'react';
import { BattleStatus } from '../types/battles';

const useAutoBattler = (
  playRound: () => void,
  battleStatus: BattleStatus,
  delay: number = 2000,
) => {
  const [isAutoBattling, setIsAutoBattling] = useState(false);
  const [isTimeoutSet, setIsTimeoutSet] = useState(false);

  useEffect(() => {
    if (isAutoBattling && !isTimeoutSet) {
      if (battleStatus !== BattleStatus.Ongoing) {
        setIsAutoBattling(false);
      } else {
        setIsTimeoutSet(true);
        setTimeout(() => {
          setIsTimeoutSet(false);
          playRound();
        }, delay);
      }
    }
  }, [playRound]);

  const start = () => {
    setIsAutoBattling(true);
    playRound();
  };

  return { start, isAutoBattling };
};
export default useAutoBattler;
