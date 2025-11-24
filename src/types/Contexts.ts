/** Represents a random sound timeout */
export interface RandomSound {
  timeoutId?: number;
  id: number;
  /** Represents the media type url to play when triggered */
  url: string;
  /** The name of the audio that will be playaed */
  label: string;
  /** Represents the interval set when sound was queued. */
  initialTimeout?: number;
  /** Represents the maximum time can go */
  upperBound: number;
  pauseInformation: {
    remainingTime: number;
    isPaused: boolean;
  };
}

export interface PerformanceProviderValues {
  isDebugMode: boolean;
  setIsDebugMode: React.Dispatch<React.SetStateAction<boolean>>;
  isLowPerformance: boolean;
  setIsLowPerformance: React.Dispatch<React.SetStateAction<boolean>>;
}
export interface StylingProviderValues {
  navbarClassOverrides: string;
  setNavbarClassOverrides: React.Dispatch<React.SetStateAction<string>>;
}

export interface SoundsProviderValues {
  loadedSounds: RandomSound[];
  addSound: (url: string, label: string, upperBound: number) => number;
  removeSound: (soundId: number) => void;
  pauseSound: (soundId: number | number[]) => void;
  resumeSound: (soundId: number | number[]) => void;
}
