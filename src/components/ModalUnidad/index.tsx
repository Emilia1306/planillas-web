import React, { useEffect } from "react";

interface AgregarUnidadProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (nombre: string, descripcion: string) => void;
  title?: string; // Título personalizado
  initialValues?: { nombre: string; descripcion: string }; // Valores iniciales
  buttonLabel?: string; // Texto del botón
}

const AgregarUnidad: React.FC<AgregarUnidadProps> = ({
  isOpen,
  onClose,
  onSubmit,
  title = "Agregar Unidad",
  initialValues = { nombre: "", descripcion: "" },
  buttonLabel = "Guardar",
}) => {
  const [nombre, setNombre] = React.useState(initialValues.nombre);
  const [descripcion, setDescripcion] = React.useState(initialValues.descripcion);

  // Sincroniza los valores iniciales con los estados locales cuando cambien
  useEffect(() => {
    if (initialValues) {
      setNombre(initialValues.nombre);
      setDescripcion(initialValues.descripcion);
    }
  }, [initialValues]);

  const handleSubmit = () => {
    onSubmit(nombre, descripcion);
    setNombre("");
    setDescripcion("");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          borderRadius: "10px",
          padding: "20px",
          width: "400px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.3)",
        }}
      >
        <h4 style={{ marginBottom: "20px", textAlign: "center" }}>{title}</h4>
        <div style={{ marginBottom: "15px" }}>
          <label
            style={{
              display: "block",
              marginBottom: "5px",
              fontWeight: "bold",
              color: "#2f3e55",
            }}
          >
            Nombre
          </label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              backgroundColor: "#f8f9fa",
              color: "#495057",
            }}
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label
            style={{
              display: "block",
              marginBottom: "5px",
              fontWeight: "bold",
              color: "#2f3e55",
            }}
          >
            Descripción
          </label>
          <textarea
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              backgroundColor: "#f8f9fa",
              color: "#495057",
              resize: "none",
              height: "80px",
            }}
          />
        </div>
        <div style={{ textAlign: "right" }}>
          <button
            onClick={onClose}
            style={{
              backgroundColor: "#c1d9d4",
              color: "#2f3e55",
              borderRadius: "10px",
              padding: "10px 15px",
              marginRight: "10px",
              border: "none",
              fontWeight: "bold",
            }}
          >
            Cancelar
          </button>
          <button
            onClick={handleSubmit}
            style={{
              backgroundColor: "#56735A",
              color: "white",
              borderRadius: "10px",
              padding: "10px 15px",
              border: "none",
              fontWeight: "bold",
            }}
          >
            {buttonLabel}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AgregarUnidad;
