import React from "react";
import NavbarEmpleado from "../../components/NavbarEmpleado";
import { useNavigate } from "react-router-dom";

const EditUserForm: React.FC = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Información actualizada");
    // Aquí iría la lógica para actualizar la información del usuario
  };

  const handleBackToProfile = () => {
    navigate("/empleado/perfil"); // Cambiar por la ruta del perfil del usuario
  };

  return (
    <div style={{ backgroundColor: "white", padding: "20px", minHeight: "100vh" }}>
      {/* Navbar del empleado */}
      <NavbarEmpleado userName="Ana López" userRole="Empleado/a" />

      <div className="container mt-5">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "20px",
          }}
        >
          <h2 style={{ color: "#2f3e55", margin: 0, fontWeight: "bold" }}>
            Editar Información del Usuario
          </h2>
          <div style={{ display: "flex", gap: "10px" }}>
            <button
              onClick={handleBackToProfile}
              className="btn"
              style={{
                backgroundColor: "#c1d9d4",
                color: "#2f3e55",
                padding: "10px 20px",
                borderRadius: "10px",
                border: "none",
                fontWeight: "bold",
              }}
            >
              Regresar al Perfil
            </button>
            <button
              type="submit"
              className="btn"
              style={{
                backgroundColor: "#2f3e55",
                color: "white",
                padding: "10px 20px",
                borderRadius: "10px",
                border: "none",
                fontWeight: "bold",
              }}
            >
              Guardar Cambios
            </button>
          </div>
        </div>
        <form onSubmit={handleSubmit} style={{ maxWidth: "800px", margin: "0 auto" }}>
          {/* Nombre */}
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Nombre Completo
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-control"
              defaultValue="Ana López"
              required
            />
          </div>

          {/* DUI */}
          <div className="mb-3">
            <label htmlFor="dui" className="form-label">
              DUI
            </label>
            <input
              type="text"
              id="dui"
              name="dui"
              className="form-control"
              defaultValue="02345678-9"
              required
            />
          </div>

          {/* Email */}
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-control"
              defaultValue="ana.lopez@example.com"
              required
            />
          </div>

          {/* Tipo de Contrato (deshabilitado) */}
          <div className="mb-3">
            <label htmlFor="contractType" className="form-label">
              Tipo de Contrato
            </label>
            <input
              type="text"
              id="contractType"
              className="form-control"
              defaultValue="Indefinido"
              disabled
            />
          </div>

          {/* Salario Base (deshabilitado) */}
          <div className="mb-3">
            <label htmlFor="salary" className="form-label">
              Salario Base
            </label>
            <input
              type="text"
              id="salary"
              className="form-control"
              defaultValue="$800.00"
              disabled
            />
          </div>

          {/* Facultad (deshabilitado) */}
          <div className="mb-3">
            <label htmlFor="faculty" className="form-label">
              Facultad
            </label>
            <input
              type="text"
              id="faculty"
              className="form-control"
              defaultValue="Facultad de Ciencias Empresariales"
              disabled
            />
          </div>

          {/* Unidad (deshabilitado) */}
          <div className="mb-3">
            <label htmlFor="unit" className="form-label">
              Unidad
            </label>
            <input
              type="text"
              id="unit"
              className="form-control"
              defaultValue="Dirección de Investigación y Proyección Social"
              disabled
            />
          </div>

          {/* Cargos (deshabilitado) */}
          <div className="mb-3">
            <label htmlFor="roles" className="form-label">
              Cargos
            </label>
            <textarea
              id="roles"
              className="form-control"
              defaultValue="Jefe de Recursos Humanos"
              disabled
              rows={2}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditUserForm;
