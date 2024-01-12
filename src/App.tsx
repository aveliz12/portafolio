import MyRoutes from "./router/routes";
import Layout from "./components/Layout";
import Footer from "./components/Footer";
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
