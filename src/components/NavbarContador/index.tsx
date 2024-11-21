import React from "react";
import logoContador from "../../assets/logoContador.png";
import contadorAvatar from "../../assets/contador_av.png";

interface NavbarContadorProps {
  userName: string; // Nombre del usuario
  userRole: string; // Rol del usuario
}

const NavbarContador: React.FC<NavbarContadorProps> = ({ userName, userRole }) => {
  const handleLogout = () => {
    // Lógica para cerrar sesión
    console.log("Cerrando sesión...");
  };

  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid mx-2">
        {/* Logo */}
        <a className="navbar-brand" href="/contador/dashboard">
          <img src={logoContador} alt="Logo" width="80" height="auto" />
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
              <div className="user-details text-black">
                <span>{userName}</span>
                <br/>
                <small>{userRole}</small> 
              </div>
              <img
                src={contadorAvatar}
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

export default NavbarContador;
