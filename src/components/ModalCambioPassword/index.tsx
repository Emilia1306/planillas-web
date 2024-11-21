import React from "react";

interface CambioContrasenaModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (currentPassword: string, newPassword: string, confirmPassword: string) => void;
}

const CambioContrasenaModal: React.FC<CambioContrasenaModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
}) => {
  const [currentPassword, setCurrentPassword] = React.useState("");
  const [newPassword, setNewPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");

  const handleSubmit = () => {
    onSubmit(currentPassword, newPassword, confirmPassword);
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
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
        <h4 style={{ marginBottom: "20px", textAlign: "center" }}>Cambio de Contraseña</h4>
        <div style={{ marginBottom: "15px" }}>
          <label
            style={{
              display: "block",
              marginBottom: "5px",
              fontWeight: "bold",
              color: "#2f3e55",
            }}
          >
            Contraseña Actual
          </label>
          <input
            type="password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
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
            Nueva Contraseña
          </label>
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
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
            Confirmar Nueva Contraseña
          </label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
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
            Guardar
          </button>
        </div>
      </div>
    </div>
  );
};

export default CambioContrasenaModal;
