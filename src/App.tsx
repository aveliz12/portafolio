import MyRoutes from "./router/routes";
import { NavBar, Footer, Loading } from "./components/components";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Loading>
        <NavBar />
        <MyRoutes />
        <Footer />
      </Loading>
    </BrowserRouter>
  );
}

export default App;
