import { FaJava, FaPython, FaHtml5, FaCss3Alt, FaJs, FaReact, FaNode, FaDatabase, FaDocker, FaAws } from "react-icons/fa";
import { SiSpringboot, SiMongodb, SiPandas, SiTableau, SiJira, SiC } from "react-icons/si";
import { VscGithub } from "react-icons/vsc";

// Interface for skill items
interface SkillItem {
  name: string;
  icon: JSX.Element;
  category: string;
}

const Skills = () => {
  const skillsList: SkillItem[] = [
    // Programming Languages
    { name: "JavaScript", icon: <FaJs size={40} />, category: "Languages" },
    { name: "Java", icon: <FaJava size={40} />, category: "Languages" },
    { name: "Python", icon: <FaPython size={40} />, category: "Languages" },
    { name: "C", icon: <SiC size={40} />, category: "Languages" },
    { name: "SQL", icon: <FaDatabase size={36} />, category: "Languages" },
    { name: "HTML", icon: <FaHtml5 size={40} />, category: "Languages" },
    { name: "CSS", icon: <FaCss3Alt size={40} />, category: "Languages" },
    
    // Frameworks & Libraries
    { name: "React", icon: <FaReact size={40} />, category: "Frameworks" },
    { name: "Node.js", icon: <FaNode size={40} />, category: "Frameworks" },
    { name: "Spring Boot", icon: <SiSpringboot size={40} />, category: "Frameworks" },
    { name: "Pandas", icon: <SiPandas size={40} />, category: "Frameworks" },
    
    // Databases & Tools
    { name: "MongoDB", icon: <SiMongodb size={40} />, category: "Tools" },
    { name: "Tableau", icon: <SiTableau size={40} />, category: "Tools" },
    { name: "Docker", icon: <FaDocker size={40} />, category: "Tools" },
    { name: "AWS", icon: <FaAws size={40} />, category: "Tools" },
    { name: "Git", icon: <VscGithub size={40} />, category: "Tools" },
    { name: "Jira", icon: <SiJira size={40} />, category: "Tools" },
  ];

  // Group skills by category
  const skillsByCategory = skillsList.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, SkillItem[]>);

  // Get categories in a specific order
  const categories = ["Languages", "Frameworks", "Tools"];

  return (
    <div className="container text-center">
      <h2 className="mb-4 display-4 fw-bold">Skills</h2>
      
      {categories.map(category => (
        <div key={category} className="mb-5">
          <h3 className="mb-4">{category}</h3>
          <div className="row justify-content-center">
            {skillsByCategory[category]?.map((skill, index) => (
              <div key={index} className="col-4 col-md-3 col-lg-2 mb-4 d-flex justify-content-center">
                <div className="skill-card">
                  <div className="skill-icon mb-2">
                    {skill.icon}
                  </div>
                  <p className="skill-name">{skill.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;