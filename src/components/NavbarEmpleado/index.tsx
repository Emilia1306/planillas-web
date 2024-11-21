import React from "react";
import logoEmpleado from "../../assets/logoEmpleado.png";
import empleadoAvatar from "../../assets/empleado_av.png";

interface NavbarEmpleadoProps {
  userName: string; 
  userRole: string; 
}

const NavbarEmpleado: React.FC<NavbarEmpleadoProps> = ({ userName, userRole }) => {
  const handleLogout = () => {
    // Lógica para cerrar sesión
    console.log("Cerrando sesión...");
  };

  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        {/* Logo */}
        <a className="navbar-brand" href="/empleado/dashboard">
          <img src={logoEmpleado} alt="Logo" width="90" height="auto" />
        </a>

        {/* Dropdown del usuario */}
        <div className="d-flex align-items-center">
          <div className="dropdown user-info">
            <a
              className="d-flex align-items-center"
              href="#"
              id="dropdownAvatar"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{ textDecoration: "none" }}
            >
              <div className="user-details">
                <span>{userName}</span>
                <br />
                <small>{userRole}</small> 
              </div>
              <img
                src={empleadoAvatar}
                alt="Avatar"
                className="rounded-circle ms-2"
                width="50"
                height="50"
              />
            </a>
            <ul
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="dropdownAvatar"
            >
              <li>
                <button
                  className="dropdown-item"
                  onClick={handleLogout}
                >
                  Cerrar sesión
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarEmpleado;
