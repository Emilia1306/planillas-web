import React from "react";
import NavbarEmpleado from "../../components/NavbarEmpleado";
import employeeImage from "../../assets/employee.png";

const DashboardEmpleado: React.FC = () => {
  // Simulación de datos
  const planillas = [
    {
      mes: "Enero",
      anio: 2023,
      sueldoBase: 1200.0,
      salarioLiquido: 1150.0,
      boletaPagoLink: "/boleta-pago/enero-2023",
    },
    {
      mes: "Febrero",
      anio: 2023,
      sueldoBase: 1200.0,
      salarioLiquido: 1120.0,
      boletaPagoLink: "/boleta-pago/febrero-2023",
    },
    {
      mes: "Marzo",
      anio: 2023,
      sueldoBase: 1200.0,
      salarioLiquido: 1180.0,
      boletaPagoLink: "/boleta-pago/marzo-2023",
    },
  ];

  return (
    <div className="d-flex flex-column" style={{ backgroundColor: "#FFFFFF" }}>
      {/* Navbar del empleado */}
      <NavbarEmpleado userName="Juanito Kevin" userRole="Empleado/a" />

      {/* Contenido principal */}
      <div className="container-fluid mt-4">
        {/* Card de bienvenida */}
        <div className="row">
          <div className="col-md-12">
            <div
              className="card"
              style={{
                backgroundColor: "#2f3e55",
                borderRadius: "15px",
                color: "white",
                padding: "20px",
              }}
            >
              <div className="row g-0 d-flex align-items-center">
                <div className="col-md-8">
                  <div className="card-body">
                    <h1 className="card-title">Hola, Juanito Kevin Cortez Padilla</h1>
                    <p className="card-text">
                      Ahora es un gran día para verificar tu sueldo :)
                    </p>
                    <a
                      href="/empleado/perfil"
                      className="btn"
                      style={{
                        backgroundColor: "#C1D9D4",
                        color: "#2f3e55",
                        borderRadius: "5px",
                        padding: "10px 20px",
                        fontWeight: "bold",
                      }}
                    >
                      Ver Perfil
                    </a>
                  </div>
                </div>
                <div className="col-md-4 d-flex align-items-center justify-content-center">
                  <img
                    src={employeeImage}
                    alt="Empleado"
                    className="img-fluid"
                    style={{ width: "80%", height: "auto" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabla de sueldos */}
        <div className="row mt-4">
          <div className="col-md-12">
            <table
              className="table table-hover text-center"
              style={{
                borderCollapse: "collapse",
                width: "100%",
                marginTop: "20px",
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
                    Salario Líquido
                  </th>
                  <th style={{ padding: "10px", borderBottom: "2px solid #ddd" }}>
                    Boleta de Pago
                  </th>
                </tr>
              </thead>
              <tbody>
                {planillas.map((planilla, index) => (
                  <tr key={index}>
                    <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
                      {planilla.mes}
                    </td>
                    <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
                      {planilla.anio}
                    </td>
                    <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
                      ${planilla.sueldoBase.toFixed(2)}
                    </td>
                    <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
                      ${planilla.salarioLiquido.toFixed(2)}
                    </td>
                    <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
                      <a
                        href={planilla.boletaPagoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn"
                        style={{
                          backgroundColor: "#C1D9D4",
                          color: "#2f3e55",
                          borderRadius: "5px",
                          padding: "5px 15px",
                          fontWeight: "bold",
                        }}
                      >
                        Descargar
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardEmpleado;
