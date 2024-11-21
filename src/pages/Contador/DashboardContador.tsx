import React from "react";
import Card from "../../components/CardFacultades";
import NavbarContador from "../../components/NavbarContador";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import accountantImage from "../../assets/accountant.png";

const DashboardContador: React.FC = () => {
  // Simulación de datos
  const unidades = [
    { id: 1, nombre: "Biblioteca", link: "/contador/unidad/" },
    { id: 2, nombre: "Departamento de Idiomas", link: "/contador/unidad/" },
    { id: 3, nombre: "Servicios Estudiantiles", link: "/contador/unidad/" },
    { id: 4, nombre: "Clínica Universitaria", link: "/contador/unidad/" },
  ];

  const facultades = [
    { id: 1, nombre: "Facultad de Ingeniería", link: "/contador/unidad/" },
    { id: 2, nombre: "Facultad de Ciencias Económicas", link: "/contador/unidad" },
    { id: 3, nombre: "Facultad de Medicina", link: "/contador/unidad/" },
    { id: 4, nombre: "Facultad de Derecho", link: "/contador/unidad/" },
  ];

  return (
    <div className="d-flex flex-column">
      {/* Navbar del contador */}
      <NavbarContador userName="María Gonzáles" userRole="Contador/a" />

      {/* Contenido principal */}
      <div className="container-fluid flex-grow-1 mt-4">
        {/* Card de bienvenida */}
        <div className="row mx-2">
          <div className="col-md-12">
            <div
              className="card"
              style={{
                backgroundColor: "#56735A",
                border: "none",
                color: "white",
              }}
            >
              <div className="row g-0 d-flex align-items-center">
                <div className="col-md-8">
                  <div className="card-body py-4">
                    <h1 className="card-title">Hola, María</h1>
                    <p className="card-text">
                      Ahora es un buen día para gestionar los sueldos de nuestros empleados :)
                    </p>
                  </div>
                </div>
                <div className="col-md-4 d-flex align-items-center justify-content-center py-2 px-2">
                  <img
                    src={accountantImage}
                    alt="Contadora"
                    className="img-fluid"
                    style={{
                      width: "80%",
                      height: "auto",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="row my-5 mx-2">
          <div className="col-md-12">
            <ul className="nav nav-tabs" id="tabs" style={{ borderBottom: "1px solid #ccc" }}>
              <li className="nav-item">
                <button
                  className="nav-link active"
                  id="unidades-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#unidades"
                  type="button"
                  role="tab"
                  aria-controls="unidades"
                  aria-selected="true"
                  style={{
                    border: "none",
                    color: "#495057",
                    fontWeight: "bold",
                    backgroundColor: "transparent",
                  }}
                >
                  Unidades
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link"
                  id="facultades-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#facultades"
                  type="button"
                  role="tab"
                  aria-controls="facultades"
                  aria-selected="false"
                  style={{
                    border: "none",
                    color: "#495057",
                    fontWeight: "bold",
                    backgroundColor: "transparent",
                  }}
                >
                  Facultades
                </button>
              </li>
            </ul>
            <div className="tab-content mt-3" id="myTabContent">
              {/* Unidades */}
              <div
                className="tab-pane fade show active my-5"
                id="unidades"
                role="tabpanel"
                aria-labelledby="unidades-tab"
              >
                <div className="row">
                  {unidades.map((unidad) => (
                    <Card key={unidad.id} title={unidad.nombre} link={unidad.link} />
                  ))}
                </div>
              </div>
              {/* Facultades */}
              <div
                className="tab-pane fade my-5"
                id="facultades"
                role="tabpanel"
                aria-labelledby="facultades-tab"
              >
                <div className="row">
                  {facultades.map((facultad) => (
                    <Card key={facultad.id} title={facultad.nombre} link={facultad.link} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardContador;
