import { Outlet, Route, Routes } from 'react-router-dom';
import { screens, routes } from './routes';

function assembleRoutes(options) {
  return options.map((route, index) => (
    <Route
      key={index}
      exact={route?.exact}
      path={route.path}
      element={screens[route.screen]}
    >
      {route?.children && assembleRoutes(route.children)}
    </Route>
  ));
}

export const AppRoutes = () => {
  return (
    <div>
      <Routes>
        {assembleRoutes(routes)}
        {/* <Route
          exact
          path="/"
          element={<Home setNavbarClass={setNavbarClass} />}
        />
        <Route path="/work-term-report" element={<Outlet />}>
          <Route index element={<WorkTermReport />} />
          <Route path=":reportId" element={<WorkTermReport />} />
        </Route>
        <Route path="risk-calculator" element={<Outlet />}>
          <Route
            index
            element={
              <LayoutWrapper>
                <RiskCalculatorScreen />
              </LayoutWrapper>
            }
          />
          <Route
            path=":result"
            element={
              <LayoutWrapper>
                <RiskCalculatorResult />
              </LayoutWrapper>
            }
          ></Route>
        </Route> */}
        {/* <Route exact path="/about" element={} />
        <Route exact path="/edit" element={} /> */}
      </Routes>
    </div>
  );
};
