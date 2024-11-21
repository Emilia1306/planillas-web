import React, { useEffect } from "react";
import "datatables.net-bs5/css/dataTables.bootstrap5.min.css";
import $ from "jquery";
import "datatables.net";
import "datatables.net-bs5";

interface Employee {
  id: number;
  nombres: string;
  apellidos: string;
  email: string;
}

interface EmployeeTableProps {
  employees: Employee[];
}

const EmployeeTable: React.FC<EmployeeTableProps> = ({ employees }) => {
  useEffect(() => {
    // Inicializa DataTables
    const table = $("#employeeTable").DataTable({
      destroy: true, // Permite reinicializar la tabla si ya existe
      paging: true,
      searching: true,
      info: true,
      language: {
        lengthMenu: "Mostrar _MENU_ registros por página",
        zeroRecords: "No se encontraron empleados",
        info: "Mostrando _START_ a _END_ de _TOTAL_ empleados",
        infoEmpty: "No hay empleados disponibles",
        search: "Buscar:",
        paginate: {
          first: "Primero",
          last: "Último",
          next: "Siguiente",
          previous: "Anterior",
        },
      },
    });

    return () => {
      // Destruye la tabla al desmontar el componente
      table.destroy();
    };
  }, [employees]);

  const handleEdit = (id: number) => {
    console.log(`Editar empleado con ID: ${id}`);
  };

  const handleDelete = (id: number) => {
    console.log(`Eliminar empleado con ID: ${id}`);
  };

  return (
    <div className="table-responsive">
      <table
        id="employeeTable"
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
                  onClick={() => handleEdit(employee.id)}
                  className="btn btn-sm"
                  style={{
                    backgroundColor: "#c1d9d4",
                    color: "#2f3e55",
                    marginRight: "5px",
                  }}
                >
                  Editar
                </button>
                <button
                  onClick={() => handleDelete(employee.id)}
                  className="btn btn-sm"
                  style={{
                    backgroundColor: "#c1d9d4",
                    color: "#2f3e55",
                  }}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeTable;