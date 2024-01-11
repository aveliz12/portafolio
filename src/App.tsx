import MyRoutes from "./router/routes";
import Layout from "./components/Layout";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Layout/>
      <MyRoutes />
    </BrowserRouter>
  );
}

export default App;
