import { TimeoutContext } from '@app/contexts/TimeoutProvider';
import ContentSection from '@components/Sections/ContentSection';
import TimerCountdown from '@features/Timers/TimerCountdown';
import { Input, MenuItem, Select } from '@mui/material';
import { useContext, useEffect, useState } from 'react';

const audioOptions = [
  {
    label: 'Vine Boom',
    value: 'https://www.myinstants.com/media/sounds/vine-boom.mp3',
  },
  {
    label: 'Hoi 4 Naval Invasion',
    value:
      'https://us-tuna-sounds-files.voicemod.net/acd31372-f353-46a0-9b39-4c0f1407e7b4-1690230666083.mp3',
  },
  {
    label: 'Discord Notifications',
    value:
      'https://us-tuna-sounds-files.voicemod.net/19df8e9b-140c-4f43-8c0e-09c162821765-1658350707858.mp3',
  },
  {
    label: 'Metal Pipe',
    value:
      'https://us-tuna-sounds-files.voicemod.net/b1314a78-a2a4-4fb3-823c-d8be5f8bedf0-1712575538117.mp3',
  },
];

const RandomSounds: React.FC = () => {
  const [nextTrigger, setNextTrigger] = useState<Date | undefined>();
  const [playInterval, setPlayInterval] = useState<number>(10000);
  const [timeoutId, setTimeoutId] = useState<number | undefined>();
  const [time, setTime] = useState(new Date());
  const [selectedUrl, setSelectedUrl] = useState(audioOptions[1].value);
  const timeoutManager = useContext(TimeoutContext);

  useEffect(() => {
    return () => {
      //we need to clear the timeout id at cleanup
      timeoutManager.clearAllTimeouts();
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

    setTimeoutId(timeoutManager.setTimeout(playSound, randomInterval));
    setNextTrigger(new Date(Date.now() + randomInterval));
  };

  const stop = () => {
    timeoutManager.clearTimeout(timeoutId ?? 0);
    setTimeoutId(undefined);
    setNextTrigger(undefined);
  };

  useEffect(() => {
    const inte = setInterval(() => setTime(new Date()), 1);
    return () => clearInterval(inte);
  }, []);

  const playSound = () => {
    const audio = new Audio(selectedUrl);
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
      <Select
        value={selectedUrl}
        onChange={(e) => setSelectedUrl(e.target.value)}
      >
        {audioOptions.map(({ label, value }) => (
          <MenuItem value={value} key={value}>
            {label}
          </MenuItem>
        ))}
      </Select>
    </ContentSection>
  );
};

export default RandomSounds;
