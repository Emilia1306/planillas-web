import React from "react";
import NavbarContador from "../../components/NavbarContador";
import PlanillaTable from "../../components/PlanillaTable";
import FilterSection from "../../components/FilterSection";

const PlanillasPage: React.FC = () => {
  // Datos simulados
  const planillas = [
    {
      mes: "Enero",
      anio: 2023,
      sueldoBase: 1200.0,
      diasLaborados: 25,
      salarioLiquido: 1150.0,
      detalleLink: "/planilla/1/detalle",
    },
    {
      mes: "Febrero",
      anio: 2023,
      sueldoBase: 1200.0,
      diasLaborados: 20,
      salarioLiquido: 1100.0,
      detalleLink: "/planilla/2/detalle",
    },
    {
      mes: "Marzo",
      anio: 2023,
      sueldoBase: 1200.0,
      diasLaborados: 22,
      salarioLiquido: 1120.0,
      detalleLink: "/planilla/3/detalle",
    },
  ];

  const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo"];
  const years = [2021, 2022, 2023];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh", // Ocupa toda la altura de la pantalla
        width: "100vw", // Ocupa todo el ancho de la pantalla
        overflow: "hidden", // Evita que el contenido se desborde
        backgroundColor: "#ffffff", // Fondo de la página
      }}
    >
      {/* Navbar */}
      <NavbarContador userName="María Gonzáles" userRole="Contador/a" />

      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          padding: "20px",
          overflowY: "auto", // Scroll para contenido si es necesario
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
            overflowY: "auto", // Agrega scroll solo a la tabla si es necesario
            display: "flex",
            flexDirection: "column",
          }}
        >
          <PlanillaTable planillas={planillas} />
        </div>
      </div>
    </div>
  );
};

export default PlanillasPage;
