import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Forms/Login";
import DashboardContador from "./pages/Contador/DashboardContador";
import EmployeesPage from "./pages/Contador/EmpleadosPage";
import PlanillasPage from "./pages/Contador/PlanillasPage";
import CrearPlanilla from "./pages/Contador/CrearPlanilla";
import FacultadesPage from "./pages/Contador/FacultadesPage";
import UnidadesPage from "./pages/Contador/UnidadesPage";
import DashboardEmpleado from "./pages/Empleado/DashboardEmpleado";
import "bootstrap/dist/css/bootstrap.min.css";
import "datatables.net-bs5/css/dataTables.bootstrap5.min.css";
import PlanillaDetalle from "./pages/Contador/PlanillaDetalle";
import UserProfile from "./pages/Empleado/PerfilEmpleado";
import EditUserForm from "./pages/Empleado/EditarPerfilEmpleado";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/contador/dashboard" element={<DashboardContador />} />
        <Route path="/contador/unidad" element={<EmployeesPage />} />
        <Route path="/contador/planilla/:id" element={<PlanillasPage />} />
        <Route path="/contador/crear" element={<CrearPlanilla />} />
        <Route path="/contador/unidades" element={<UnidadesPage />} />
        <Route path="/contador/facultades" element={<FacultadesPage />} />
        <Route path="/empleado/dashboard" element={<DashboardEmpleado />} />
        <Route path="/contador/planilla/detalle/:id" element={<PlanillaDetalle />} />
        <Route path="/empleado/perfil" element={<UserProfile />} />
        <Route path="/empleado/perfil/editar-perfil" element={<EditUserForm />} />
      </Routes>
    </Router>
  );
}

export default App;
