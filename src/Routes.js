import { Route, Routes } from "react-router-dom";
import { Home } from "./screens";
import WorkTermReport from "./screens/WorkTermReport/WorkTermReport";

export function AppRoutes() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/work-term-report" element={<WorkTermReport />} />
        {/* <Route exact path="/about" element={} />
        <Route exact path="/edit" element={} /> */}
      </Routes>
    </div>
  );
}
