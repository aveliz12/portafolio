import { useState } from "react";
import { Header } from "../../components/components";
import "../../styles/portfolio_styles.css";

import { projectsPortfolio } from "../../data/portafolio/portfolio";

const cards = [
  { title: "Proyecto 1", category: "mobile" },
  { title: "Proyecto 2", category: "web" },
  { title: "Proyecto 3", category: "mobile" },
  { title: "Proyecto 4", category: "web" },
  { title: "Proyecto 5", category: "web" },
  { title: "Proyecto 6", category: "web" },
];

const Portafolio = () => {
  const [filter, setFilter] = useState("all");

  const handleFilterChange = (newFilter: any) => {
    setFilter(newFilter);
  };

  //Filtrarlas tarjetas segun la categoria
  const filteredCards =
    filter === "all"
      ? projectsPortfolio
      : projectsPortfolio.filter((card) => card.category === filter);

  return (
    <div style={{ minHeight: "100vh" }}>
      <Header />
      <div className="title-portfolio">
        <h1>Portafolio</h1>
      </div>
      <div className="container-portfolio">
        <div className="filter-menu">
          <button
            className="button-portfolio-menu"
            onClick={(e) => {
              e.preventDefault();
              handleFilterChange("all");
            }}
          >
            Todos
          </button>
          <button
            className="button-portfolio-menu"
            onClick={(e) => {
              e.preventDefault();
              handleFilterChange("mobile");
            }}
          >
            Móvil
          </button>
          <button
            className="button-portfolio-menu"
            onClick={(e) => {
              e.preventDefault();
              handleFilterChange("web");
            }}
          >
            Web
          </button>
        </div>
        <div className="cards-container-portfolio">
          {filteredCards.map((card, index) => (
            <div key={index} className="card-project-portfolio">
              <h3>{card.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portafolio;
