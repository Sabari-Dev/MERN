import logo from "./logo.svg";
import "./App.css";
import Users from "./Components/UsersComponents/Users";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SingleUser from "./Components/UsersComponents/SingleUser";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Users />} />
          <Route path="/users/:userID" element={<SingleUser />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
