import proj1 from "../images/calc.png";
import proj2 from "../images/birthday.jpg";
const Projects = () => {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="project">
        <a href="https://calculator-groot.netlify.app/" target="_blank">
          <img src={proj1} alt="calc" />
          <h3 className="proj-title">Calculator</h3>
        </a>
      </div>
      <div className="project">
        <a href="https://calculator-groot.netlify.app/" target="_blank">
          <img src={proj2} alt="calc" />
          <h3 className="proj-title">Calculator</h3>
        </a>
      </div>
    </section>
  );
};

export default Projects;
