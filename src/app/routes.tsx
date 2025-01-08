import { Outlet } from 'react-router-dom';
import Homepage from './screens/Homepage';
import WorkTermReport from './screens/WorkTermReport';
import RiskCalculatorScreen from './screens/RiskCalculatorScreen';
import RiskCalculatorResult from './screens/RiskCalculatorResult';
import { RouteElement } from '../types/RouteSegment';
import Countdown from './screens/Countdown';

type ScreenMap = {
  [key: string]: JSX.Element;
};

export const screens: ScreenMap = {
  home: <Homepage />,
  wtr: <WorkTermReport />,
  'risk-calculator': <RiskCalculatorScreen />,
  'risk-result': <RiskCalculatorResult />,
  countdown: <Countdown />,
  outlet: <Outlet />,
};

export const routes: RouteElement[] = [
  {
    screen: 'home',
    index: true,
    name: 'Home',
  },
  {
    screen: 'wtr',
    path: '/work-term-report',
    name: 'Reports',
    children: [{ screen: 'wtr', path: ':reportId' }],
  },
  {
    screen: 'countdown',
    path: '/countdown',
    name: 'New Years!!!!',
  },
  // {
  //   screen: 'outlet',
  //   path: '/proj',
  //   name: 'Projects',
  //   children: [
  //     {
  //       screen: 'risk-calculator',
  //       path: 'risk-calculator',
  //       name: 'Risk Calculator',
  //       children: [
  //         {
  //           screen: 'risk-result',
  //           path: ':result',
  //           name: 'result of risk battle',
  //         },
  //       ],
  //     },
  //   ],
  // },
];
