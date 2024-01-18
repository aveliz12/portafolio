import { useEffect, useState } from "react";
import "../../styles/layout_styles.css";
import { useNavigate, useLocation, Link } from "react-router-dom";
import logo from "../../assets/logo.png";
const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeRoute, setActiveRoute] = useState<string | null>(null);

  useEffect(() => {
    setActiveRoute(location.pathname);
  }, [location.pathname]);

  const handleMenuClick = (route: string) => {
    navigate(route);
    setActiveRoute(route);
  };

  return (
    <>
      <section className="section">
        <nav className="nav-bar">
          <Link className="logo" to="/">
            <img src={logo} alt="" />
          </Link>
          <ul className="menu">
            <li
              className={`menu-item ${activeRoute === "/" && "active"}`}
              onClick={() => handleMenuClick("/")}
            >
              Inicio
            </li>
            <li
              className={`menu-item ${activeRoute === "/about" && "active"}`}
              onClick={() => handleMenuClick("/about")}
            >
              Acerca de
            </li>
            <li
              className={`menu-item ${
                activeRoute === "/portafolio" && "active"
              }`}
              onClick={() => handleMenuClick("/portafolio")}
            >
              Portafolio
            </li>
            <li
              className={`menu-item ${activeRoute === "/contact" && "active"}`}
              onClick={() => handleMenuClick("/contact")}
            >
              Contacto
            </li>
          </ul>
        </nav>
      </section>
    </>
  );
};

export default Navigation;
