import { TimeoutContext } from '@app/contexts/TimeoutProvider';
import TimerCountdown from '@features/Timers/TimerCountdown';
import { Pause, PlayArrow, PlaylistRemove } from '@mui/icons-material';
import { Box, IconButton } from '@mui/material';
import { RandomSound } from '@type/Contexts';
import { useContext, useEffect, useState } from 'react';

export interface ActiveSoundsProps {
  sounds: RandomSound[];
  handleRemoveSound: (soundId: number) => void;
  handleToggleSoundPlayback: (soundId: number, pause: boolean) => void;
}

const ActiveSounds: React.FC<ActiveSoundsProps> = ({
  sounds,
  handleRemoveSound,
  handleToggleSoundPlayback,
}) => {
  const [curTime, setTime] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 100);
    return () => clearInterval(interval);
  }, []);
  const timeoutProvider = useContext(TimeoutContext);
  return (
    <>
      {sounds.map((sound) => (
        <Box
          key={`sound-${sound.id}`}
          display="flex"
          flexDirection="row"
          justifyContent={'space-between'}
          sx={{ border: '1px solid' }}
        >
          <Box display="flex" flexDirection={'row'}>
            ID: {sound.id}
            TimeoutID {sound.timeoutId}
            TriggerTime: {sound.initialTimeout}
            URL: {sound.url}
          </Box>
          {sound.timeoutId && (
            <TimerCountdown
              curTime={curTime}
              target={
                timeoutProvider.getTriggerTime(sound.timeoutId) ??
                new Date(Date.now() + sound.pauseInformation.remainingTime)
              }
            ></TimerCountdown>
          )}
          <Box
            alignContent="center"
            display="flex"
            alignItems="center"
            sx={{ boxSizing: 'inherit' }}
          >
            <IconButton
              onClick={() =>
                handleToggleSoundPlayback(
                  sound.id,
                  !sound.pauseInformation.isPaused,
                )
              }
            >
              {sound.pauseInformation.isPaused ? <PlayArrow /> : <Pause />}
            </IconButton>
            <IconButton onClick={() => handleRemoveSound(sound.id)}>
              <PlaylistRemove />
            </IconButton>
          </Box>
        </Box>
      ))}
    </>
  );
};
export default ActiveSounds;
