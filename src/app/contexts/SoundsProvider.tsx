import { createContext, ReactNode, useContext, useRef } from 'react';
import { TimeoutContext, TimeoutManager } from './TimeoutProvider';
/** Represents a random sound timeout */
export interface RandomSound {
  timeoutId: number;
  id: number;
  /** Represents the media type url to play when triggered */
  url: string;
  /** Represents the interval set when sound was queued. */
  initialTimeout: number;
  /** Represents the maximum time can go */
  upperBound: number;
}

/** Represents a random sound which has been paused */
export interface RandomSoundPaused extends RandomSound {
  remainingTime: number;
}

class RandomSoundsManager {
  private randomSoundsPlaying: RandomSound[] = [];
  private randomSoundsPaused: RandomSoundPaused[] = [];
  private _timeoutManager: TimeoutManager;
  public constructor(timeoutManager: TimeoutManager) {
    this._timeoutManager = timeoutManager;
  }

  private getSound(soundId: number) {
    return this.randomSoundsPlaying.find((snd) => snd.id == soundId);
  }
  private onSoundPlay(soundId: number) {
    const sound = this.randomSoundsPlaying.find((snd) => snd.id == soundId);
    if (sound == null) {
      return;
    }

    const newTimeout = this.getTimeout(sound);
    const newId = this._timeoutManager.setTimeout(() => {
      this.onSoundPlay(soundId);
    }, this.getTimeout(sound));
    sound.initialTimeout = newTimeout;
    sound.timeoutId = newId;
  }

  public stopPlaying(soundId: number) {
    const sound = this.randomSoundsPlaying.find((snd) => snd.id == soundId);
    if (sound) {
      this._timeoutManager.clearTimeout(sound.timeoutId);
      this.randomSoundsPlaying = this.randomSoundsPlaying.filter(
        (snd) => snd.id != sound.id,
      );
    }
  }

  public pauseSound(soundId: number) {
    const sound = this.getSound(soundId);

    if (sound == null) {
      return;
    }

    const triggerTime = this._timeoutManager.getTriggerTime(sound.timeoutId);
    if (triggerTime == null) {
      return;
    }

    const remainingTime = triggerTime.getTime() - Date.now();
    this.randomSoundsPaused.push({ ...sound, remainingTime: remainingTime });
    this.stopPlaying(sound.id);
  }

  public resumePlayingSound(soundId: number) {}

  private getTimeout(sound: RandomSound) {
    return Math.floor(Math.random() * sound.upperBound);
  }
}

export const RandomSoundsContext = createContext(
  new RandomSoundsManager(new TimeoutManager()),
);
const TimeoutProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const timeoutContext = useContext(TimeoutContext);
  const timeoutManager = useRef(new RandomSoundsManager(timeoutContext));

  return (
    <RandomSoundsContext.Provider value={timeoutManager.current}>
      {children}
    </RandomSoundsContext.Provider>
  );
};
