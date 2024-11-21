import React from "react";
import NavbarEmpleado from "../../components/NavbarEmpleado";
import { useNavigate } from "react-router-dom";

const UserProfile: React.FC = () => {
  const navigate = useNavigate();

  const handleEditClick = () => {
    navigate("/empleado/perfil/editar-perfil"); // Cambiar por la ruta de tu formulario de edición
  };

  return (
    <div style={{ backgroundColor: "white", padding: "20px", minHeight: "100vh" }}>
      {/* Navbar del empleado */}
      <NavbarEmpleado userName="Ana López" userRole="Empleado/a" />

      {/* Contenido principal */}
      <div className="container mt-5">
        <div className="row">
          {/* Tarjeta del perfil */}
          <div className="col-md-6">
            <div
              style={{
                backgroundColor: "#2f3e55",
                borderRadius: "15px",
                color: "white",
                textAlign: "center",
                padding: "20px",
                height: "100%",
                justifyContent: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  backgroundColor: "#9dbfbb",
                  width: "100px",
                  height: "100px",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "46px",
                  color: "#2f3e55",
                  marginBottom: "15px",
                }}
              >
                AL
              </div>
              <h1 style={{ fontSize: "1.8rem", marginBottom: "10px" }}>
                <b>Ana López</b>
              </h1>
              <h5>Empleado</h5>
            </div>
          </div>

          {/* Datos del empleado */}
          <div className="col-md-6">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <h5>
                <b>Datos Empleado</b>
              </h5>
              <button
                onClick={handleEditClick}
                style={{
                  backgroundColor: "#2f3e55",
                  color: "white",
                  padding: "10px 15px",
                  borderRadius: "10px",
                  border: "none",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                Editar Información
              </button>
            </div>
            <table className="table table-hover table-striped-columns mt-3">
              <tbody>
                <tr>
                  <th>Empleado</th>
                  <td>Ana López</td>
                </tr>
                <tr>
                  <th>DUI</th>
                  <td>02345678-9</td>
                </tr>
                <tr>
                  <th>Email</th>
                  <td>ana.lopez@example.com</td>
                </tr>
                <tr>
                  <th>Tipo de Contrato</th>
                  <td>Indefinido</td>
                </tr>
                <tr>
                  <th>Salario Base</th>
                  <td>$800.00</td>
                </tr>
                <tr>
                  <th>Facultad</th>
                  <td>Facultad de Ciencias Empresariales</td>
                </tr>
                <tr>
                  <th>Unidad</th>
                  <td>Dirección de Investigación y Proyección Social</td>
                </tr>
                <tr>
                  <th>Cargos</th>
                  <td>
                    <ul>
                      <li>Jefe de Recursos Humanos</li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Tabla de ingresos extra */}
        <div className="row py-5">
          <div
            style={{
              backgroundColor: "#2f3e55",
              color: "white",
              borderRadius: "12px",
              padding: "10px 15px",
              marginBottom: "15px",
            }}
          >
            <h5>
              <b>Ingresos Extra</b>
            </h5>
          </div>
          <div className="col-md-12 px-5">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>Ingreso Extra</th>
                  <th>Tipo</th>
                  <th>Cantidad</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Jefe de Recursos Humanos</td>
                  <td>Cargo</td>
                  <td>$250.00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
