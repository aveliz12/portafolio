import MyRoutes from "./router/routes";
import { NavBar, Footer } from "./components/components";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <MyRoutes />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
