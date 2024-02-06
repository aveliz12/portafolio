import {
  BackToTopButton,
  Header,
  LineHorizontal,
  ProgressBar,
} from "../../components/components";
import "../../styles/about_styles.css";
import yo2 from "../../assets/yo2.jpg";
import { habilities, services } from "../../data/about/about_us";
const About = () => {
  return (
    <div style={{ minHeight: "85vh" }}>
      <Header />
      <div className="title">
        <h1>Acerca de mi</h1>
      </div>
      <div className="content-about-me">
        <div className="image-about">
          <img src={yo2} alt="" />
        </div>
        <div className="card-about-us">
          <div className="description_about">
            <h1>¡Hola!</h1>
            <p style={{ color: "#314c53" }}>
              Soy Ingeniero en Software. Apasionado por la innovación y la
              implementación de soluciones creativas. Especializado en el
              desarrollo de aplicaciones web con enfoque en la experiencia de
              usuario.
            </p>
          </div>
        </div>
      </div>
      <div className="info-about-me">
        <LineHorizontal text="Mis Servicios" />
        <div className="container-services">
          {services.map((item) => (
            <div className="services">
              <img src={item.image} alt="image" style={{ width: "35%" }} />
              <h4>{item.name}</h4>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
        <LineHorizontal text="Mis Habilidades" />
        <div className="skills">
          {habilities.map((data) => (
            <div className="content-skills" key={data.id}>
              <ProgressBar percentage={data.percentage}></ProgressBar>
              <label>{data.name}</label>
            </div>
          ))}
        </div>
        <LineHorizontal text="Proyectos completados" />
      </div>
      <BackToTopButton />
    </div>
  );
};

export default About;
