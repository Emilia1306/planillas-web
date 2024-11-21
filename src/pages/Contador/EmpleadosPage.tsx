import React from "react";
import NavbarContador from "../../components/NavbarContador";
import EmployeeTable from "../../components/TablaEmpleados";

const EmployeesPage: React.FC = () => {
  // Simulación de datos
  const employees = [
    {
      id: 1,
      nombres: "Juanito Kevin",
      apellidos: "Cortez Padilla",
      email: "aidonnowwhatcaniput@mail.com",
      planillaLink: "/planilla/1",
    },
    {
      id: 2,
      nombres: "Juanito Kevin",
      apellidos: "Cortez Padilla",
      email: "aidonnowwhatcaniput@mail.com",
      planillaLink: "/planilla/2",
    },
    {
      id: 3,
      nombres: "Juanito Kevin",
      apellidos: "Cortez Padilla",
      email: "aidonnowwhatcaniput@mail.com",
      planillaLink: "/planilla/3",
    },
  ];

  const title = "Facultad"; // Cambiar dinámicamente según la unidad o facultad

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
          <EmployeeTable employees={employees} />
        </div>
      </div>
    </div>
  );
};

export default EmployeesPage;
