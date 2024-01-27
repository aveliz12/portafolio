import { useEffect, useState } from "react";
import "../styles/back_top_button_styles.css";
import { BiSolidToTop } from "react-icons/bi";

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  //Funcion para hacer scroll hacia arriba
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", //Animacion de desplazamiento suave
    });
  };

  //Manejar el evento de scroll para mostrar o no boton
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, [isVisible]);

  return (
    <div
      className={`top-button ${isVisible ? "visible" : ""}`}
      onClick={scrollTop}
    >
      <BiSolidToTop />
    </div>
  );
};

export default BackToTopButton;
