import { RandomSoundsContext } from '@app/contexts/SoundsProvider';
import {
  Input,
  Select,
  MenuItem,
  Button,
  Typography,
  Box,
  Checkbox,
  FormGroup,
  FormControlLabel,
  InputLabel,
  TextField,
} from '@mui/material';
import { useContext, useState } from 'react';
import ActiveSounds from './ActiveSounds';
import toast from 'react-hot-toast';

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
  const [playInterval, setPlayInterval] = useState<number>(10000);
  const [selectedUrl, setSelectedUrl] = useState(audioOptions[1].value);
  const [urlLabel, setUrlLabel] = useState(audioOptions[1].label);
  const [isCustomSound, setCustomSound] = useState(false);

  const [error, setError] = useState('');

  const updateInterval = (value: number) => {
    if (value < 0) {
      return;
    }
    setPlayInterval(value * 1000);
  };

  const testAudio = () => {
    return new Promise<boolean>((resolve) => {
      const audio = new Audio(selectedUrl);
      audio.addEventListener('canplaythrough', () => resolve(true));
      audio.addEventListener('error', () => resolve(false));
      audio.load();
    });
  };

  const handleToggleCustomUrl = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    if (!event.target.checked) {
      setSelectedUrl(audioOptions[1].value);
      setUrlLabel(audioOptions[1].label);
    } else {
      setSelectedUrl('');
      setUrlLabel('');
    }
    setCustomSound(event.target.checked);
  };

  const selectOption = (selectedAudioUrl: string) => {
    setSelectedUrl(selectedAudioUrl);
    setUrlLabel(
      audioOptions.find((a) => a.value === selectedUrl)?.label ?? 'No Label',
    );
  };

  const onAddSound = () => {
    testAudio().then((verdict) => {
      if (verdict) {
        soundsProvider.addSound(selectedUrl, urlLabel, playInterval);
      } else {
        toast.error('Cannot load audio!');
      }
    });
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
      <Typography variant="h4" mb="1rem">
        Add New Sound
      </Typography>
      <Box display="flex" gap="1rem">
        {isCustomSound ? (
          <Box gap="1rem" display={'flex'}>
            <TextField
              value={urlLabel}
              onChange={(e) => setUrlLabel(e.target.value)}
              label="Name"
            ></TextField>
            <TextField
              label="Audio URL"
              value={selectedUrl}
              onChange={(e) => setSelectedUrl(e.target.value)}
            />
            <Button onClick={testAudio}> Test</Button>
          </Box>
        ) : (
          <Select
            value={selectedUrl}
            sx={{ width: '20rem' }}
            onChange={(e) => selectOption(e.target.value)}
          >
            {audioOptions.map(({ label, value }) => (
              <MenuItem value={value} key={value}>
                {label}
              </MenuItem>
            ))}
          </Select>
        )}
        <TextField
          type="number"
          label="Maximum Delay"
          onChange={(e) => updateInterval(parseInt(e.target.value) ?? 0)}
          value={playInterval / 1000}
        ></TextField>
      </Box>
      <FormGroup>
        <FormControlLabel
          label="Custom Sound"
          control={
            <Checkbox
              onChange={handleToggleCustomUrl}
              checked={isCustomSound}
            ></Checkbox>
          }
        />
      </FormGroup>

      <Button onClick={() => onAddSound()}>Add</Button>

      <Typography variant="h4" my="1rem">
        Currently Playing Sounds ({soundsProvider.loadedSounds.length})
      </Typography>
      <ActiveSounds
        sounds={soundsProvider.loadedSounds}
        handleRemoveSound={handleRemoveSound}
        handleToggleSoundPlayback={toggleSoundPlayback}
      ></ActiveSounds>
    </Box>
  );
};
export default SilenceInterruptedBy;
