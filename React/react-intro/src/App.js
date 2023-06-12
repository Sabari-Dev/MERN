import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import About from "./About";
import Service from "./Service";
import Projects from "./Projects";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Service />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
