import React, { useEffect } from "react";
import NavbarEmpleado from "../../components/NavbarEmpleado";
import employeeImage from "../../assets/employee.png";
import $ from "jquery";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "datatables.net-bs5/css/dataTables.bootstrap5.min.css";
import "datatables.net-bs5";

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

  useEffect(() => {
    // Inicializar DataTable
    const table = $("#planillasTable").DataTable({
      paging: true,
      searching: true,
      info: true,
      destroy: true, // Permite reinicializar si ya existe
    });

    return () => {
      // Destruir la instancia de DataTable al desmontar el componente
      table.destroy();
    };
  }, []);

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
                    <h1 className="card-title">
                      Hola, Juanito Kevin Cortez Padilla
                    </h1>
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


        {/* Tabla de sueldos con DataTables */}
        <div className="row mt-4">
          <div className="col-md-12">
            <table
              id="planillasTable"
              className="table table-hover table-striped text-center"
            >
              <thead>
                <tr>
                  <th>Mes</th>
                  <th>Año</th>
                  <th>Sueldo Base</th>
                  <th>Salario Líquido</th>
                  <th>Boleta de Pago</th>
                </tr>
              </thead>
              <tbody>
                {planillas.map((planilla, index) => (
                  <tr key={index}>
                    <td>{planilla.mes}</td>
                    <td>{planilla.anio}</td>
                    <td>${planilla.sueldoBase.toFixed(2)}</td>
                    <td>${planilla.salarioLiquido.toFixed(2)}</td>
                    <td>
                      <a
                        href={planilla.boletaPagoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-custom"
                        style={{
                          backgroundColor: "#C1D9D4",
                          color: "#2f3e55",
                          borderRadius: "5px",
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
