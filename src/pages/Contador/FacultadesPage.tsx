import React, { useEffect } from "react";
import NavbarContador from "../../components/NavbarContador";
import "datatables.net-bs5/css/dataTables.bootstrap5.min.css";
import $ from "jquery";
import "datatables.net-bs5";

interface Facultad {
  id: number;
  nombre: string;
  descripcion: string;
}

const FacultadesPage: React.FC = () => {
  // Datos simulados
  const facultades: Facultad[] = [
    { id: 1, nombre: "Facultad 1", descripcion: "Descripción de la facultad 1" },
    { id: 2, nombre: "Facultad 2", descripcion: "Descripción de la facultad 2" },
    { id: 3, nombre: "Facultad 3", descripcion: "Descripción de la facultad 3" },
  ];

  useEffect(() => {
    // Inicializar DataTable
    const table = $("#facultadesTable").DataTable({
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
    console.log(`Editar facultad con ID: ${id}`);
    // Lógica para editar
  };

  const handleDelete = (id: number) => {
    console.log(`Eliminar facultad con ID: ${id}`);
    // Lógica para eliminar
  };

  const handleAdd = () => {
    console.log("Añadir nueva facultad");
    // Lógica para añadir una nueva facultad
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
          <h3>Facultades</h3>
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
            Añadir Facultad
          </button>
        </div>

        {/* Tabla de facultades */}
        <table
          id="facultadesTable"
          className="table table-hover "
          style={{ width: "100%" }}
        >
          <thead>
            <tr>
              <th>ID Facultad</th>
              <th>Nombre</th>
              <th>Descripción</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {facultades.map((facultad) => (
              <tr key={facultad.id}>
                <td>{facultad.id}</td>
                <td>{facultad.nombre}</td>
                <td>{facultad.descripcion}</td>
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
                    onClick={() => handleEdit(facultad.id)}
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
                    onClick={() => handleDelete(facultad.id)}
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

export default FacultadesPage;
