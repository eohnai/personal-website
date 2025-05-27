import { FaGoogle } from "react-icons/fa";

interface Cert {
  title: string;
  date: string;
  icon: JSX.Element;
}

const certs: Cert[] = [
  {
    title: "Google Business Intelligence",
    date: "May 2025",
    icon: <FaGoogle />,
  },
  {
    title: "Google Project Management",
    date: "May 2025",
    icon: <FaGoogle />,
  },
  {
    title: "Google Prompting Essentials",
    date: "May 2025",
    icon: <FaGoogle />,
  },
  {
    title: "Google Advanced Data Analytics",
    date: "Aug 2024",
    icon: <FaGoogle />,
  },
  {
    title: "Google AI Essentials",
    date: "Aug 2024",
    icon: <FaGoogle />,
  },
];

const Certifications = () => (
  <section id="certifications" className="cert-section">
    <h2 className="section-title text-center">Certifications</h2>

    <div className="cert-grid">
      {certs.map((c) => (
        <article key={c.title} className="cert-card">
          <span className="cert-icon">{c.icon}</span>

          <div>
            <h5>{c.title}</h5>
            <small className="text-muted">Obtained {c.date}</small>
          </div>
        </article>
      ))}
    </div>
  </section>
);

export default Certifications;
