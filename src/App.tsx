import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Certification from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { ThemeProvider } from "./context/ThemeContext";
import "./App.css";

function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <section id="home" className="section hero-section">
        <Home />
      </section>
      <section id="about" className="section">
        <div className="container text-center">
          <h2 className="mb-4 display-4 fw-bold">About Me</h2>
          <div className="row justify-content-center">
            <div className="col-md-8">
              <p className="about-text">
                I'm a Computer Science student at Singapore Management University, specialising in AI with a second major in Business Analytics. 
                I'm passionate about building data-driven applications that solve real-world problems.
              </p>
              <p className="about-text">
                My technical journey spans full-stack development, data analysis, and AI applications. I enjoy working on projects that challenge 
                conventional approaches and exploring new technologies to expand my skill set.
              </p>
            </div>
          </div>
        </div>
        </section>
      <section id="skills" className="section"><Skills /></section>
      <section id="projects" className="section"><Projects /></section>
      <section id="experience" className="section"><Experience /></section>
      <section id="certifications" className="section"><Certification /></section>
      <section id="contact" className="section"><Contact /></section>
      <Footer />
    </ThemeProvider>
  );
}

export default App;