import Image from "./Image";
let Header = () => {
  return (
    <header>
      <section id="head">
        <h3>Portfolio</h3>
        <ul className="nav-bar">
          <li className="nav-items">
            <a href="#head" className="nav-link">
              Home
            </a>
          </li>
          <li className="nav-items">
            <a href="#about" className="nav-link">
              About
            </a>
          </li>
          <li className="nav-items">
            <a href="#skills" className="nav-link">
              Skills
            </a>
          </li>
          <li className="nav-items">
            <a href="#Projects" className="nav-link">
              Projects
            </a>
          </li>
          <li className="nav-items">
            <a href="#Contact" className="nav-link">
              Contact
            </a>
          </li>
        </ul>
      </section>
      <div id="banner">
        <div className="content">
          <h3 className="name">SABARINATHAN.A</h3>
          <p className="design">
            Full Stack <span className="green">M</span>
            <span className="gray">E</span>
            <span className="blue">R</span>
            <span className="Lgreen">N</span> developer
          </p>
        </div>
        <div className="image">
          <Image />
        </div>
      </div>
    </header>
  );
};

export default Header;
