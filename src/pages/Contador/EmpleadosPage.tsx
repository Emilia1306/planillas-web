import React from "react";
import NavbarContador from "../../components/NavbarContador";
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
      planillaLink: "/contador/planilla/1",
    },
    {
      id: 2,
      nombres: "María José",
      apellidos: "Martínez López",
      email: "mariajose@mail.com",
      planillaLink: "/contador/planilla/2",
    },
    {
      id: 3,
      nombres: "Carlos Andrés",
      apellidos: "García Pérez",
      email: "carlosandres@mail.com",
      planillaLink: "/contador/planilla/3",
    },
  ];

  const title = "Facultad";

  const handleViewPlanilla = (planillaLink: string) => {
    navigate(planillaLink);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        width: "100vw",
        margin: 0,
        padding: 0,
        backgroundColor: "#FFFFFF",
      }}
    >
      {/* Navbar */}
      <NavbarContador userName="Maria Gonzáles" userRole="Contador/a" />

      {/* Contenido principal */}
      <div
        className="w-100"
        style={{
          flex: 1,
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

        {/* Tabla de empleados */}
        <div style={{ flex: 1, overflowY: "auto" }}>
          <table
            className="table table-hover"
            style={{
              width: "100%",
              borderCollapse: "collapse",
              textAlign: "center",
              fontSize: "16px",
            }}
          >
            <thead style={{ backgroundColor: "#f0f0f0" }}>
              <tr>
                <th style={{ padding: "10px", borderBottom: "2px solid #ddd" }}>
                  ID Empleado
                </th>
                <th style={{ padding: "10px", borderBottom: "2px solid #ddd" }}>
                  Nombres
                </th>
                <th style={{ padding: "10px", borderBottom: "2px solid #ddd" }}>
                  Apellidos
                </th>
                <th style={{ padding: "10px", borderBottom: "2px solid #ddd" }}>
                  Email
                </th>
                <th style={{ padding: "10px", borderBottom: "2px solid #ddd" }}>
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee) => (
                <tr key={employee.id}>
                  <td
                    style={{
                      padding: "10px",
                      borderBottom: "1px solid #ddd",
                    }}
                  >
                    {employee.id}
                  </td>
                  <td
                    style={{
                      padding: "10px",
                      borderBottom: "1px solid #ddd",
                    }}
                  >
                    {employee.nombres}
                  </td>
                  <td
                    style={{
                      padding: "10px",
                      borderBottom: "1px solid #ddd",
                    }}
                  >
                    {employee.apellidos}
                  </td>
                  <td
                    style={{
                      padding: "10px",
                      borderBottom: "1px solid #ddd",
                    }}
                  >
                    {employee.email}
                  </td>
                  <td
                    style={{
                      padding: "10px",
                      borderBottom: "1px solid #ddd",
                    }}
                  >
                    <button
                      className="btn"
                      style={{
                        backgroundColor: "#c1d9d4",
                        color: "#2f3e55",
                        borderRadius: "10px",
                        padding: "5px 15px",
                        border: "none",
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
