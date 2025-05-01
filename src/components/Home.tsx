import { useEffect, useState, useRef } from "react";
import { TypeAnimation } from 'react-type-animation';

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const typeAnimationContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsLoaded(true);
    
    if (typeAnimationContainer.current) {
      const height = typeAnimationContainer.current.offsetHeight;
      typeAnimationContainer.current.style.minHeight = `${height}px`;
    }
    
    const animationTimeout = setTimeout(() => {
      const elements = document.querySelectorAll('.animate-in');
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      }, { threshold: 0.1 });
      
      elements.forEach(el => {
        observer.observe(el);
      });
    }, 100);

    return () => {
      clearTimeout(animationTimeout);
    };
  }, []);

  return (
    <div className="container position-relative z-1 d-flex flex-column justify-content-center align-items-center text-center home-section">
      <div className="position-absolute top-0 start-0 mt-5 ms-5 d-none d-lg-block animated-shape shape-1" style={{ opacity: isLoaded ? 0.1 : 0 }}></div>
      <div className="position-absolute bottom-0 end-0 mb-5 me-5 d-none d-lg-block animated-shape shape-2" style={{ opacity: isLoaded ? 0.1 : 0 }}></div>
      <div className="position-absolute top-50 end-25 d-none d-lg-block animated-shape shape-3" style={{ opacity: isLoaded ? 0.1 : 0 }}></div>
      
      <h1 className="display-3 fw-bold mb-2 animate-in">
        <span className="gradient-text">Ian Hoe</span>
      </h1>
      
      <div ref={typeAnimationContainer} className="mb-4 animate-in delay-1" style={{ minHeight: '40px' }}>
        <TypeAnimation
          sequence={[
            'Computer Science Student',
            1000,
            'AI Enthusiast',
            1000,
            'Business Analytics Specialist',
            1000,
          ]}
          wrapper="h2"
          speed={50}
          style={{ 
            fontSize: '1.75rem',
            display: 'inline-block',
          }}
          repeat={Infinity}
        />
      </div>
      
      <p className="bio-text mb-4 animate-in delay-2">
        Year 2 Computer Science student at Singapore Management University with a passion for 
        solving complex problems through technology. Specialising in Artificial Intelligence and Business Analytics, 
        I'm always exploring new ways to leverage data for meaningful insights.
      </p>
    
      <div className="mt-3 animate-in delay-3 d-flex flex-wrap justify-content-center">
        <a href="#projects" className="btn btn-primary btn-lg m-2 slide-up-btn">
          View My Work
        </a>
        <a href="#contact" className="btn btn-outline-light btn-lg m-2 border-btn">
          Get In Touch
        </a>
      </div>
      
      <div className="scroll-indicator d-none d-md-block">
        <div className="chevron"></div>
        <div className="chevron"></div>
        <div className="chevron"></div>
      </div>
    </div>
  );
};

export default Home;