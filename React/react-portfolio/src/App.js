import "./App.css";
import About from "./Components/About";
import Header from "./Components/Header";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
