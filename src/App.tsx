import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <section id="home" className="section">
        <h1>Ian Hoe</h1>
      </section>
      <section id="projects" className="section">
        <Projects />
      </section>
      <section id="experience" className="section">
        <Experience />
      </section>
      <section id="contact" className="section">
        <Contact />
      </section>
    </div>
  );
}

export default App;
