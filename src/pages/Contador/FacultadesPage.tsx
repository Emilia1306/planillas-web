import React, { useState } from "react";
import NavbarContador from "../../components/NavbarContador";
import AgregarFacultad from "../../components/ModalFacultad";

interface Facultad {
  id: number;
  nombre: string;
  descripcion: string;
}

const FacultadesPage: React.FC = () => {
  const [facultades, setFacultades] = useState<Facultad[]>([
    { id: 1, nombre: "Facultad 1", descripcion: "Descripción de la facultad 1" },
    { id: 2, nombre: "Facultad 2", descripcion: "Descripción de la facultad 2" },
    { id: 3, nombre: "Facultad 3", descripcion: "Descripción de la facultad 3" },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editingFacultad, setEditingFacultad] = useState<Facultad | null>(null);

  const handleAdd = () => {
    setIsModalOpen(true);
    setIsEditing(false);
    setEditingFacultad(null);
  };

  const handleEdit = (facultad: Facultad) => {
    setIsModalOpen(true);
    setIsEditing(true);
    setEditingFacultad(facultad);
  };

  const handleAddFacultad = (nombre: string, descripcion: string) => {
    const newFacultad = {
      id: facultades.length + 1,
      nombre,
      descripcion,
    };
    setFacultades([...facultades, newFacultad]);
    setIsModalOpen(false);
  };

  const handleEditFacultad = (nombre: string, descripcion: string) => {
    if (editingFacultad) {
      setFacultades(
        facultades.map((facultad) =>
          facultad.id === editingFacultad.id
            ? { ...facultad, nombre, descripcion }
            : facultad
        )
      );
      setIsModalOpen(false);
    }
  };

  const handleDelete = (id: number) => {
    
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
          <h3>Facultades</h3>
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
            Añadir Facultad
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
                ID Facultad
              </th>
              <th style={{ padding: "10px", borderBottom: "2px solid #ddd" }}>
                Nombre
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
            {facultades.map((facultad) => (
              <tr key={facultad.id}>
                <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
                  {facultad.id}
                </td>
                <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
                  {facultad.nombre}
                </td>
                <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
                  {facultad.descripcion}
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
                    onClick={() => handleEdit(facultad)}
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

      <AgregarFacultad
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={isEditing ? handleEditFacultad : handleAddFacultad}
        title={isEditing ? "Editar Facultad" : "Agregar Facultad"}
        initialValues={
          isEditing && editingFacultad
            ? {
                nombre: editingFacultad.nombre,
                descripcion: editingFacultad.descripcion,
              }
            : undefined
        }
        buttonLabel={isEditing ? "Actualizar" : "Guardar"}
      />
    </div>
  );
};

export default FacultadesPage;
