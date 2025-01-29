
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Tetris from "../assets/images/Tetris.jpeg";
import CrazyEights from "../assets/images/CrazyEights.jpeg";
import FPL from "../assets/images/FPL.jpeg"

const projects = [
  {
    title: "FPL Analysis",
    tech: "Python, Pandas, Numpy",
    image: FPL,
    link: "https://github.com/eohnai/fpl-analysis",
    description: [
      "Analysing FPL data to determine the best players to get for each squad.",
      "Future work: Incorporating AI elements to predict the best players for each team."
    ]
  },
  {
    title: "Tetra League",
    tech: "Spring Boot, React, MongoDB",
    image: Tetris,
    link: "https://github.com/eohnai/CS203-Project",
    description: [
      "Developed a tournament management system for Tetris, handling player registration, match scheduling, and live leaderboard tracking.",
      "Implemented an Elo-based ranking system to match players of similar skill levels for fair gameplay."
    ],
  },
  {
    title: "Crazy Eights",
    tech: "Java Swing",
    image: CrazyEights,
    link: "https://github.com/eohnai/FinalProjectCrazyEight",
    description: [
      "Developed a Java Swing version of the classic Crazy Eights card game.",
      "Designed an interactive graphical user interface (GUI)."
    ],
  },
];

const Projects = () => {
  return (
    <div className="container text-center position-relative">
      {/* Title */}
      <h2 className="mb-4 display-4 fw-bold projects-title">Projects</h2>

      {/* Carousel Wrapper */}
      <div id="projectsCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {/* Display 2 projects per slide */}
          {projects.reduce((rows, project, index) => {
            if (index % 2 === 0) {
              rows.push([project, projects[index + 1]]);
            }
            return rows;
          }, []).map((pair, slideIndex) => (
            <div className={`carousel-item ${slideIndex === 0 ? "active" : ""}`} key={slideIndex}>
              <div className="row justify-content-center">
                {pair.map((project, index) => project && (
                  <div className="col-md-6 d-flex justify-content-center card-container">
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="no-link-style">
                      <div className="card shadow-sm p-3">
                        {/* Image */}
                        <img 
                          src={project.image} 
                          className="img-fluid"
                          style={{ width: "100%", height: "200px", objectFit: "cover", borderRadius: "10px" }} 
                          alt={project.title} 
                        />
                        {/* Card Body */}
                        <div className="card-body text-start">
                          <h5 className="card-title fw-bold">{project.title}</h5>
                          <h6 className="card-subtitle mb-2 text-muted">{project.tech}</h6>
                          <ul className="list-unstyled">
                            {project.description.map((desc, j) => (
                              <li key={j}>{desc}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Fixed Arrow Controls */}
        <button className="carousel-control-prev fixed-carousel-button" type="button" data-bs-target="#projectsCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next fixed-carousel-button" type="button" data-bs-target="#projectsCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Projects;
