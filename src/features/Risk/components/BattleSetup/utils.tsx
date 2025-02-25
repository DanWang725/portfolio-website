import { IconType } from 'react-icons';
import { GiPikeman, GiCavalry, GiCannon } from 'react-icons/gi';

export interface RiskTroop {
  Icon: IconType;
  name: string;
  value: number;
}

export const riskTroops: RiskTroop[] = [
  { Icon: GiPikeman, name: 'Pikeman', value: 1 },
  { Icon: GiCavalry, name: 'Cavalry', value: 5 },
  { Icon: GiCannon, name: 'Cannon', value: 10 },
];
