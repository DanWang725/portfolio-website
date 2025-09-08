import NumberFlow, { NumberFlowGroup } from '@number-flow/react';
import { useEffect, useState } from 'react';
import '../RiskBattle.css';
import { IPlayerData } from '@features/Risk/types/players';

export interface TroopTrackerProps {
  id: string;
  label: string;
  player: IPlayerData;
  roundTroopLosses: number | null;
}

const TroopTracker: React.FC<TroopTrackerProps> = ({
  id,
  label,
  player,
  roundTroopLosses,
}) => {
  const [isDifferenceVisible, setIsDifferenceVisible] = useState(false);
  const [lastShownLosses, setLastShownLosses] = useState(0);

  useEffect(() => {
    if (roundTroopLosses && roundTroopLosses > 0) {
      // console.log(roundTroopLosses);
      setIsDifferenceVisible(true);
      setLastShownLosses(roundTroopLosses);

      const animation = document.getElementById(id)?.getAnimations()[0];
      animation?.cancel();
      animation?.play();
    }
  }, [roundTroopLosses, player]);

  return (
    <NumberFlowGroup>
      {label} <NumberFlow value={player?.troops ?? 0} />{' '}
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
