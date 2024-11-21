import React, { useEffect } from "react";
import NavbarContador from "../../components/NavbarContador";
import "datatables.net-bs5/css/dataTables.bootstrap5.min.css";
import $ from "jquery";
import "datatables.net-bs5";

interface Unidad {
  id: number;
  nombre: string;
  descripcion: string;
}

const UnidadesPage: React.FC = () => {
  // Datos simulados
  const unidades: Unidad[] = [
    { id: 1, nombre: "Unidad 1", descripcion: "Descripción de la unidad 1" },
    { id: 2, nombre: "Unidad 2", descripcion: "Descripción de la unidad 2" },
    { id: 3, nombre: "Unidad 3", descripcion: "Descripción de la unidad 3" },
  ];

  useEffect(() => {
    // Inicializar DataTable
    const table = $("#unidadesTable").DataTable({
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

  const handleEdit = (id: number) => {
    console.log(`Editar unidad con ID: ${id}`);
    // Lógica para editar
  };

  const handleDelete = (id: number) => {
    console.log(`Eliminar unidad con ID: ${id}`);
    // Lógica para eliminar
  };

  const handleAdd = () => {
    console.log("Añadir nueva unidad");
    // Lógica para añadir una nueva unidad
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        width: "100vw",
        margin: 0,
        padding: 0,
        backgroundColor: "#FFFFFF",
      }}
    >
      {/* Navbar */}
      <NavbarContador userName="María Gonzáles" userRole="Contador/a" />

      {/* Contenido principal */}
      <div
        style={{
          flex: 1,
          padding: "20px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Main Card */}
        <div
          className="card"
          style={{
            backgroundColor: "#56735A",
            borderRadius: "10px",
            color: "white",
            padding: "15px 20px",
            border: "none",
            marginBottom: "20px",
          }}
        >
          <h3>Unidades</h3>
        </div>

        {/* Botón de Añadir */}
        <div style={{ textAlign: "right", marginBottom: "15px" }}>
          <button
            className="btn"
            style={{
              backgroundColor: "#c1d9d4",
              color: "#2f3e55",
              borderRadius: "10px",
              padding: "10px 20px",
              border: "none",
            }}
            onClick={handleAdd}
          >
            Añadir Unidad
          </button>
        </div>

        {/* Tabla de unidades */}
        <table
          id="unidadesTable"
          className="table table-hover table-striped"
          style={{ width: "100%" }}
        >
          <thead>
            <tr>
              <th>ID Unidad</th>
              <th>Nombres</th>
              <th>Descripción</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {unidades.map((unidad) => (
              <tr key={unidad.id}>
                <td>{unidad.id}</td>
                <td>{unidad.nombre}</td>
                <td>{unidad.descripcion}</td>
                <td>
                  <button
                    className="btn"
                    style={{
                      backgroundColor: "#c1d9d4",
                      color: "#2f3e55",
                      borderRadius: "10px",
                      padding: "5px 15px",
                      marginRight: "10px",
                      border: "none",
                    }}
                    onClick={() => handleEdit(unidad.id)}
                  >
                    Editar
                  </button>
                  <button
                    className="btn"
                    style={{
                      backgroundColor: "#c1d9d4",
                      color: "#2f3e55",
                      borderRadius: "10px",
                      padding: "5px 15px",
                      border: "none",
                    }}
                    onClick={() => handleDelete(unidad.id)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UnidadesPage;
