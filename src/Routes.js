import { Outlet, Route, Routes } from 'react-router-dom';
import { Home } from './screens';
import WorkTermReport from './screens/WorkTermReport/WorkTermReport';
import RiskCalculatorScreen from './screens/RiskCalculator/RiskCalculatorScreen';
import LayoutWrapper from './screens/LayoutWrapper';
import RiskCalculatorResult from './screens/RiskCalculator/RiskCalculatorResult';

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
        <Route path="/risk-calculator" element={<Outlet />}>
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
        </Route>
        {/* <Route exact path="/about" element={} />
        <Route exact path="/edit" element={} /> */}
      </Routes>
    </div>
  );
};
