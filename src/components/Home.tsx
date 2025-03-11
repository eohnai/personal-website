const Home = () => {
    return (
      <div className="container d-flex flex-column justify-content-center align-items-center text-center home-section">
        <div className="profile-image-container mb-4">
          {/* Replace with your actual image path once you have one */}
          <img 
            src="/api/placeholder/200/200" 
            alt="Ian Hoe" 
            className="profile-image rounded-circle"
          />
        </div>
        
        <h1 className="display-3 fw-bold mb-2">Ian Hoe</h1>
        <h2 className="lead fs-3 mb-4">Computer Science Student | AI & Business Analytics</h2>
        
        <p className="bio-text mb-4 w-75">
          Year 2 Computer Science student at Singapore Management University specialising in AI and Business Analytics.
          Experienced in full-stack development and data analysis.
        </p>
        
        <div className="mt-3">
          <a href="#projects" className="btn btn-primary btn-lg me-3">
            View My Work
          </a>
          <a href="#contact" className="btn btn-outline-primary btn-lg">
            Get In Touch
          </a>
        </div>
      </div>
    );
  };
  
  export default Home;