
import Tetris from "../assets/images/Tetris.jpeg"
import CrazyEights from "../assets/images/CrazyEights.jpeg"

const Projects = () => {
  return (
    <div className="container text-center">
      <h2 className="mb-4 display-4 fw-bold">Projects</h2>
      <div className="row">
        <div className="col-md-6">
          <a href="https://github.com/eohnai/CS203-Project" target="_blank" rel="noopener noreferrer" className="no-link-style mx-2">
            <div className="card shadow-sm">
              <img src={Tetris} className="card-img-top" alt="Project 1" />
                <div className="card-body">
                  <h5 className="card-title fw-bold">Tetra League</h5>
                  <h6 className="card-subtitle mb-2 text-muted">Spring Boot, React, MongoDB</h6>
                  <p className="card-text">
                    <ul className="list-unstyled">
                      <li>
                        Developed a tournament management system for Tetris, handling player
                        registration, match scheduling, and live leaderboard tracking.
                      </li>
                      <li>
                        Implemented an Elo-based ranking system to match players of similar
                        skill levels for fair gameplay.
                      </li>
                    </ul>
                  </p>
                </div>
            </div>
          </a>
        </div>

        <div className="col-md-6">
          <a href="https://github.com/eohnai/FinalProjectCrazyEight" target="_blank" rel="noopener noreferrer" className="no-link-style mx-2">
            <div className="card shadow-sm">
              <img src={CrazyEights} className="card-img-top" alt="Project 2" />
                <div className="card-body">
                  <h5 className="card-title fw-bold">Crazy Eights</h5>
                  <h6 className="card-subtitle mb-2 text-muted">Java Swing</h6>
                  <p className="card-text">
                    <ul className="list-unstyled">
                      <li>
                        Developed a Java Swing version of the classic Crazy Eights card game.
                      </li>
                      <li>
                        Designed an interactive graphical user interface (GUI).
                      </li>
                    </ul>
                  </p>
                </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
