import React from "react";
import { useNavigate } from "react-router-dom";
import NavbarContador from "../../components/NavbarContador";
import PlanillaTable from "../../components/PlanillaTable";
import FilterSection from "../../components/FilterSection";

const PlanillasPage: React.FC = () => {
  const navigate = useNavigate();

  // Datos simulados
  const planillas = [
    {
      id: 1,
      mes: "Enero",
      anio: 2023,
      sueldoBase: 1200.0,
      diasLaborados: 25,
      salarioLiquido: 1150.0,
      detalleLink: "/contador/planilla/detalle/",
    },
    {
      id: 2,
      mes: "Febrero",
      anio: 2023,
      sueldoBase: 1200.0,
      diasLaborados: 20,
      salarioLiquido: 1100.0,
      detalleLink: "/contador/planilla/detalle/",
    },
    {
      id: 3,
      mes: "Marzo",
      anio: 2023,
      sueldoBase: 1200.0,
      diasLaborados: 22,
      salarioLiquido: 1120.0,
      detalleLink: "/contador/planilla/detalle/",
    },
  ];

  const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo"];
  const years = [2021, 2022, 2023];

  const handleViewDetail = (detalleLink: string) => {
    navigate(detalleLink); // Navega a la ruta del detalle de la planilla
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        width: "100vw",
        overflow: "hidden",
        backgroundColor: "#ffffff",
      }}
    >
      {/* Navbar */}
      <NavbarContador userName="María Gonzáles" userRole="Contador/a" />

      <div
        className="mx-2"
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          padding: "20px",
          overflowY: "auto",
        }}
      >
        {/* Main Card */}
        <div
          className="main-card"
          style={{
            backgroundColor: "#56735A",
            borderRadius: "15px",
            color: "white",
            padding: "20px",
            marginBottom: "20px",
            textAlign: "left",
          }}
        >
          <h3>Planillas de Juanito Kevin Cortez Padilla</h3>
        </div>

        {/* Filtros */}
        <div
          style={{
            marginBottom: "20px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <FilterSection meses={meses} years={years} />
        </div>

        {/* Tabla de planillas */}
        <div
          style={{
            flex: 1,
            overflowY: "auto",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <table className="table table-hover table-striped text-center">
            <thead>
              <tr>
                <th>Mes</th>
                <th>Año</th>
                <th>Sueldo Base</th>
                <th>Días Laborados</th>
                <th>Salario Líquido</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {planillas.map((planilla) => (
                <tr key={planilla.id}>
                  <td>{planilla.mes}</td>
                  <td>{planilla.anio}</td>
                  <td>${planilla.sueldoBase.toFixed(2)}</td>
                  <td>{planilla.diasLaborados}</td>
                  <td>${planilla.salarioLiquido.toFixed(2)}</td>
                  <td>
                    <button
                      className="btn"
                      style={{
                        backgroundColor: "#c1d9d4",
                        color: "#2f3e55",
                        borderRadius: "10px",
                        padding: "5px 15px",
                        border: "none",
                      }}
                      onClick={() => handleViewDetail(planilla.detalleLink)}
                    >
                      Ver Detalle
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

export default PlanillasPage;
