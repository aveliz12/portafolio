import { ReactNode } from "react";
import "../styles/layout_styles.css";
import { useNavigate } from "react-router-dom";
const Navigation = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate();

  return (
    <>
      <section className="section">
        <nav className="nav-bar">
          <h1 className="logo">AV</h1>
          <ul className="menu">
            <li className="menu-item" onClick={() => navigate("/")}>
              Inicio
            </li>
            <li className="menu-item" onClick={() => navigate("/about")}>
              Acerca de
            </li>
            <li className="menu-item" onClick={() => navigate("/portafolio")}>
              Portaolio
            </li>
            <li className="menu-item" onClick={() => navigate("/contact")}>
              Contacto
            </li>
          </ul>
        </nav>
      </section>
      {children}
    </>
  );
};

export default Navigation;
