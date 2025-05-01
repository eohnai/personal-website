import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaBars } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";

const sections = ["home", "about", "skills", "projects", "experience", "certifications", "contact"];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [active, setActive] = useState("home");

  // highlight section on scroll
  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 50);

      document.querySelectorAll<HTMLElement>("section[id]").forEach((sec) => {
        const offset = sec.offsetTop - 120;
        if (window.scrollY >= offset && window.scrollY < offset + sec.offsetHeight) {
          setActive(sec.id);
        }
      });
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top ${
        isScrolled ? "navbar-scrolled shadow-sm" : "navbar-transparent"
      }`}
    >
      <div className="container">
        <a className="navbar-brand fw-bold" href="#home">
          <span className="brand-text">Ian Hoe</span>
        </a>

        {/* mobile toggle */}
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FaBars size={22} />
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-lg-center">
            {sections.map((s) => (
              <li key={s} className="nav-item">
                <a
                  className={`nav-link ${active === s ? "active" : ""}`}
                  href={`#${s}`}
                >
                  {s.charAt(0).toUpperCase() + s.slice(1)}
                </a>
              </li>
            ))}

            {/* socials */}
            <li className="nav-item d-flex align-items-center ms-lg-3">
              <a
                href="https://github.com/eohnai"
                aria-label="GitHub"
                className="mx-2 social-icon"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="https://linkedin.com/in/ianhoe"
                aria-label="LinkedIn"
                className="mx-2 social-icon"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="mailto:ianhoe@gmail.com"
                aria-label="Email"
                className="mx-2 social-icon"
              >
                <FaEnvelope size={20} />
              </a>
            </li>

            {/* theme toggle */}
            <li className="nav-item">
              <ThemeToggle />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
