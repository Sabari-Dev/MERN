import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SignUp from "./Components/SignUp";
import Header from "./Components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./Components/SignIn";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/home" element={<Header />} />
          <Route path="/signIn" element={<SignIn />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
