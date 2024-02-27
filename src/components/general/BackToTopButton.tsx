import { useEffect, useState } from "react";
import "../../styles/back_top_button_styles.css";
import { BiSolidToTop } from "react-icons/bi";

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  //Funcion para hacer scroll hacia arriba
  const scrollTop = () => {
    const scrollToTop = () => {
      const currentPosition = window.scrollY;
      if (currentPosition > 0) {
        window.scrollTo(0, currentPosition - currentPosition / 5); // Ajusta el divisor para controlar la velocidad de desplazamiento
        setTimeout(scrollToTop, 16); // Ajusta el tiempo para controlar la frecuencia de actualización (16 ms para apuntar a 60 FPS)
      }
    };
    scrollToTop();
  };

  //Manejar el evento de scroll para mostrar o no boton
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 200) {
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
