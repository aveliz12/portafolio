import {
  BackToTopButton,
  Header,
  LineHorizontal,
  ProgressBar,
  Button,
} from "../../components/components";
import "../../styles/about_styles.css";
import yo2 from "../../assets/yo2.jpg";
import goal from "../../assets/goal.png";
import { habilities, services } from "../../data/about/about_us";
import pdfFile from "../../data/about/Hoja de vida_Alexander Véliz.pdf";
const About = () => {
  const downloadCV = async () => {
    const response = await fetch(pdfFile);
    const blob = await response.blob();
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "Hoja de vida_AV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Liberar recursos de memoria
    URL.revokeObjectURL(url);
  };

  return (
    <div style={{ minHeight: "100vh" }}>
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
            <Button text="Descargar CV" funcion={() => downloadCV()} />
          </div>
        </div>
      </div>
      <div className="info-about-me">
        <LineHorizontal text="SERVICIOS" />
        <div className="container-services-goals">
          {services.map((item) => (
            <div className="services" key={item.id}>
              <img src={item.image} alt="image" style={{ width: "35%" }} />
              <h4>{item.name}</h4>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
        <LineHorizontal text="HABILIDADES" />
        <div className="skills">
          {habilities.map((data) => (
            <div className="content-skills" key={data.id}>
              <ProgressBar percentage={data.percentage}></ProgressBar>
              <label>{data.name}</label>
            </div>
          ))}
        </div>
        <LineHorizontal text="PROYECTOS" />
        <div className="container-services-goals">
          <div className="goals">
            <img
              src={goal}
              alt="goal"
              style={{ width: "35%", marginBottom: "20px" }}
            />
            <p>2 Proyectos Completados</p>
          </div>
        </div>
      </div>
      <BackToTopButton />
    </div>
  );
};

export default About;
