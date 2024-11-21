import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Forms/Login";
import DashboardContador from "./pages/Contador/DashboardContador";
import EmployeesPage from "./pages/Contador/EmpleadosPage";
import PlanillasPage from "./pages/Contador/PlanillasPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/contador/dashboard" element={<DashboardContador />} />
        <Route path="/contador/unidad" element={<EmployeesPage />} />
        <Route path="/contador/planilla" element={<PlanillasPage />} />
      </Routes>
    </Router>
  );
}

export default App;
