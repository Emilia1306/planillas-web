import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Importa Bootstrap
import loginIcon from "../../assets/login.png"; // Asegúrate de ajustar la ruta si es necesario

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Login con:", { email, password });
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "#e5e5e5",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: 0,
      }}
    >
      <div
        className="text-center"
        style={{
          backgroundColor: "#ffffff",
          width: "600px",
          padding: "60px",
          borderRadius: "8px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <img
          src={loginIcon}
          alt="Login Icon"
          style={{ width: "100px", marginBottom: "30px" }}
        />
        <form onSubmit={handleSubmit}>
          <div className="mb-3 text-start">
            <label htmlFor="email" className="form-label">
              Correo Electrónico
            </label>
            <input
              type="email"
              className="form-control py-2"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{ borderRadius: "10px" }}
            />
          </div>
          <div className="mb-3 text-start">
            <label htmlFor="password" className="form-label">
              Contraseña
            </label>
            <input
              type="password"
              className="form-control py-2"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{ borderRadius: "10px" }}
            />
          </div>
          <button
            type="submit"
            className="btn btn-login mt-3"
            style={{
              backgroundColor: "#56735a",
              border: "none",
              borderRadius: "10px",
              padding: "10px 20px",
              width: "100%",
              color: "white",
              fontWeight: "bold",
            }}
          >
            Iniciar Sesión
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
