import "../../styles/header_styles.css";
import logo from "../../assets/logo.png";
import soft2 from "../../assets/soft2.png";

import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <div className="header">
        <div className="inner-header flex">
          <div className="title-container-header">
            <p className="p-header">INGENIERO EN SOFTWARE</p>
            <h1>Alexander Véliz</h1>
            <div className="img-header-container">
              <img src={soft2} alt="" className="img-header" />
            </div>
          </div>
          <nav className="social">
            <ul className="ul-header">
              <Link
                className="a-container"
                to="https://www.facebook.com/alexander.veliz.100"
                target="_blank"
              >
                <li className="li-header">
                  <p className="icon-p">Facebook</p>
                  <i className="fab fa-facebook" aria-hidden="true"></i>
                </li>
              </Link>
              <Link
                className="a-container"
                to="https://www.instagram.com/alexpvs1205/"
                target="_blank"
              >
                <li className="li-header">
                  <p className="icon-p">Instagram</p>

                  <i className="fab fa-instagram" aria-hidden="true"></i>
                </li>
              </Link>

              <Link
                className="a-container"
                to="https://www.linkedin.com/in/alexander-v%C3%A9liz-917538227/"
                target="_blank"
              >
                <li className="li-header">
                  <p className="icon-p">Linkedin</p>

                  <i className="fab fa-linkedin" aria-hidden="true"></i>
                </li>
              </Link>
            </ul>
          </nav>
        </div>
        <div className="image-container">
          <img src={logo} alt="" />
        </div>
        <div>
          <svg
            className="waves"
            viewBox="0 24 150 28"
            preserveAspectRatio="none"
          >
            <defs>
              <path
                id="gentle-wave"
                d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
              />
            </defs>
            <g className="parallax">
              <use
                xlinkHref="#gentle-wave"
                x="48"
                y="0"
                fill="rgba(255,255,255,0.7)"
              />
              <use
                xlinkHref="#gentle-wave"
                x="48"
                y="3"
                fill="rgba(255,255,255,0.5)"
              />
              <use
                xlinkHref="#gentle-wave"
                x="48"
                y="5"
                fill="rgba(255,255,255,0.3)"
              />
              <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
            </g>
          </svg>
        </div>
      </div>
    </>
  );
};

export default Header;
