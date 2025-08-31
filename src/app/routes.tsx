import { RouteElement } from '../types/routes';
import { lazy } from 'react';

type ScreenMap = {
  [key: string]: React.LazyExoticComponent<React.FC<{}>>;
};

const Home = lazy(() => import('./screens/Homepage'));
const Wtr = lazy(() => import('./screens/WorkTermReport'));
const RiskCalculator = lazy(() => import('./screens/RiskCalculatorScreen'));
const Countdown = lazy(() => import('./screens/Countdown'));
const Projects = lazy(() => import('./screens/Projects'));
const Funny = lazy(() => import('./screens/RandomSounds'));

export const screens: ScreenMap = {
  home: Home,
  wtr: Wtr,
  'risk-calculator': RiskCalculator,
  countdown: Countdown,
  funny: Funny,
  projects: Projects,
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
    path: '/projects',
    name: 'Projects',
    children: [
      {
        screen: 'projects',
        index: true,
      },
      {
        screen: 'risk-calculator',
        path: 'risk-calculator',
        name: 'Risk Calculator',
        children: [
          {
            screen: 'risk-calculator',
            path: ':result',
            name: 'result of risk battle',
          },
        ],
      },
      {
        screen: 'countdown',
        path: 'countdown',
        name: 'New Years!!!!',
      },
      {
        screen: 'funny',
        path: 'funny',
        name: 'Funny',
      },
    ],
  },
];
