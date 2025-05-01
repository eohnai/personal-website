import Masonry from "react-masonry-css";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";

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
    timeline: "Jan 2025 - Present",
  },
  {
    title: "Not-SQL",
    tech: "Java",
    // image: NotSQL,
    link: "https://github.com/jeremainecheong/CS201-In-Memory-DB-Project",
    description: [
      "Reimagined database design by enhancing fundamental data structures with specialised tweaks to optimise specific query patterns.",
      "Challenged conventional principles to explore impacts on scalability and performance.",
    ],
    timeline: "Oct 2024 - Nov 2024",
  },
  {
    title: "TetraLeague",
    tech: "Spring Boot, React, MongoDB",
    image: Tetris,
    link: "https://github.com/eohnai/CS203-Project",
    description: [
      "Developed a tournament management system for Tetris, handling player registration, match scheduling, and live leaderboard tracking.",
      "Implemented an Elo-based ranking system to match players of similar skill levels for fair gameplay.",
      "Containerised with Docker and deployed using Vercel.",
    ],
    timeline: "Aug 2024 - Nov 2024",
  },
  {
    title: "Crazy Eights",
    tech: "Java Swing",
    image: CrazyEights,
    link: "https://github.com/joshuacdj/FinalProjectCrazyEight",
    description: [
      "Developed a Java Swing version of the classic Crazy Eights card game.",
      "Designed and created an interactive graphical user interface (GUI).",
    ],
    timeline: "Feb 2024 - Apr 2024",
  },
];

const breakpoints = {
  default: 3, // ≥1400 px
  1400: 3,
  992: 2,
  576: 1,
};

const Projects = () => (
  <section id="projects" className="py-5">
    <div className="container">
      <h2 className="section-title text-center mb-5">Projects</h2>

      <Masonry
        breakpointCols={breakpoints}
        className="masonry-grid"
        columnClassName="masonry-col"
      >
        {projects.map((p) => (
          <motion.a
            key={p.title}
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card shadow-sm"
            whileHover={{ y: -6 }}
          >
            {p.image ? (
              <img
                src={p.image}
                alt={p.title}
                className="w-100 project-img"
                loading="lazy"
              />
            ) : (
              <div className="project-placeholder d-flex align-items-center justify-content-center">
                {p.title}
              </div>
            )}

            <div className="project-overlay">
              <h5 className="fw-bold mb-1">{p.title}</h5>
              <small className="badge bg-primary mb-2">{p.timeline}</small>
              <p className="fst-italic mb-2">{p.tech}</p>
              <ul className="text-start ps-3">
                {p.description.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            </div>
          </motion.a>
        ))}
      </Masonry>
    </div>
  </section>
);

export default Projects;
