import { FaCircle } from "react-icons/fa";

interface Exp {
  company: string;
  role: string;
  period: string;
  points: string[];
}

const experiences: Exp[] = [
  {
    company: "SembCorp Industries",
    role: "Intern, Data Science and Analytics",
    period: "May 2025 – Jan 2026",
    points: []
  },
  {
    company: "Singapore Police Force",
    role: "Finance Officer",
    period: "Apr 2023 – Jul 2023",
    points: [
      "Ensured accurate and timely salary disbursements for over 1,000 officers.",
      "Reconciled over $50M in bank transactions and managed tax and bonus calculations.",
      "Oversaw placement, renewal, and withdrawal of fixed deposits across multiple accounts."
    ]
  },
];

const Experience = () => (
  <section id="experience" className="py-5 position-relative timeline-wrapper">
    <div className="container">
      <h2 className="section-title text-center mb-5">Experience</h2>

      {experiences.map((exp, i) => (
        <div key={exp.role} className="timeline-item">
          <span className="timeline-dot"><FaCircle /></span>

          <div className="timeline-content card shadow-sm">
            <div className="card-body">
              <h5 className="fw-bold mb-1">{exp.role}</h5>
              <h6 className="text-muted mb-3">{exp.company} • {exp.period}</h6>
              <ul className="list-unstyled mb-0">
                {exp.points.map(pt => <li key={pt}>▹ {pt}</li>)}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Experience;
