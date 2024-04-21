import { Outlet, Route, Routes } from 'react-router-dom';
import { Home } from './screens';
import WorkTermReport from './screens/WorkTermReport/WorkTermReport';
import RiskCalculatorScreen from './screens/RiskCalculator/RiskCalculatorScreen';
import LayoutWrapper from './screens/LayoutWrapper';

export const AppRoutes = ({ setNavbarClass }) => {
  return (
    <div>
      <Routes>
        <Route
          exact
          path="/"
          element={<Home setNavbarClass={setNavbarClass} />}
        />
        <Route path="/work-term-report" element={<Outlet />}>
          <Route index element={<WorkTermReport />} />
          <Route path=":reportId" element={<WorkTermReport />} />
        </Route>
        <Route
          path="/risk-calculator"
          element={
            <LayoutWrapper>
              <RiskCalculatorScreen />
            </LayoutWrapper>
          }
        ></Route>
        {/* <Route exact path="/about" element={} />
        <Route exact path="/edit" element={} /> */}
      </Routes>
    </div>
  );
};
