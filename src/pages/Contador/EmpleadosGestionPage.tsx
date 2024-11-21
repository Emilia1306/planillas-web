import React, { useState, useEffect } from "react";
import NavbarContador from "../../components/NavbarContador";
import UserModal from "../../components/ModalUser"; // Asegúrate de tener esta modal creada e importada
import $ from "jquery";
import "datatables.net-bs5/css/dataTables.bootstrap5.min.css";
import "datatables.net-bs5";

interface Employee {
  id?: number;
  nombres: string;
  apellidos: string;
  email: string;
}

const EmployeesGestionPage: React.FC = () => {
  const [employees, setEmployees] = useState<Employee[]>([
    {
      id: 1,
      nombres: "Juanito Kevin",
      apellidos: "Cortez Padilla",
      email: "aidonnowwhatcaniput@mail.com",
    },
    {
      id: 2,
      nombres: "María López",
      apellidos: "Pérez García",
      email: "maria.lopez@example.com",
    },
    {
      id: 3,
      nombres: "Carlos Alberto",
      apellidos: "Rodríguez Salazar",
      email: "carlos.rodriguez@example.com",
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(
    null
  );

  useEffect(() => {
    const table = $("#employeesTable").DataTable({
      paging: true,
      searching: true,
      info: true,
      ordering: true,
      destroy: true, // Reinicializa la tabla si ya existe
    });

    return () => {
      table.destroy();
    };
  }, [employees]); // Se vuelve a inicializar cuando cambian los empleados

  const handleAddEmployee = () => {
    setSelectedEmployee(null); // Limpia cualquier empleado seleccionado
    setIsModalOpen(true); // Abre la modal
  };

  const handleEdit = (employee: Employee) => {
    setSelectedEmployee(employee); // Carga el empleado en la modal
    setIsModalOpen(true); // Abre la modal
  };

  const handleDelete = (id: number) => {
    // Lógica para eliminar empleado
    setEmployees((prev) => prev.filter((employee) => employee.id !== id));
    console.log(`Empleado con ID ${id} eliminado.`);
  };

  const handleSave = (data: Employee) => {
    if (selectedEmployee) {
      // Actualizar empleado
      setEmployees((prev) =>
        prev.map((employee) =>
          employee.id === selectedEmployee.id ? { ...employee, ...data } : employee
        )
      );
      console.log("Empleado actualizado:", data);
    } else {
      // Agregar nuevo empleado
      const newId = employees.length + 1;
      setEmployees((prev) => [...prev, { ...data, id: newId }]);
      console.log("Empleado agregado:", data);
    }
    setIsModalOpen(false); // Cierra la modal
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
                      onClick={() => handleEdit(employee)}
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
                      onClick={() => handleDelete(employee.id!)}
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

      {/* Modal para agregar/editar empleado */}
      <UserModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSave}
        user={selectedEmployee}
      />
    </div>
  );
};

export default EmployeesGestionPage;
