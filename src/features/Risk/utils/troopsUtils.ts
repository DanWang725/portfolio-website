import { GiPikeman, GiCavalry, GiCannon } from 'react-icons/gi';
import { RiskTroop } from '../types/troops';

export const riskTroops: RiskTroop[] = [
  { Icon: GiPikeman, name: 'Pikeman', value: 1 },
  { Icon: GiCavalry, name: 'Cavalry', value: 5 },
  { Icon: GiCannon, name: 'Cannon', value: 10 },
];
export const getRiskTroopSplit = (troopCount: number): number[] => {
  const cannonCount = Math.floor(troopCount / 10);
  const cavalryCount = Math.floor((troopCount - cannonCount * 10) / 5);
  const soldierCount = troopCount - cavalryCount * 5 - cannonCount * 10;
  return [cannonCount, cavalryCount, soldierCount];
};
