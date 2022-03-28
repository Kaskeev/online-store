import { Route } from "react-router-dom";
import Routing from "./Routing";
import "antd/dist/antd.css";
import ProductsContextProvider from "./contexts/productsContext";
import "./App.css";

function App() {
  return (
    <ProductsContextProvider>
      <Routing />
    </ProductsContextProvider>
  );
}

export default App;
