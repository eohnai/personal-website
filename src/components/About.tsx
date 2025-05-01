import { FaMapMarkerAlt, FaUniversity } from "react-icons/fa";
import { useInView } from "../hooks/UseInView";

const About = () => {
  const ref = useInView<HTMLDivElement>();

  return (
    <div ref={ref} className="about-section fade-card">
      <div className="row align-items-center g-5">
        <div className="col-lg-5 text-center">
          <div className="about-photo shadow-glow">
            {/* <img src={profilePic} alt="Ian Hoe" /> */}
          </div>
        </div>

        <div className="col-lg-7">
          <h2 className="section-title">About Me</h2>

          <p>
            I’m a <strong>CS undergraduate @ SMU</strong>, blending{" "}
            <span className="gradient-text">AI</span> &{" "}
            <span className="gradient-text">Biz Analytics</span> to craft
            data-driven products that delight users.
          </p>

          <ul className="about-bullets list-unstyled mt-4">
            <li><FaUniversity /> 2nd Major: Business Analytics</li>
            <li><FaMapMarkerAlt /> Singapore • GMT+8</li>
            <li>Currently learning Rust & Next-Gen LLM tooling</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
