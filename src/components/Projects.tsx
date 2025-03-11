import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Tetris from "../assets/images/Tetris.jpeg";
import CrazyEights from "../assets/images/CrazyEights.jpeg";
import FPL from "../assets/images/FPL.jpeg";

interface Project {
  title: string;
  tech: string;
  image?: string;
  link: string;
  description: string[];
  timeline: string;
}

const projects: Project[] = [
  {
    title: "FPL Analysis",
    tech: "Python, Pandas, Jupyter Notebook",
    image: FPL,
    link: "https://github.com/eohnai/fpl-analysis",
    description: [
      "Used Pandas to analyse Fantasy Premier League (FPL) data to uncover player performance trends and optimise team selection.",
    ],
    timeline: "Jan 2025 - Present"
  },
  {
    title: "Not-SQL",
    tech: "Java",
    // image: NotSQL,
    link: "https://github.com/jeremainecheong/CS201-In-Memory-DB-Project",
    description: [
      "Reimagined database design by enhancing fundamental data structures with specialised tweaks to optimise specific query patterns.",
      "Challenged conventional principles to explore impacts on scalability and performance."
    ],
    timeline: "Oct 2024 - Nov 2024"
  },
  {
    title: "TetraLeague",
    tech: "Spring Boot, React, MongoDB",
    image: Tetris,
    link: "https://github.com/eohnai/CS203-Project",
    description: [
      "Developed a tournament management system for Tetris, handling player registration, match scheduling, and live leaderboard tracking.",
      "Implemented an Elo-based ranking system to match players of similar skill levels for fair gameplay.",
      "Containerised with Docker and deployed using Vercel."
    ],
    timeline: "Aug 2024 - Nov 2024"
  },
  {
    title: "Crazy Eights",
    tech: "Java Swing",
    image: CrazyEights,
    link: "https://github.com/joshuacdj/FinalProjectCrazyEight",
    description: [
      "Developed a Java Swing version of the classic Crazy Eights card game.",
      "Designed and created an interactive graphical user interface (GUI)."
    ],
    timeline: "Feb 2024 - Apr 2024"
  },
];

const Projects = () => {
  return (
    <div className="container text-center position-relative">
      {/* Title */}
      <h2 className="mb-4 display-4 fw-bold projects-title">Projects</h2>

      {/* Carousel Wrapper */}
      <div
        id="projectsCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        {/* Carousel Indicators */}
        <div className="carousel-indicators">
          {projects.reduce((rows, _, index) => {
            if (index % 2 === 0) {
              rows.push(index / 2);
            }
            return rows;
          }, []).map((index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#projectsCarousel"
              data-bs-slide-to={index}
              className={index === 0 ? "active" : ""}
              aria-current={index === 0 ? "true" : "false"}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>

        <div className="carousel-inner">
          {/* Display 2 projects per slide */}
          {projects
            .reduce((rows, project, index) => {
              if (index % 2 === 0) {
                rows.push([project, projects[index + 1]]);
              }
              return rows;
            }, [])
            .map((pair, slideIndex) => (
              <div
                className={`carousel-item ${slideIndex === 0 ? "active" : ""}`}
                key={slideIndex}
                data-bs-interval="10000"
              >
                <div className="row justify-content-center">
                  {pair.map(
                    (project, index) =>
                      project && (
                        <div className="col-md-6 d-flex justify-content-center card-container mb-4" key={`${slideIndex}-${index}`}>
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="no-link-style w-100"
                          >
                            <div className="card shadow-sm p-3 h-100">
                              {/* Image with fallback */}
                              {project.image ? (
                                <img
                                  src={project.image}
                                  className="card-img-top"
                                  alt={project.title}
                                  loading="lazy"
                                />
                              ) : (
                                <div className="placeholder-image d-flex justify-content-center align-items-center bg-light" style={{height: "250px", borderRadius: "10px"}}>
                                  <span className="text-muted">{project.title}</span>
                                </div>
                              )}
                              
                              {/* Card Body */}
                              <div className="card-body text-start">
                                <div className="d-flex justify-content-between align-items-start">
                                  <h5 className="card-title fw-bold">{project.title}</h5>
                                  <span className="badge bg-primary">{project.timeline}</span>
                                </div>
                                <h6 className="card-subtitle mb-3 text-muted">
                                  {project.tech}
                                </h6>
                                <ul className="project-list ps-3">
                                  {project.description.map((desc, j) => (
                                    <li key={j} className="mb-2">{desc}</li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </a>
                        </div>
                      )
                  )}
                </div>
              </div>
            ))}
        </div>

        {/* Fixed Arrow Controls */}
        <button
          className="carousel-control-prev fixed-carousel-button"
          type="button"
          data-bs-target="#projectsCarousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next fixed-carousel-button"
          type="button"
          data-bs-target="#projectsCarousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Projects;