import { Link, useLocation } from "react-router-dom";
import logo from '../assets/climo.webp';

const Sidebar = () => {
  const { pathname } = useLocation()

  const menuItems = [
    { name: "pagina1", path: "/pag1" },
    { name: "pagina2", path: "/pag2" },
    { name: "pagina", path: "/pag3" },
    // Agregá más según tu app
  ]

  return (
    <div className="sidebar">
      <img src=""></img>
      <img src={logo} alt="Logo" className="logo" />

      <nav >
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className=""
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </div>
  )
}

export default Sidebar
