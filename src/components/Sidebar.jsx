import { Link, useLocation } from "react-router-dom";
import logo from "../assets/climo.webp";

const Sidebar = ({ isOpen, onClose }) => {
  const { pathname } = useLocation();

  const menuItems = [
    { name: "Presentación", path: "/presentacion" },
    { name: "Perfiles", path: "/perfiles" },
    { name: "Json", path: "/json" },
    { name: "API", path: "/api" },
    { name: "Bitácora", path: "/bitacora" },
  ];

  return (
    <>
      <div className={`overlay ${isOpen ? "show" : ""}`} onClick={onClose}></div>

      <aside className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <img src={logo} alt="Logo" className="logo" />
          <button className="close-btn" onClick={onClose}>×</button>
        </div>
        <nav>
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`sidebar-link ${pathname === item.path ? "active" : ""}`}
              onClick={onClose} // para cerrar al hacer clic en mobile
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
