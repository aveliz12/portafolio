import ibarra from "../../assets/portfolio/ibarra.jpg";
import ejemplo1 from "../../assets/service_1.png";
import ejemplo2 from "../../assets/service_1.png";
export const projectsPortfolio = [
  {
    id: 1,
    name: "GAD Ibarra",
    category: "mobile",
    image: ibarra,
    caption:
      "Es una aplicación que automatiza y hace mas flexible los sevicios y trámites que ofrece la municipalidad de la ciudad de Ibarra. Los usuarios tienen la posibilidad de realizar trámites en línea, abonar impuestos y consultar información actualizada sobre eventos, actividades culturales y turísticas de la localidad. La aplicación se destaca por su diseño moderno y su interfaz intuitiva, lo que asegura una experiencia de usuario sobresaliente.  Además, se prioriza la seguridad y la privacidad de los datos mediante la implementación de estrictos protocolos de protección. Ibarra Móvil representa un paso adelante hacia una ciudad conectada y eficiente. Esta solución completa es un reflejo del compromiso del municipio de Ibarra con la calidad de vida de sus habitantes, facilitando la interacción con los servicios municipales y fomentando el turismo local.",
    client: "Municipio de Ibarra",
    services: "Aplicación móvil",
  },
  {
    id: 2,
    name: "Cota City FC",
    category: "mobile",
    image: ejemplo2,
    caption: "",
    client: "Escuela de fútbol Cota City FC",
    services: "Aplicación móvil, Backend",
  },
  {
    id: 3,
    name: "Ejemplo",
    category: "web",
    image: ejemplo1,
    caption: "",
    client: "Prueba ejemplo",
    services: "Ejmplo",
  },
];
