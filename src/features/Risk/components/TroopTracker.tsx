import NumberFlow, { NumberFlowGroup } from '@number-flow/react';
import { IPlayerData, IRoundResult } from '../battles/useRiskBattleManager';
import { useEffect, useState } from 'react';
import './RiskBattle.css';

export interface TroopTrackerProps {
  id: string;
  player: IPlayerData;
  roundTroopLosses: number | null;
}

const TroopTracker: React.FC<TroopTrackerProps> = ({
  id,
  player,
  roundTroopLosses,
}) => {
  const [isDifferenceVisible, setIsDifferenceVisible] = useState(false);
  const [lastShownLosses, setLastShownLosses] = useState(0);

  useEffect(() => {
    if (roundTroopLosses && roundTroopLosses > 0) {
      console.log(roundTroopLosses);
      setIsDifferenceVisible(true);
      setLastShownLosses(roundTroopLosses);

      const animation = document.getElementById(id)?.getAnimations()[0];
      animation?.cancel();
      animation?.play();
    }
  }, [roundTroopLosses, player]);

  return (
    <NumberFlowGroup>
      Attacker Troops: <NumberFlow value={player?.troops ?? 0} />{' '}
      {!!lastShownLosses && isDifferenceVisible && (
        <span
          id={id}
          className="loss-count-hidden"
          onAnimationEnd={() => setIsDifferenceVisible(false)}
        >
          -{lastShownLosses}
        </span>
      )}
    </NumberFlowGroup>
  );
};
export default TroopTracker;
