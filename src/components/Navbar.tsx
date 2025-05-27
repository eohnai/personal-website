import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaBars } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";

const sections = ["home", "about", "skills", "projects", "experience", "certifications", "contact"];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // initialize based on URL hash or set to home
  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash && sections.includes(hash)) {
      setActive(hash);
    } else {
      setActive("home");
    }
  }, []);

  // enhanced section detection on scroll
  useEffect(() => {
    const onScroll = () => {
      // Update navbar background based on scroll position
      setIsScrolled(window.scrollY > 50);
      
      // Get all sections and find which one is in view
      const sectionsElements = sections.map(id => ({
        id,
        element: document.getElementById(id),
      })).filter(section => section.element);
      
      // If at the very top, force "home" to be active
      if (window.scrollY < 50) {
        setActive("home");
        return;
      }
      
      // Calculate which section is most in view
      const viewportHeight = window.innerHeight;
      let maxVisibleSection = { id: "home", visiblePercentage: 0 };
      
      sectionsElements.forEach(({ id, element }) => {
        if (!element) return;
        
        const rect = element.getBoundingClientRect();
        const visibleHeight = Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0);
        const visiblePercentage = Math.max(0, visibleHeight / element.offsetHeight);
        
        if (visiblePercentage > maxVisibleSection.visiblePercentage) {
          maxVisibleSection = { id, visiblePercentage };
        }
      });
      
      // Only update if we have a section with some visibility
      if (maxVisibleSection.visiblePercentage > 0.15) {
        setActive(maxVisibleSection.id);
      }
    };

    window.addEventListener("scroll", onScroll);
    
    // Initial call to set the correct section
    onScroll();
    
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  
  // Close mobile menu when clicking a link
  const handleNavClick = (sectionId: string) => {
    setActive(sectionId);
    setIsMobileMenuOpen(false);
    // Force the navbar collapse to close on mobile
    const navbarToggler = document.querySelector('.navbar-toggler') as HTMLElement;
    const navbarCollapse = document.querySelector('.navbar-collapse');
    if (navbarCollapse && navbarCollapse.classList.contains('show')) {
      navbarToggler?.click();
    }
  };

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top ${
        isScrolled ? "navbar-scrolled shadow-sm" : "navbar-transparent"
      }`}
    >
      <div className="container">
        <a className="navbar-brand fw-bold" href="#home" onClick={() => handleNavClick("home")}>
          <span className="brand-text">Ian Hoe</span>
        </a>

        {/* mobile toggle */}
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded={isMobileMenuOpen}
          aria-label="Toggle navigation"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <FaBars size={22} />
        </button>

        <div className={`collapse navbar-collapse ${isMobileMenuOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-lg-center">
            {sections.map((s) => (
              <li key={s} className="nav-item">
                <a
                  className={`nav-link ${active === s ? "active" : ""}`}
                  href={`#${s}`}
                  onClick={() => handleNavClick(s)}
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