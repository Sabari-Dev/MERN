import "./App.css";
import Products from "./Components/Products";
import UseReducer from "./Components/State/UseReducer";
import UseState from "./Components/State/UseState";
import Users1 from "./Components/UserComponents/Users1";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <UseState />
      <UseReducer /> */}
      {/* <Users /> */}
      {/* <Products /> */}
      <Users1 />
      {/* <Router>
        <Routes>
          <Route path="/single" element={<SingleUser />} />
        </Routes>
      </Router> */}
    </div>
  );
}

export default App;
