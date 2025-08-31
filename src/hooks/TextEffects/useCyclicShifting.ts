import { useEffect, useState } from 'react';

const useCyclicShifting = (initialString: string, interval: number = 500) => {
  const [text, setText] = useState(initialString);
  const [isActive, setIsActive] = useState(false);

  const cycleText = (active: boolean) => {
    if (active) setText((state) => `${state.substring(1)}${state[0]}`);
  };
  useEffect(() => {
    if (!isActive) {
      return;
    }
    cycleText(isActive);
    const intId = setInterval(cycleText, interval, isActive);
    return () => {
      clearInterval(intId);
    };
  }, [isActive]);

  return { text, setIsActive };
};

export default useCyclicShifting;
