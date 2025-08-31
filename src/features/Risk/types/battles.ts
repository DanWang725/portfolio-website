import { Player } from './players';

export enum BattleStatus {
  NotStarted = 'notStarted',
  Ongoing = 'ongoing',
  Ended = 'ended',
}

export enum BattleResult {
  Minor = 'minor',
  Major = 'major',
  Overwhelming = 'overwhelming',
}
export interface BattleOutcome {
  winner: Player;
  result: BattleResult;
}
