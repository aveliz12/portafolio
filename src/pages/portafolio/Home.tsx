import { Link } from "react-router-dom";
import "../../styles/home_styles.css";
import github from "../../assets/github.png";
import facebook from "../../assets/facebook.png";
import linkdn from "../../assets/linkedin.png";
import instagram from "../../assets/instagram.png";
// import yo from "../../assets/yo.jpg";
import yo2 from "../../assets/FotoAV.jpg";
import img1 from "../../assets/soft2.png";
const Home = () => {
  return (
    <section className="container">
      <div className="main">
        <div className="rounding-sec">
          <div className="big-circle">
            <Link
              className="icon-block"
              to="https://www.facebook.com/alexander.veliz.100"
              target="_blank"
            >
              <img src={facebook} alt="" />
            </Link>
            <Link
              className="icon-block"
              to="https://www.instagram.com/alexpvs1205/"
              target="_blank"
            >
              <img src={instagram} alt="" />
            </Link>
            <Link
              className="icon-block"
              to="https://www.linkedin.com/in/alexander-v%C3%A9liz-917538227/"
              target="_blank"
            >
              <img src={linkdn} alt="" />
            </Link>
            <Link className="icon-block" to="/">
              <img src={github} alt="" />
            </Link>
          </div>
          <div className="images">
            <img src={yo2} alt="" />
          </div>
        </div>
        <div className="side-rigth">
          <div className="group">
            <div className="card">
              <span className="card-span">Alexander Véliz</span>
              <p className="card-p">- Ingeniero en Software -</p>
            </div>
          </div>
          <div className="card-2">
            <img className="img-card2" src={img1} alt="" />

            <div className="card2-info">
              <p className="text-body">
                Ingeniero en Software, siempre con un aprendizaje continuo.
                Poseo conocimientos de tecnologías de programación y
                metodologías. Apasionado por la innovación y la implementación
                de soluciones creativas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
