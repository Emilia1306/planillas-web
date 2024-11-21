import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavbarContador from "../../components/NavbarContador";
import FilterSection from "../../components/FilterSection";

interface Planilla {
  id: number;
  mes: string;
  anio: number;
  sueldoBase: number;
  diasLaborados: number;
  salarioLiquido: number;
  detalleLink: string;
}

const PlanillasPage: React.FC = () => {
  const navigate = useNavigate();

  // Estado para manejar los datos del empleado
  const [empleado, setEmpleado] = useState({
    id: 1,
    nombres: "Juanito Kevin",
    apellidos: "Cortez Padilla",
  });

  const [planillas, setPlanillas] = useState<Planilla[]>([]);
  const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
  const years = [2021, 2022, 2023, 2024];

  useEffect(() => {
    // Simulación de datos cargados dinámicamente
    const fetchPlanillas = async () => {
      // Aquí podrías hacer una llamada a la API para obtener las planillas
      const fetchedData = [
        {
          id: 1,
          mes: "Enero",
          anio: 2023,
          sueldoBase: 1200.0,
          diasLaborados: 25,
          salarioLiquido: 1150.0,
          detalleLink: "/contador/planilla/detalle/1",
        },
        {
          id: 2,
          mes: "Febrero",
          anio: 2023,
          sueldoBase: 1200.0,
          diasLaborados: 20,
          salarioLiquido: 1100.0,
          detalleLink: "/contador/planilla/detalle/2",
        },
        {
          id: 3,
          mes: "Marzo",
          anio: 2023,
          sueldoBase: 1200.0,
          diasLaborados: 22,
          salarioLiquido: 1120.0,
          detalleLink: "/contador/planilla/detalle/3",
        },
      ];
      setPlanillas(fetchedData);

      // Simulación de llamada para obtener datos del empleado
      const fetchedEmpleado = {
        id: 1,
        nombres: "Juanito Kevin",
        apellidos: "Cortez Padilla",
      };
      setEmpleado(fetchedEmpleado);
    };

    fetchPlanillas();
  }, []);

  const handleViewDetail = (detalleLink: string) => {
    navigate(detalleLink); // Navega a la ruta del detalle de la planilla
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh", // Ocupa toda la altura de la pantalla
        width: "100vw", // Ocupa todo el ancho disponible
        overflow: "hidden",
        backgroundColor: "#ffffff",
      }}
    >
      {/* Navbar */}
      <NavbarContador userName="María Gonzáles" userRole="Contador/a" />

      <div
        className="mx-2"
        style={{
          flex: 1, // Permite que el contenido crezca para llenar el espacio restante
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
          <h3>
            Planillas de {empleado.nombres} {empleado.apellidos}
          </h3>
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
                  Mes
                </th>
                <th style={{ padding: "10px", borderBottom: "2px solid #ddd" }}>
                  Año
                </th>
                <th style={{ padding: "10px", borderBottom: "2px solid #ddd" }}>
                  Sueldo Base
                </th>
                <th style={{ padding: "10px", borderBottom: "2px solid #ddd" }}>
                  Días Laborados
                </th>
                <th style={{ padding: "10px", borderBottom: "2px solid #ddd" }}>
                  Salario Líquido
                </th>
                <th style={{ padding: "10px", borderBottom: "2px solid #ddd" }}>
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody>
              {planillas.map((planilla) => (
                <tr key={planilla.id}>
                  <td
                    style={{
                      padding: "10px",
                      borderBottom: "1px solid #ddd",
                    }}
                  >
                    {planilla.mes}
                  </td>
                  <td
                    style={{
                      padding: "10px",
                      borderBottom: "1px solid #ddd",
                    }}
                  >
                    {planilla.anio}
                  </td>
                  <td
                    style={{
                      padding: "10px",
                      borderBottom: "1px solid #ddd",
                    }}
                  >
                    ${planilla.sueldoBase.toFixed(2)}
                  </td>
                  <td
                    style={{
                      padding: "10px",
                      borderBottom: "1px solid #ddd",
                    }}
                  >
                    {planilla.diasLaborados}
                  </td>
                  <td
                    style={{
                      padding: "10px",
                      borderBottom: "1px solid #ddd",
                    }}
                  >
                    ${planilla.salarioLiquido.toFixed(2)}
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
