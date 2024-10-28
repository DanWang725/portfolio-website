import { Outlet } from 'react-router-dom';
import Homepage from './screens/Homepage';
import WorkTermReport from './screens/WorkTermReport';
import RiskCalculatorScreen from './screens/RiskCalculatorScreen';
import RiskCalculatorResult from './screens/RiskCalculatorResult';
import { exact } from 'prop-types';
import { RouteElement } from '../types/RouteSegment';

type ScreenMap = {
  [key: string]: JSX.Element;
};

export const screens: ScreenMap = {
  home: <Homepage />,
  wtr: <WorkTermReport />,
  'risk-calculator': <RiskCalculatorScreen />,
  'risk-result': <RiskCalculatorResult />,
  outlet: <Outlet />,
};

export const routes: RouteElement[] = [
  {
    screen: 'home',
    index: true,
    name: 'homepage',
  },
  {
    screen: 'wtr',
    path: '/work-term-report',
    name: 'Work Term Reports',
    children: [{ screen: 'wtr', path: ':reportId' }],
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
