import React from "react";
import NavbarContador from "../../components/NavbarContador";
import EmployeeTable from "../../components/TablaEmpleados";
import { useNavigate } from "react-router-dom";

const EmployeesPage: React.FC = () => {
  const navigate = useNavigate();

  // Simulación de datos
  const employees = [
    {
      id: 1,
      nombres: "Juanito Kevin",
      apellidos: "Cortez Padilla",
      email: "aidonnowwhatcaniput@mail.com",
      planillaLink: "/contador/planilla/",
    },
    {
      id: 2,
      nombres: "Juanito Kevin",
      apellidos: "Cortez Padilla",
      email: "aidonnowwhatcaniput@mail.com",
      planillaLink: "/contador/planilla/",
    },
    {
      id: 3,
      nombres: "Juanito Kevin",
      apellidos: "Cortez Padilla",
      email: "aidonnowwhatcaniput@mail.com",
      planillaLink: "/contador/planilla/",
    },
  ];

  const title = "Facultad"; // Cambiar dinámicamente según la unidad o facultad

  const handleViewPlanilla = (planillaLink: string) => {
    navigate(planillaLink); // Navega a la ruta de la planilla
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh", // Ocupa toda la altura de la pantalla
        width: "100vw", // Asegura que ocupe todo el ancho de la ventana
        margin: 0,
        padding: 0,
        backgroundColor: "#FFFFFF", // Fondo de la página
      }}
    >
      {/* Navbar */}
      <NavbarContador userName="Maria Gonzáles" userRole="Contador/a" />

      {/* Contenido principal */}
      <div
        className="w-100 " // Asegura que ocupe el ancho completo
        style={{
          flex: 1, // Permite que el contenido crezca para llenar el espacio restante
          padding: "20px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Main Card */}
        <div
          className="card"
          style={{
            backgroundColor: "#56735A",
            borderRadius: "10px",
            color: "white",
            padding: "15px 20px",
            border: "none",
            marginBottom: "20px",
          }}
        >
          <h3>Empleados de {title}</h3>
        </div>

        {/* Employee Table */}
        <div style={{ flex: 1, overflowY: "auto" }}>
          <table className="table table-hover table-striped text-center">
            <thead>
              <tr>
                <th>ID Empleado</th>
                <th>Nombres</th>
                <th>Apellidos</th>
                <th>Email</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee) => (
                <tr key={employee.id}>
                  <td>{employee.id}</td>
                  <td>{employee.nombres}</td>
                  <td>{employee.apellidos}</td>
                  <td>{employee.email}</td>
                  <td>
                    <button
                      className="btn"
                      style={{
                        backgroundColor: "#c1d9d4",
                        color: "#2f3e55",
                        borderRadius: "10px",
                        padding: "5px 15px",
                        border: "none",
                        marginRight: "10px",
                      }}
                      onClick={() => handleViewPlanilla(employee.planillaLink)}
                    >
                      Ver Planilla
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default EmployeesPage;
