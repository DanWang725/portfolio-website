import { useEffect, useState } from 'react';
import { BattleStatus } from './Battles';

const useAutoBattler = (
  playRound: () => void,
  battleStatus: BattleStatus,
  delay: number = 2000,
) => {
  const [isAutoBattling, setIsAutoBattling] = useState(false);

  useEffect(() => {
    if (isAutoBattling) {
      if (battleStatus !== BattleStatus.Ongoing) {
        setIsAutoBattling(false);
      } else {
        setTimeout(() => playRound(), delay);
      }
    }
  }, [battleStatus, playRound]);

  const start = () => {
    setIsAutoBattling(true);
    playRound();
  };

  return { start, isAutoBattling };
};
export default useAutoBattler;
