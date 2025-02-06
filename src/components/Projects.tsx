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
}

const projects: Project[] = [
  {
    title: "FPL Analysis",
    tech: "Python, Pandas, Numpy",
    image: FPL,
    link: "https://github.com/eohnai/fpl-analysis",
    description: [
      "Analysed Fantasy Premier League (FPL) data to identify high-performing players based on historical trends and fixture difficulty.",
    ],
  },
  {
    title: "Not-SQL",
    tech: "Java",
    link: "https://github.com/jeremainecheong/CS201-In-Memory-DB-Project",
    description: [
      "Reimagined database design by optimising fundamental data structures to enhance query performance.",
    ],
  },
  {
    title: "Tetra League",
    tech: "Spring Boot, React, MongoDB",
    image: Tetris,
    link: "https://github.com/eohnai/CS203-Project",
    description: [
      "Developed a full-stack tournament management system for Tetris with live leaderboard tracking.",
    ],
  },
  {
    title: "Crazy Eights",
    tech: "Java Swing",
    image: CrazyEights,
    link: "https://github.com/joshuacdj/FinalProjectCrazyEight",
    description: [
      "Created an interactive Java Swing version of Crazy Eights featuring computer-controlled opponents.",
    ],
  },
];

const Projects = () => {
  // Group projects into pairs for the carousel slides
  const projectPairs = projects.reduce<Project[][]>((rows, project, index) => {
    if (index % 2 === 0) {
      rows.push([project, projects[index + 1]]);
    }
    return rows;
  }, []);

  return (
    <div className="container text-center position-relative">
      <h2 className="mb-4 display-4 fw-bold projects-title">Projects</h2>
      <div id="projectsCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {projectPairs.map((pair, slideIndex) => (
            <div
              className={`carousel-item ${slideIndex === 0 ? "active" : ""}`}
              key={slideIndex}
            >
              <div className="row justify-content-center">
                {pair.map(
                  (project, index) =>
                    project && (
                      <div
                        className="col-md-6 d-flex justify-content-center card-container"
                        key={index}
                      >
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="no-link-style"
                          aria-label={`Visit ${project.title} on GitHub`}
                        >
                          <div className="card shadow-sm p-3">
                            {project.image && (
                              <img
                                src={project.image}
                                alt={project.title}
                                loading="lazy"
                                className="img-fluid card-img-top"
                              />
                            )}
                            <div className="card-body text-start">
                              <h5 className="card-title fw-bold">
                                {project.title}
                              </h5>
                              <h6 className="card-subtitle mb-2 text-muted">
                                {project.tech}
                              </h6>
                              <ul className="list-unstyled">
                                {project.description.map((desc, j) => (
                                  <li key={j}>{desc}</li>
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
        <button
          className="carousel-control-prev fixed-carousel-button"
          type="button"
          data-bs-target="#projectsCarousel"
          data-bs-slide="prev"
          aria-label="Previous Slide"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
        </button>
        <button
          className="carousel-control-next fixed-carousel-button"
          type="button"
          data-bs-target="#projectsCarousel"
          data-bs-slide="next"
          aria-label="Next Slide"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
        </button>
      </div>
    </div>
  );
};

export default Projects;
