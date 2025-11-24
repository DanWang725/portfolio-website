import TimerCountdown from '@features/Timers/TimerCountdown';
import { Clear, Pause, PlayArrow } from '@mui/icons-material';
import { Box, IconButton, Tooltip, Typography } from '@mui/material';
import { RandomSound } from '@type/Contexts';
import { useEffect } from 'react';

export interface ActiveSoundProps {
  sound: RandomSound;
  curTime: Date;
  triggerTime: Date | null;
  handleRemoveSound: () => void;
  handleToggleSoundPlayback: (pause: boolean) => void;
}

const ActiveSound: React.FC<ActiveSoundProps> = ({
  sound,
  curTime,
  triggerTime,
  handleRemoveSound,
  handleToggleSoundPlayback,
}) => {
  // useEffect(() => console.log(`Trigger time: ${triggerTime}`));
  return (
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
            triggerTime ??
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
        <Tooltip title="Toggle Playback">
          <IconButton
            onClick={() =>
              handleToggleSoundPlayback(!sound.pauseInformation.isPaused)
            }
          >
            {sound.pauseInformation.isPaused ? <PlayArrow /> : <Pause />}
          </IconButton>
        </Tooltip>
        <Tooltip title="Stop Playing Sound">
          <IconButton onClick={handleRemoveSound}>
            <Clear />
          </IconButton>
        </Tooltip>
      </Box>
    </Box>
  );
};
export default ActiveSound;
