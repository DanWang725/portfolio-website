import { createContext, ReactNode, useRef } from 'react';
class TimeoutManager {
  private timeoutIds: { [x: number]: number } = {};

  public constructor() {}

  public setTimeout(callback: () => void, timeout: number): number {
    const timeoutId = setTimeout(() => {
      callback();
      this.clearTimeout(timeoutId);
    }, timeout);
    this.timeoutIds[timeoutId] = Date.now() + timeout;
    return timeoutId;
  }

  public clearTimeout(timeoutId: number): void {
    clearTimeout(timeoutId);
    delete this.timeoutIds[timeoutId];
  }
  public clearAllTimeouts(): void {
    Object.keys(this.timeoutIds).forEach((key) => {
      this.clearTimeout(Number.parseInt(key, 10));
    });
  }
  public getTriggerTime(id: number): Date | null {
    return this.timeoutIds[id] ? new Date(this.timeoutIds[id]) : null;
  }
}
export const TimeoutContext = createContext(new TimeoutManager());

const TimeoutProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const timeoutManager = useRef(new TimeoutManager());
  return (
    <TimeoutContext.Provider value={timeoutManager.current}>
      {children}
    </TimeoutContext.Provider>
  );
};
export default TimeoutProvider;
