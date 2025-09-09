import { Route, Routes } from 'react-router-dom';
import { screens, routes } from './routes';
import { RouteElement } from '../types/routes';
import { Suspense } from 'react';
import Loading from './screens/Loading';

function assembleRoutes(options: RouteElement[]) {
  return options.map((route, index) => (
    <Route
      key={index}
      {...(route?.index
        ? { index: true }
        : {
            path: route?.path,
            children: route?.children
              ? assembleRoutes(route.children)
              : undefined,
          })}
      {...(route?.screen === undefined
        ? {}
        : {
            Component: screens[route.screen],
          })}
    />
  ));
}

export const AppRoutes = () => {
  return <Routes>{assembleRoutes(routes)}</Routes>;
};
