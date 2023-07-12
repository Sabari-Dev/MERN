import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SignUp from "./Components/SignUp";
import Header from "./Components/Header";
import Home from "./Components/Home";

function App() {
  return (
    <div className="App">
      {/* <SignUp /> */}
      <Header />
      <Home />
    </div>
  );
}

export default App;
