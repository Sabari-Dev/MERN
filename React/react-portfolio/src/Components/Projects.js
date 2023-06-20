import proj1 from "../images/calc.png";
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
          <img src={proj1} alt="calc" />
          <h3 className="proj-title">Calculator</h3>
        </a>
      </div>
    </section>
  );
};

export default Projects;
