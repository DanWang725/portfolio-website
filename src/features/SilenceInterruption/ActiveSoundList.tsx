import { TimeoutContext } from '@app/contexts/TimeoutProvider';
import TimerCountdown from '@features/Timers/TimerCountdown';
import { Clear, Pause, PlayArrow, PlaylistRemove } from '@mui/icons-material';
import { Box, IconButton, Typography } from '@mui/material';
import { RandomSound } from '@type/Contexts';
import { useContext, useEffect, useState } from 'react';
import ActiveSound from './components/ActiveSound';

export interface ActiveSoundListProps {
  sounds: RandomSound[];
  handleRemoveSound: (soundId: number) => void;
  handleToggleSoundPlayback: (soundId: number, pause: boolean) => void;
}

const ActiveSoundList: React.FC<ActiveSoundListProps> = ({
  sounds,
  handleRemoveSound,
  handleToggleSoundPlayback,
}) => {
  const [curTime, setTime] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 50);
    return () => clearInterval(interval);
  }, []);
  const timeoutProvider = useContext(TimeoutContext);
  //todo: creat component for each sound, useEffect on the timeoutId, trigger animation on change
  return (
    <>
      {sounds.map((sound, index) => (
        <ActiveSound
          key={`active-sound-${index}`}
          sound={sound}
          curTime={curTime}
          triggerTime={timeoutProvider.getTriggerTime(sound.timeoutId || null)}
          handleRemoveSound={() => handleRemoveSound(sound.id)}
          handleToggleSoundPlayback={(pause) =>
            handleToggleSoundPlayback(sound.id, pause)
          }
        />
      ))}
    </>
  );
};
export default ActiveSoundList;
