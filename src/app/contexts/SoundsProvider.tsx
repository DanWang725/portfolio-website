import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import { TimeoutContext, TimeoutManager } from './TimeoutProvider';
import { useImmer } from 'use-immer';
import { RandomSound, SoundsProviderValues } from '../../types/Contexts';

const UseRandomSounds = (timeoutManager: TimeoutManager) => {
  const [loadedSounds, updateLoadedSounds] = useImmer<RandomSound[]>([]);
  const [toPlay, setToPlay] = useState<number[]>([]);

  useEffect(() => {
    if (toPlay.length === 0) {
      return;
    }

    toPlay.forEach((element) => {
      onSoundPlay(element);
    });
    setToPlay([]);
  }, [toPlay]);

  const queuePlay = (soundId: number) => {
    setToPlay((val) => [...val, soundId]);
  };

  const onSoundPlay = (soundId: number) => {
    console.log('triggered for ', soundId);
    const sound = loadedSounds.find((snd) => snd.id == soundId);
    if (sound == null) {
      console.log('could not find sound for ', soundId, loadedSounds);
      return;
    }

    const newTimeout = getTimeout(sound.upperBound);
    const timeoutId = startSound(sound.id, newTimeout);
    const audio = new Audio(sound.url);
    console.log(
      'playing audio',
      sound.timeoutId,
      ' => ',
      timeoutId,
      `(${newTimeout}). ${sound.initialTimeout}, ${sound.upperBound}`,
    );
    audio.play();

    updateLoadedSounds((draft) => {
      const draftSound = draft.find((snd) => snd.id == soundId);
      if (draftSound == null) {
        return;
      }

      draftSound.timeoutId = timeoutId;
      draftSound.initialTimeout = newTimeout;
    });
  };

  const startSound = (soundId: number, timeout: number): number => {
    const newId = timeoutManager.setTimeout(() => {
      queuePlay(soundId);
    }, timeout);

    return newId;
  };

  const addSound = (url: string, label: string, upperBound: number): number => {
    const newId =
      loadedSounds.reduce((maxId, sound) => Math.max(maxId, sound.id), 0) + 1;

    const sound: RandomSound = {
      id: newId,
      label: label,
      url: url,
      upperBound,
      initialTimeout: undefined,
      pauseInformation: { isPaused: false, remainingTime: 0 },
      timeoutId: undefined,
    };

    updateLoadedSounds((draft) => {
      draft.push(sound);
    });
    queuePlay(newId);

    return newId;
  };

  const removeSound = (soundId: number) => {
    updateLoadedSounds((draft) => {
      const sound = draft.find((snd) => snd.id == soundId);
      if (sound) {
        if (!sound.pauseInformation.isPaused && sound.timeoutId) {
          timeoutManager.clearTimeout(sound.timeoutId);
        }
        return draft.filter((snd) => snd.id != sound.id);
      }
    });
  };

  const pauseSound = (soundId: number) => {
    updateLoadedSounds((draft) => {
      const sound = draft.find((snd) => snd.id == soundId);

      if (sound == null || !sound.timeoutId) {
        return;
      }

      const triggerTime = timeoutManager.getTriggerTime(sound.timeoutId);
      if (triggerTime == null) {
        return;
      }

      const remainingTime = triggerTime.getTime() - Date.now();
      timeoutManager.clearTimeout(sound.timeoutId);

      sound.pauseInformation.remainingTime = remainingTime;
      sound.pauseInformation.isPaused = true;
    });
  };

  const resumeSound = (soundId: number) => {
    const sound = loadedSounds.find((snd) => snd.id == soundId);
    if (sound == null || !sound.pauseInformation.isPaused) {
      return;
    }
    const newTimeoutId = startSound(
      sound.id,
      sound.pauseInformation.remainingTime,
    );
    updateLoadedSounds((draft) => {
      const draftSound = draft.find((snd) => snd.id == soundId);

      if (draftSound == null || !draftSound.pauseInformation.isPaused) {
        return;
      }

      draftSound.pauseInformation.isPaused = false;

      draftSound.timeoutId = newTimeoutId;
    });
  };

  const getTimeout = (upperBound: number) => {
    return Math.floor(Math.random() * upperBound);
  };

  return { loadedSounds, addSound, removeSound, pauseSound, resumeSound };
};

export const RandomSoundsContext = createContext({
  loadedSounds: [],
  addSound: () => 0,
  removeSound: () => {},
  pauseSound: () => {},
  resumeSound: () => {},
} as SoundsProviderValues);

const SoundsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const timeoutContext = useContext(TimeoutContext);
  const soundsHook = UseRandomSounds(timeoutContext);

  return (
    <RandomSoundsContext.Provider value={{ ...soundsHook }}>
      {children}
    </RandomSoundsContext.Provider>
  );
};
export default SoundsProvider;
