import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Register from "./components/form/Register/Register";
import SignIn from "./components/form/signIn/SignIn";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Router>
          <Routes>
            <Route path="/" element={<Register />} />
            <Route path="/signIn" element={<SignIn />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
