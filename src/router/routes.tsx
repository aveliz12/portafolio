import { Routes, Route } from "react-router-dom";
import { Home, About, Portafolio, Contact } from "../pages/pages";

const MyRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portafolio" element={<Portafolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default MyRoutes;
