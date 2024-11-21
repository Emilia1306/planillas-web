import React from "react";

interface Planilla {
  mes: string;
  anio: number;
  sueldoBase: number;
  diasLaborados: number;
  salarioLiquido: number;
  detalleLink: string;
}

interface PlanillaTableProps {
  planillas: Planilla[];
}

const PlanillaTable: React.FC<PlanillaTableProps> = ({ planillas }) => {
  if (planillas.length === 0) {
    return <p>No hay planillas registradas para este empleado.</p>;
  }

  return (
    <table className="table table-hover table-striped">
      <thead>
        <tr>
          <th>Mes</th>
          <th>Año</th>
          <th>Sueldo Base</th>
          <th>Días Laborados</th>
          <th>Salario Líquido</th>
          <th>Detalle Planilla</th>
        </tr>
      </thead>
      <tbody>
        {planillas.map((planilla, index) => (
          <tr key={index}>
            <td>{planilla.mes}</td>
            <td>{planilla.anio}</td>
            <td>${planilla.sueldoBase.toFixed(2)}</td>
            <td>{planilla.diasLaborados}</td>
            <td>${planilla.salarioLiquido.toFixed(2)}</td>
            <td>
              <a
                href={planilla.detalleLink}
                className="btn btn-primary"
                style={{
                  borderRadius: "10px",
                  padding: "5px 15px",
                }}
              >
                Detalle de Planilla
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PlanillaTable;
