import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-light fixed-top"
      role="navigation"
      aria-label="Main Navigation"
    >
      <div className="container">
        <a className="navbar-brand" href="#home">
          Ian Hoe
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto d-flex align-items-center">
            <li className="nav-item">
              <a className="nav-link" href="#projects">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#experience">
                Experience
              </a>
            </li>
            <li className="nav-item">
              <a
                href="https://github.com/eohnai"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-2"
                aria-label="Visit my GitHub profile"
              >
                <FaGithub size={24} />
              </a>
            </li>
            <li className="nav-item">
              <a
                href="https://linkedin.com/in/ianhoe"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-2"
                aria-label="Visit my LinkedIn profile"
              >
                <FaLinkedin size={24} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
