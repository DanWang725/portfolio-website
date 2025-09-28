import { RandomSoundsContext } from '@app/contexts/SoundsProvider';
import {
  Input,
  Select,
  MenuItem,
  Button,
  Typography,
  Box,
} from '@mui/material';
import { useContext, useState } from 'react';
import ActiveSounds from './ActiveSounds';

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

const SilenceInterruptedBy: React.FC = () => {
  const soundsProvider = useContext(RandomSoundsContext);
  // const [nextTrigger, setNextTrigger] = useState<Date | undefined>();
  const [playInterval, setPlayInterval] = useState<number>(10000);
  // const [timeoutId, setTimeoutId] = useState<number | undefined>();
  // const [time, setTime] = useState(new Date());
  const [selectedUrl, setSelectedUrl] = useState(audioOptions[1].value);
  // const timeoutManager = useContext(TimeoutContext);

  // useEffect(() => {
  //   return () => {
  //     //we need to clear the timeout id at cleanup
  //     timeoutManager.clearAllTimeouts();
  //   };
  // }, []);

  // const toggleSound = () => {
  //   if (timeoutId) {
  //     stop();
  //   } else {
  //     start();
  //   }
  // };

  const updateInterval = (value: number) => {
    if (value < 0) {
      return;
    }
    setPlayInterval(value * 1000);
  };

  const onAddSound = () => {
    soundsProvider.addSound(selectedUrl, playInterval);
  };

  const toggleSoundPlayback = (soundId: number, pause: boolean) => {
    pause
      ? soundsProvider.pauseSound(soundId)
      : soundsProvider.resumeSound(soundId);
  };

  const handleRemoveSound = (soundId: number) => {
    soundsProvider.removeSound(soundId);
  };
  return (
    <Box p="1rem">
      <Typography variant="h4">Play New Sound</Typography>
      <Input
        type="number"
        onChange={(e) => updateInterval(parseInt(e.target.value) ?? 0)}
        value={playInterval / 1000}
      ></Input>
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
      <Button onClick={() => onAddSound()}>Add</Button>
      {soundsProvider.loadedSounds.length}
      <Typography variant="h4">Currently Playing Sounds</Typography>
      <ActiveSounds
        sounds={soundsProvider.loadedSounds}
        handleRemoveSound={handleRemoveSound}
        handleToggleSoundPlayback={toggleSoundPlayback}
      ></ActiveSounds>
    </Box>
  );
};
export default SilenceInterruptedBy;
