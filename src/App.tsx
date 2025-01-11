import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TabComponent from "./components/tabs/Tabs";

function App() {
  // const [alertVisible, setAlertVisible] = useState(false);

  return (
    // <div>
    //   <Alert>
    //     Hello <span>World</span>
    //   </Alert>
    // </div>

    // <div>
    //   { alertVisible && <Alert onClose={() => setAlertVisible(false)}>My alert</Alert>}
    //   <Button onClick={() => setAlertVisible(true)}>My Button</Button>
    // </div>

    <Router>
      <TabComponent></TabComponent>
      {/* Header Section */}
      <h1 className="name">Ian Hoe</h1>
      <p>Year 2 Computer Science Student | Singapore Management University</p>

      {/* About Me Section */}
      <h2>About Me!</h2>
      <p>
        I am passionate about software development and data analytics and I am
        always eager to learn new technologies.
      </p>

      {/* Projects Section */}
      <h2>Projects</h2>
      <ul>
        <li>TetraLeague | Spring Boot, React, MongoDB</li>
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
        <li>Crazy Eights | Java Swing</li>
        <ul>
          <li>
            Developed a Java Swing version of the classic Crazy Eights card
            game.
          </li>
          <li>
            Designed and created an interactive graphical user interface (GUI).
          </li>
        </ul>
      </ul>

      {/* Work Experience Section */}
      <h2>Work Experience</h2>
      <ul>
        <li>Finance Officer | Singapore Police Force</li>
        <ul>
          <li>
            Processed salary disbursements for officers, ensuring on-time
            payments and resolving discrepancies efficiently.
          </li>
          <li>
            Conducted tax and bonus calculations with accuracy and compliance
            with financial regulations.
          </li>
          <li>
            Reconciled bank accounts for transactions, streamlining reporting
            processes for audit readiness.
          </li>
        </ul>
        <li>Digital Ambassador | Infocomm Media Development Authority</li>
        <ul>
          <li>
            Provided lessons to seniors on smartphone functions like messaging,
            navigation, and app usage.
          </li>
          <li>
            Promoted digital payment adoption amongst hawkers, increasing
            awareness in key areas.
          </li>
        </ul>
      </ul>

      {/* Links Section */}
      <h2>Links</h2>
      <ul>
        <li>
          Feel free to contact me at:
          <a href="mailto:ianhoe@gmail.com">ianhoe@gmail.com</a>
        </li>
        <li>
          My GitHub:
          <a href="https://github.com/eohnai">github.com/eohnai</a>
        </li>
        <li>
          My LinkedIn:
          <a href="https://linkedin.com/in/ianhoe">linkedin.com/in/ianhoe</a>
        </li>
      </ul>
    </Router>
  );
}

export default App;
