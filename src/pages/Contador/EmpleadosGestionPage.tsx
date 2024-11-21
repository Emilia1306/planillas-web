import React, { useEffect } from "react";
import NavbarContador from "../../components/NavbarContador";
import $ from "jquery";
import "datatables.net-bs5/css/dataTables.bootstrap5.min.css";
import "datatables.net-bs5";

interface Employee {
  id: number;
  nombres: string;
  apellidos: string;
  email: string;
}

const EmployeesGestionPage: React.FC = () => {
  const employees: Employee[] = [
    {
      id: 1,
      nombres: "Juanito Kevin",
      apellidos: "Cortez Padilla",
      email: "aidonnowwhatcaniput@mail.com",
    },
    {
      id: 2,
      nombres: "Juanito Kevin",
      apellidos: "Cortez Padilla",
      email: "aidonnowwhatcaniput@mail.com",
    },
    {
      id: 3,
      nombres: "Juanito Kevin",
      apellidos: "Cortez Padilla",
      email: "aidonnowwhatcaniput@mail.com",
    },
  ];

  useEffect(() => {
    const table = $("#employeesTable").DataTable({
      paging: true,
      searching: true,
      info: true,
      ordering: true,
      destroy: true, // Reinicializa la tabla si ya existe
    });

    return () => {
      // Destruye la instancia de DataTable al desmontar el componente
      table.destroy();
    };
  }, []);

  const handleAddEmployee = () => {
    console.log("Añadir nuevo empleado");
    // Lógica para añadir un nuevo empleado
  };

  const handleEdit = (id: number) => {
    console.log(`Editar empleado con ID: ${id}`);
    // Lógica para editar empleado
  };

  const handleDelete = (id: number) => {
    console.log(`Eliminar empleado con ID: ${id}`);
    // Lógica para eliminar empleado
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
          <h3>Empleados</h3>
        </div>

        {/* Botón de Añadir */}
        <div style={{ textAlign: "right", marginBottom: "15px" }}>
          <button
            className="btn"
            style={{
              backgroundColor: "#c1d9d4",
              color: "#2f3e55",
              borderRadius: "10px",
              padding: "10px 20px",
              border: "none",
            }}
            onClick={handleAddEmployee}
          >
            Añadir Empleado
          </button>
        </div>

        {/* Tabla de empleados */}
        <div className="table-responsive">
          <table
            id="employeesTable"
            className="table table-hover"
            style={{ width: "100%" }}
          >
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
                        marginRight: "10px",
                        border: "none",
                      }}
                      onClick={() => handleEdit(employee.id)}
                    >
                      Editar
                    </button>
                    <button
                      className="btn"
                      style={{
                        backgroundColor: "#c1d9d4",
                        color: "#2f3e55",
                        borderRadius: "10px",
                        padding: "5px 15px",
                        border: "none",
                      }}
                      onClick={() => handleDelete(employee.id)}
                    >
                      Eliminar
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

export default EmployeesGestionPage;
