import { createContext, ReactNode, useRef } from 'react';
class TimeoutManager {
  public timeoutIds: number[] = [];

  public constructor() {}

  public setTimeout(callback: () => void, timeout: number): number {
    const timeoutId = setTimeout(() => {
      callback();
      this.clearTimeout(timeoutId);
    }, timeout);
    this.timeoutIds.push(timeoutId);
    return timeoutId;
  }

  public clearTimeout(timeoutId: number): void {
    clearTimeout(timeoutId);
    this.timeoutIds = this.timeoutIds.filter((id) => id !== timeoutId);
  }
  public clearAllTimeouts(): void {
    this.timeoutIds.forEach((element) => {
      this.clearTimeout(element);
    });
    this.timeoutIds = [];
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
