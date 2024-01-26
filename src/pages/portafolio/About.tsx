import { Header } from "../../components/components";
import "../../styles/about_styles.css";

const About = () => {
  return (
    <div style={{ minHeight: "85vh" }}>
      <Header />
      <div className="title">
        <h1>Acerda de mi</h1>
      </div>
      <div className="content-about-me">
        <div className="image-about">
          <h1>IMAGEN</h1>
        </div>
        <div className="card-about-us">
          <div className="description_about">
            <h1>DESCRIPCION</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
