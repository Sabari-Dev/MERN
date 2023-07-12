import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Remainder from "./Components/Remainder";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 className="text-center">Remainder App </h1>
        <Remainder />
      </div>
    </div>
  );
}

export default App;
