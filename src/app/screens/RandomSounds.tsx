import ContentSection from '@components/Sections/ContentSection';
import TimerCountdown from '@features/Timers/TimerCountdown';
import { Input } from '@mui/material';
import { useEffect, useState } from 'react';

const RandomSounds: React.FC = () => {
  const [nextTrigger, setNextTrigger] = useState<Date | undefined>();
  const [playInterval, setPlayInterval] = useState<number>(10000);
  const [timeoutId, setTimeoutId] = useState<number | undefined>();
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    return () => {
      //we need to clear the timeout id at cleanup
      setTimeoutId((value) => {
        if (value) {
          clearTimeout(value);
        }
        return undefined;
      });
    };
  }, []);

  const toggleSound = () => {
    if (timeoutId) {
      stop();
    } else {
      start();
    }
  };

  const updateInterval = (value: number) => {
    if (value < 0) {
      return;
    }
    setPlayInterval(value * 1000);
  };

  const start = () => {
    const randomInterval = Math.floor(Math.random() * playInterval);

    setTimeoutId(setTimeout(playSound, randomInterval));
    setNextTrigger(new Date(Date.now() + randomInterval));
  };

  const stop = () => {
    clearTimeout(timeoutId);
    setTimeoutId(undefined);
    setNextTrigger(undefined);
  };

  useEffect(() => {
    const inte = setInterval(() => setTime(new Date()), 1);
    return () => clearInterval(inte);
  }, []);

  const playSound = () => {
    const audio = new Audio(
      'https://www.myinstants.com/media/sounds/vine-boom.mp3',
    );
    audio.play();
    start();
  };
  return (
    <ContentSection>
      <Input
        type="number"
        onChange={(e) => updateInterval(parseInt(e.target.value) ?? 0)}
        value={playInterval / 1000}
      ></Input>
      {<button onClick={toggleSound}>{timeoutId ? 'stop' : 'start'}</button>}
      {nextTrigger && (
        <TimerCountdown target={nextTrigger} curTime={time} showMilliseconds />
      )}
    </ContentSection>
  );
};

export default RandomSounds;
