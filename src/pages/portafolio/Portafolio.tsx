import { useEffect, useState } from "react";
import { BackToTopButton, Header, Modal } from "../../components/components";
import "../../styles/portfolio_styles.css";
import { projectsPortfolio } from "../../data/portafolio/portfolio";
interface Project {
  id: number;
  name: string;
  category: string;
  image: string;
  caption: string;
  client: string;
  services: string;
}
const Portafolio = () => {
  const [filter, setFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  //MODAL
  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedProject(null);
  };

  //Cabiar en el menu de tipo de proyecto
  const handleFilterChange = (newFilter: any) => {
    setFilter(newFilter);
    setSelectedProject(null);
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
      openModal();
    }
  };

  useEffect(() => {
    console.log(null);
  }, [selectedProject]);

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
                onClick={() => {
                  handleModal(card.id);
                }}
                className="button-card-project"
              >
                Ver más..
              </button>
            </div>
          ))}
        </div>
      </div>
      {selectedProject ? (
        <Modal
          isOpen={modalOpen}
          onClose={closeModal}
          title={selectedProject.name}
        >
          <div className="image-modal">
            <img
              className="image-content-modal"
              src={selectedProject.image}
              alt=""
            />
          </div>
          <p className="text-modal">
            {selectedProject.caption == ""
              ? "NO HAY CONTENIDO..."
              : selectedProject.caption}
          </p>
          <div className="info-modal">
            <div className="client-modal">
              <h6 style={{ color: "#314c53" }}>CLIENTE</h6>
              <p style={{ color: "#5a7f78" }}>{selectedProject.client}</p>
            </div>
            <div className="service-modal">
              <h6 style={{ color: "#314c53" }}>SERVICIOS</h6>
              <p style={{ color: "#5a7f78" }}>{selectedProject.services}</p>
            </div>
          </div>
        </Modal>
      ) : (
        ""
      )}

      <BackToTopButton />
    </div>
  );
};

export default Portafolio;
