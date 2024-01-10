import { Link } from "react-router-dom";
import Layout from "../components/Layout";

import "../styles/home_styles.css";
import github from "../assets/github.png";
import facebook from "../assets/facebook.png";
import linkdn from "../assets/linkedin.png";
import instagram from "../assets/instagram.png";
import yo from "../assets/yo.jpg";

const Home = () => {
  return (
    <Layout>
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
              <img src={yo} alt="" />
            </div>
          </div>
          <div className="side-rigth">
            <h3>Hi, I'm</h3>
            <h1>
              <span>Olive</span> Hicks
            </h1>
            <p>
              I'm a professional Web Developer. Our Main Goal to help &
              Satisficed the Local & Global Clients by web development solutions
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
