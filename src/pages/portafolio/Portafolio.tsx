import { useState } from "react";
import {
  BackToTopButton,
  Header,
  InformationPortfolio,
} from "../../components/components";
import "../../styles/portfolio_styles.css";
import { projectsPortfolio } from "../../data/portafolio/portfolio";

const Portafolio = () => {
  const [filter, setFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState({});

  const handleFilterChange = (newFilter: any) => {
    setFilter(newFilter);
    setSelectedProject({});
  };

  //Filtrarlas tarjetas segun la categoria
  const filteredCards =
    filter === "all"
      ? projectsPortfolio
      : projectsPortfolio.filter((card) => card.category === filter);

  const handleModal = (index: number) => {
    const project = projectsPortfolio.find((data) => data.id === index);
    if (project) {
      setSelectedProject(project);
    }
  };
  return (
    <div style={{ minHeight: "100vh" }}>
      <Header />
      <div className="title-portfolio">
        <h1>Portafolio</h1>
      </div>
      <div className="container-portfolio">
        <div className="filter-menu">
          <button
            className={
              filter === "all"
                ? "button-portfolio-menu active-portfolio"
                : "button-portfolio-menu"
            }
            onClick={(e) => {
              e.preventDefault();
              handleFilterChange("all");
            }}
          >
            Todos
          </button>
          <button
            className={
              filter === "mobile"
                ? " button-portfolio-menu active-portfolio"
                : "button-portfolio-menu"
            }
            onClick={(e) => {
              e.preventDefault();
              handleFilterChange("mobile");
            }}
          >
            Móvil
          </button>
          <button
            className={
              filter === "web"
                ? "button-portfolio-menu active-portfolio"
                : "button-portfolio-menu"
            }
            onClick={(e) => {
              e.preventDefault();
              handleFilterChange("web");
            }}
          >
            Web
          </button>
        </div>
        <div className="cards-container-portfolio">
          {filteredCards.map((card) => (
            <div key={card.id} className="card-project-portfolio">
              <img className="image-card-project" src={card.image} alt="" />

              <h3 className="text-card-project">{card.name}</h3>
              <button
                onClick={() => handleModal(card.id)}
                className="button-card-project"
              >
                Ver más..
              </button>
            </div>
          ))}
        </div>
      </div>
      <InformationPortfolio></InformationPortfolio>
      <BackToTopButton />
    </div>
  );
};

export default Portafolio;
