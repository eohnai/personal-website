import { useState } from "react";
import {
  FaJs,
  FaPython,
  FaReact,
  FaNode,
  FaJava,
  FaDocker,
  FaGitAlt,
  FaAws,
  FaHtml5,
  FaCss3Alt
} from "react-icons/fa";

import {
  SiKotlin,
  SiC,
  SiTypescript,
  SiMysql,
  SiR,
  SiSpringboot,
  SiNextdotjs,
  SiTailwindcss,
  SiBootstrap,
  SiVite,
  SiPytorch,
  SiMongodb,
  SiAmazondynamodb,
  SiPandas,
  SiTableau,
  SiPostman,
  SiApachemaven,
  SiJirasoftware,
  SiGraphql,
  SiJupyter,
  SiFigma
} from "react-icons/si";
import { CircularProgressbarWithChildren, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { motion } from "framer-motion";

interface Skill {
  name: string;
  level: number; // 0-100
  icon: JSX.Element;
  category: "Languages" | "Frameworks" | "Tools";
}

const skills: Skill[] = [
  /* ── LANGUAGES ─────────────────────────── */
  { name: "Java",        level: 85, icon: <FaJava />,        category: "Languages" },
  { name: "Kotlin",      level: 75, icon: <SiKotlin />,      category: "Languages" },
  { name: "C",           level: 70, icon: <SiC />,           category: "Languages" },
  { name: "Python",      level: 90, icon: <FaPython />,      category: "Languages" },
  { name: "SQL",         level: 80, icon: <SiMysql />,       category: "Languages" },
  { name: "R",           level: 70, icon: <SiR />,           category: "Languages" },
  { name: "JavaScript",  level: 90, icon: <FaJs />,          category: "Languages" },
  { name: "TypeScript",  level: 85, icon: <SiTypescript />,  category: "Languages" },
  { name: "HTML",        level: 90, icon: <FaHtml5 />,       category: "Languages" },
  { name: "CSS",         level: 85, icon: <FaCss3Alt />,     category: "Languages" },

  /* ── FRAMEWORKS / LIBS ─────────────────── */
  { name: "Spring Boot", level: 80, icon: <SiSpringboot />,  category: "Frameworks" },
  { name: "React",       level: 88, icon: <FaReact />,       category: "Frameworks" },
  { name: "Next.js",     level: 80, icon: <SiNextdotjs />,   category: "Frameworks" },
  { name: "Tailwind CSS",level: 78, icon: <SiTailwindcss />, category: "Frameworks" },
  { name: "Bootstrap",   level: 80, icon: <SiBootstrap />,   category: "Frameworks" },
  { name: "Node.js",     level: 78, icon: <FaNode />,        category: "Frameworks" },
  { name: "Swing",       level: 70, icon: <FaJava />,        category: "Frameworks" },
  { name: "Vite",        level: 75, icon: <SiVite />,        category: "Frameworks" },
  { name: "PyTorch",     level: 80, icon: <SiPytorch />,     category: "Frameworks" },

  /* ── TOOLS / PLATFORMS ─────────────────── */
  { name: "MongoDB",     level: 80, icon: <SiMongodb />,       category: "Tools" },
  { name: "DynamoDB",    level: 72, icon: <SiAmazondynamodb />,category: "Tools" },
  { name: "Pandas",      level: 85, icon: <SiPandas />,        category: "Tools" },
  { name: "Docker",      level: 78, icon: <FaDocker />,        category: "Tools" },
  { name: "Tableau",     level: 70, icon: <SiTableau />,       category: "Tools" },
  { name: "AWS",         level: 80, icon: <FaAws />,           category: "Tools" },
  { name: "Postman",     level: 75, icon: <SiPostman />,       category: "Tools" },
  { name: "Maven",       level: 70, icon: <SiApachemaven />,   category: "Tools" },
  { name: "Git",         level: 90, icon: <FaGitAlt />,        category: "Tools" },
  { name: "Jira",        level: 75, icon: <SiJirasoftware />,  category: "Tools" },
  { name: "Jupyter",     level: 80, icon: <SiJupyter />,       category: "Tools" },
  { name: "Figma",       level: 70, icon: <SiFigma />,         category: "Tools" },
];

const categories = ["Languages", "Frameworks", "Tools"] as const;

const Skills = () => {
  const [tab, setTab] = useState<(typeof categories)[number]>("Languages");

  return (
    <div className="container text-center">
      <h2 className="section-title">Skills</h2>

      <svg width="0" height="0">
        <linearGradient id="grad" x1="1" y1="0" x2="0" y2="1">
          <stop offset="0%"  stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#2563eb" />
        </linearGradient>
      </svg>

      {/* Tab buttons */}
      <div className="btn-group mb-5">
        {categories.map(c => (
          <button
            key={c}
            onClick={() => setTab(c)}
            className={`btn ${tab === c ? "btn-primary" : "btn-outline-primary"}`}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="skills-grid">
        {skills.filter(s => s.category === tab).map((s, i) => (
          <motion.div
            key={s.name}
            className="skill-tile"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: i * 0.05 }}
          >
            <CircularProgressbarWithChildren
              value={s.level}
              styles={buildStyles({
                strokeLinecap: "round",
                pathColor: "url(#grad)",
                trailColor: "var(--gray-light)",
                textColor: "transparent",
                pathTransitionDuration: 0.6
              })}
              strokeWidth={8}
            >
              <div className="skill-icon">{s.icon}</div>
            </CircularProgressbarWithChildren>
            <p className="skill-label">{s.name}</p>
            <span className="visually-hidden">{s.level}% proficient</span>
          </motion.div>
        ))}
      </div>

    </div>
  );
};

export default Skills;
