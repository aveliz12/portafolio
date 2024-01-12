import MyRoutes from "./router/routes";
import { Layout, Footer } from "./components/components";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Layout />
      <MyRoutes />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
