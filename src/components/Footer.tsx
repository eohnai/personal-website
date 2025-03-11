import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-4">
            <button 
              onClick={scrollToTop} 
              className="btn btn-secondary rounded-circle p-3 mb-4"
              aria-label="Scroll to top"
            >
              <FaArrowUp />
            </button>
            
            <h3 className="mb-3">Ian Hoe</h3>
            <p className="text-muted mb-4">Full Stack Developer | Data Enthusiast</p>
            
            <div className="social-links mb-4">
              <a 
                href="https://github.com/eohnai" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="mx-3 social-icon"
                aria-label="GitHub"
              >
                <FaGithub size={28} />
              </a>
              <a 
                href="https://linkedin.com/in/ianhoe" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="mx-3 social-icon"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={28} />
              </a>
              <a 
                href="mailto:ianhoe@gmail.com" 
                className="mx-3 social-icon"
                aria-label="Email"
              >
                <FaEnvelope size={28} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="row">
          <div className="col-12 text-center">
            <p className="mb-0">© {currentYear} Ian Hoe. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;