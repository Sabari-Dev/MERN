import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <section id="head">
      <h3>Portfolio</h3>
      <ul className="nav-bar">
        <li className="nav-items">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li className="nav-items">
          <Link to="/about" className="nav-link">
            About
          </Link>
        </li>
        <li className="nav-items">
          <Link to="/skills" className="nav-link">
            Skills
          </Link>
        </li>
        <li className="nav-items">
          <Link to="/projects" className="nav-link">
            Projects
          </Link>
        </li>
        <li className="nav-items">
          <Link to="/contact" className="nav-link">
            Contact
          </Link>
        </li>
      </ul>
    </section>
  );
};
export default Nav;
