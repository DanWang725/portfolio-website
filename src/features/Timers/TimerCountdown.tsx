import { Box, Grid2, Typography } from '@mui/material';
import React from 'react';
interface TimerCountdownProps {
  target: Date;
  curTime: Date;
  showMilliseconds?: boolean;
}

/**
 * A container which displays the countdown. Does not perform any countdown logic.
 */
const TimerCountdown: React.FC<TimerCountdownProps> = ({
  target,
  curTime,
  showMilliseconds = false,
}) => {
  const dif = target.getTime() - curTime.getTime();
  const seconds = Math.floor(dif / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
      {[
        [days, 'Days'],
        [hours % 24, 'Hours'],
        [minutes % 60, 'Minutes'],
        [seconds % 60, 'Seconds'],
        ...[showMilliseconds ? [dif % 1000, 'Milliseconds'] : []],
      ].map(([value, label]) => (
        <Box textAlign={'center'}>
          <Typography variant="h4">{value}</Typography>
          <Typography>{label}</Typography>
        </Box>
      ))}
    </Box>
  );
};
export default TimerCountdown;
