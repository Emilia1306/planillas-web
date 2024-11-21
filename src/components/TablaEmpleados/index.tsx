import React from "react";

interface Employee {
  id: number;
  nombres: string;
  apellidos: string;
  email: string;
  planillaLink: string;
}

interface EmployeeTableProps {
  employees: Employee[];
}

const EmployeeTable: React.FC<EmployeeTableProps> = ({ employees }) => {
  if (employees.length === 0) {
    return <p>No hay empleados registrados en esta unidad o facultad.</p>;
  }

  return (
    <table className="table table-borderless">
      <thead>
        <tr>
          <th>ID Empleado</th>
          <th>Nombres</th>
          <th>Apellidos</th>
          <th>Email</th>
          <th>Planilla</th>
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
              <a
                href={employee.planillaLink}
                className="btn btn-custom"
                style={{
                  backgroundColor: "#c1d9d4",
                  color: "#2f3e55",
                  borderRadius: "10px",
                  textDecoration: "none",
                  padding: "5px 15px",
                }}
              >
                Ver Planilla
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default EmployeeTable;
