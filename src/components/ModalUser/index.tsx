import React, { useState, useEffect } from "react";

interface User {
  id?: number;
  nombres: string;
  apellidos: string;
  email: string;
}

interface UserModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (data: User) => void;
  user: User | null;
}

const UserModal: React.FC<UserModalProps> = ({ isOpen, onClose, onSave, user }) => {
  const [formData, setFormData] = useState<User>({
    nombres: "",
    apellidos: "",
    email: "",
  });

  useEffect(() => {
    if (user) {
      setFormData(user);
    } else {
      setFormData({ nombres: "", apellidos: "", email: "" });
    }
  }, [user]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
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
        <h4 style={{ marginBottom: "20px", textAlign: "center", color: "#2f3e55" }}>
          {user ? "Editar Usuario" : "Añadir Usuario"}
        </h4>
        <form onSubmit={handleSubmit}>
          {/* Campo de Nombres */}
          <div style={{ marginBottom: "15px" }}>
            <label
              style={{
                display: "block",
                marginBottom: "5px",
                fontWeight: "bold",
                color: "#2f3e55",
              }}
            >
              Nombres
            </label>
            <input
              type="text"
              name="nombres"
              value={formData.nombres}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #ccc",
                backgroundColor: "#f8f9fa",
                color: "#495057",
              }}
              required
            />
          </div>

          {/* Campo de Apellidos */}
          <div style={{ marginBottom: "15px" }}>
            <label
              style={{
                display: "block",
                marginBottom: "5px",
                fontWeight: "bold",
                color: "#2f3e55",
              }}
            >
              Apellidos
            </label>
            <input
              type="text"
              name="apellidos"
              value={formData.apellidos}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #ccc",
                backgroundColor: "#f8f9fa",
                color: "#495057",
              }}
              required
            />
          </div>

          {/* Campo de Email */}
          <div style={{ marginBottom: "15px" }}>
            <label
              style={{
                display: "block",
                marginBottom: "5px",
                fontWeight: "bold",
                color: "#2f3e55",
              }}
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #ccc",
                backgroundColor: "#f8f9fa",
                color: "#495057",
              }}
              required
            />
          </div>

          {/* Botones */}
          <div style={{ textAlign: "right" }}>
            <button
              type="button"
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
              type="submit"
              style={{
                backgroundColor: "#56735A",
                color: "white",
                borderRadius: "10px",
                padding: "10px 15px",
                border: "none",
                fontWeight: "bold",
              }}
            >
              {user ? "Actualizar" : "Guardar"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserModal;
