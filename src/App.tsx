import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Forms/Login";
import DashboardContador from "./pages/Contador/DashboardContador";
import EmployeesPage from "./pages/Contador/EmpleadosPage";
import PlanillasPage from "./pages/Contador/PlanillasPage";
import EmployeesGestionPage from "./pages/Contador/EmpleadosGestionPage";
import FacultadesPage from "./pages/Contador/FacultadesPage";
import UnidadesPage from "./pages/Contador/UnidadesPage";
import DashboardEmpleado from "./pages/Empleado/DashboardEmpleado";
import "bootstrap/dist/css/bootstrap.min.css";
import "datatables.net-bs5/css/dataTables.bootstrap5.min.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/contador/dashboard" element={<DashboardContador />} />
        <Route path="/contador/unidad" element={<EmployeesPage />} />
        <Route path="/contador/planilla" element={<PlanillasPage />} />
        <Route path="/contador/empleados" element={<EmployeesGestionPage />} />
        <Route path="/contador/unidades" element={<UnidadesPage />} />
        <Route path="/contador/facultades" element={<FacultadesPage />} />
        <Route path="/empleado/dashboard" element={<DashboardEmpleado />} />
      </Routes>
    </Router>
  );
}

export default App;
