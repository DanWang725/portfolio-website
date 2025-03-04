import Homepage from './screens/Homepage';
import WorkTermReport from './screens/WorkTermReport';
import RiskCalculatorScreen from './screens/RiskCalculatorScreen';
import { RouteElement } from '../types/routes';
import Countdown from './screens/Countdown';
import RandomSounds from './screens/RandomSounds';
import Projects from './screens/Projects';

type ScreenMap = {
  [key: string]: JSX.Element;
};

export const screens: ScreenMap = {
  home: <Homepage />,
  wtr: <WorkTermReport />,
  'risk-calculator': <RiskCalculatorScreen />,
  countdown: <Countdown />,
  projects: <Projects />,
  funny: <RandomSounds />,
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
