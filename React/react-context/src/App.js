import "./App.css";
import ProductData, { ContextData } from "./Context/ProductData";

import Product from "./components/Product";

function App() {
  return (
    <div className="App">
      <ProductData>
        <Product />
      </ProductData>
    </div>
  );
}

export default App;
