import { IRoundResult } from '../types/dice';
import { IPlayerData, Player } from '../types/players';

export const getSeriesData = (
  rounds: IRoundResult[],
  playerData: IPlayerData,
  player: Player,
): { x: number; y: number }[] => {
  const seriesData = rounds.reduce<{ x: number; y: number }[]>(
    (prev, cur, i) => {
      const losses =
        player === Player.Attacker ? cur.attackerLosses : cur.defenderLosses;
      return [...prev, { x: i + 1, y: prev[i].y - losses }];
    },
    [{ x: 0, y: playerData.initialTroops }],
  );
  return seriesData;
};
