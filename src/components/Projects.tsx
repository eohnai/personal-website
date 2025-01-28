import Tetris from "../assets/images/Tetris.jpeg"
import CrazyEights from "../assets/images/CrazyEights.jpeg"

const Projects = () => {
  return (
    <div className="container text-center">
      <h2 className="mb-4">Projects</h2>
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <img src={Tetris} className="card-img-top" alt="Project 1" />
            <div className="card-body">
              <h5 className="card-title">Tetra League</h5>
              <p className="card-text">
                <ul>
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
        </div>

        <div className="col-md-6">
          <div className="card">
            <img src={CrazyEights} className="card-img-top" alt="Project 2" />
            <div className="card-body">
              <h5 className="card-title">Crazy Eights</h5>
              <p className="card-text">
                <ul>
                  <li>
                    Developed a Java Swing version of the classic Crazy Eights card
                    game.
                  </li>
                  <li>
                    Designed and created an interactive graphical user interface (GUI).
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Projects;
