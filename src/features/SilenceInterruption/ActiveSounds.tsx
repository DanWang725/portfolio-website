import { TimeoutContext } from '@app/contexts/TimeoutProvider';
import TimerCountdown from '@features/Timers/TimerCountdown';
import { Clear, Pause, PlayArrow, PlaylistRemove } from '@mui/icons-material';
import { Box, IconButton, Typography } from '@mui/material';
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
    const interval = setInterval(() => setTime(new Date()), 10);
    return () => clearInterval(interval);
  }, []);
  const timeoutProvider = useContext(TimeoutContext);
  //todo: creat component for each sound, useEffect on the timeoutId, trigger animation on change
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
            <Typography variant={'h5'} m="1rem">
              {sound.label}
            </Typography>
            {/* <Typography>
              ID: {sound.id}
              TimeoutID {sound.timeoutId}
              TriggerTime: {sound.initialTimeout}
            </Typography> */}
          </Box>
          {sound.timeoutId && (
            <TimerCountdown
              curTime={curTime}
              target={
                timeoutProvider.getTriggerTime(sound.timeoutId) ??
                new Date(Date.now() + sound.pauseInformation.remainingTime)
              }
              showLabels={false}
              styleOverrides={{ alignContent: 'center', alignItems: 'center' }}
            ></TimerCountdown>
          )}
          <Box
            alignContent="center"
            display="flex"
            alignItems="center"
            sx={{ boxSizing: 'inherit' }}
            mr="1rem"
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
              <Clear />
            </IconButton>
          </Box>
        </Box>
      ))}
    </>
  );
};
export default ActiveSounds;
