import React, { useState } from "react";
import NavbarContador from "../../components/NavbarContador";
import AgregarUnidad from "../../components/ModalUnidad";

interface Unidad {
  id: number;
  nombre: string;
  descripcion: string;
}

const UnidadesPage: React.FC = () => {
  const [unidades, setUnidades] = useState<Unidad[]>([
    { id: 1, nombre: "Unidad 1", descripcion: "Descripción de la unidad 1" },
    { id: 2, nombre: "Unidad 2", descripcion: "Descripción de la unidad 2" },
    { id: 3, nombre: "Unidad 3", descripcion: "Descripción de la unidad 3" },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editingUnidad, setEditingUnidad] = useState<Unidad | null>(null);

  const handleAdd = () => {
    setIsModalOpen(true);
    setIsEditing(false);
    setEditingUnidad(null);
  };

  const handleEdit = (unidad: Unidad) => {
    setIsModalOpen(true);
    setIsEditing(true);
    setEditingUnidad(unidad);
  };

  const handleAddUnidad = (nombre: string, descripcion: string) => {
    const newUnidad = {
      id: unidades.length + 1,
      nombre,
      descripcion,
    };
    setUnidades([...unidades, newUnidad]);
    setIsModalOpen(false);
  };

  const handleEditUnidad = (nombre: string, descripcion: string) => {
    if (editingUnidad) {
      setUnidades(
        unidades.map((unidad) =>
          unidad.id === editingUnidad.id
            ? { ...unidad, nombre, descripcion }
            : unidad
        )
      );
      setIsModalOpen(false);
    }
  };

  const handleDelete = (id: number) => {
    //setUnidades(unidades.filter((unidad) => unidad.id !== id));
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
      <NavbarContador userName="María Gonzáles" userRole="Contador/a" />

      <div
        style={{
          flex: 1,
          padding: "20px",
          display: "flex",
          flexDirection: "column",
        }}
      >
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

        <table
          className="table table-hover"
          style={{
            width: "100%",
            borderCollapse: "collapse",
            textAlign: "left",
          }}
        >
          <thead>
            <tr style={{ backgroundColor: "#f0f0f0" }}>
              <th style={{ padding: "10px", borderBottom: "2px solid #ddd" }}>
                ID Unidad
              </th>
              <th style={{ padding: "10px", borderBottom: "2px solid #ddd" }}>
                Nombres
              </th>
              <th style={{ padding: "10px", borderBottom: "2px solid #ddd" }}>
                Descripción
              </th>
              <th style={{ padding: "10px", borderBottom: "2px solid #ddd" }}>
                Acciones
              </th>
            </tr>
          </thead>
          <tbody>
            {unidades.map((unidad) => (
              <tr key={unidad.id}>
                <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
                  {unidad.id}
                </td>
                <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
                  {unidad.nombre}
                </td>
                <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
                  {unidad.descripcion}
                </td>
                <td
                  style={{
                    padding: "10px",
                    borderBottom: "1px solid #ddd",
                    display: "flex",
                    gap: "10px",
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
                    onClick={() => handleEdit(unidad)}
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

      <AgregarUnidad
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={isEditing ? handleEditUnidad : handleAddUnidad}
        title={isEditing ? "Editar Unidad" : "Agregar Unidad"}
        initialValues={
          isEditing && editingUnidad
            ? { nombre: editingUnidad.nombre, descripcion: editingUnidad.descripcion }
            : undefined
        }
        buttonLabel={isEditing ? "Actualizar" : "Guardar"}
      />
    </div>
  );
};

export default UnidadesPage;
