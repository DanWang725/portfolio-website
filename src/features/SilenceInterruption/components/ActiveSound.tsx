import TimerCountdown from '@features/Timers/TimerCountdown';
import { Clear, Pause, PlayArrow } from '@mui/icons-material';
import { Box, IconButton, Tooltip, Typography } from '@mui/material';
import { RandomSound } from '@type/Contexts';
import { lazy } from 'react';

export interface ActiveSoundProps {
  sound: RandomSound;
  curTime: Date;
  triggerTime: Date | null;
  handleRemoveSound: () => void;
  handleToggleSoundPlayback: (pause: boolean) => void;
  minimal?: boolean;
}

const ActiveSound: React.FC<ActiveSoundProps> = ({
  sound,
  curTime,
  triggerTime,
  handleRemoveSound,
  handleToggleSoundPlayback,
  minimal = false,
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
        <Box>
          <Typography variant={'h5'} mx="1rem" mt="1rem">
            {sound.label}
          </Typography>
          <Typography variant="subtitle2" mx="1rem" mb="1rem">
            Max {sound.upperBound / 1000} second delay
          </Typography>
        </Box>
        {/* <Typography>
              ID: {sound.id}
              TimeoutID {sound.timeoutId}
              TriggerTime: {sound.initialTimeout}
            </Typography> */}
      </Box>
      {!minimal && sound.timeoutId && (
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
