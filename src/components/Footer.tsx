
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <footer className="bg-light text-center py-4 mt-5">
      <div className="container">
        <p className="mb-0">© 2025 Ian Hoe. All rights reserved.</p>
        <p className="mb-0">Email: <a href="mailto:ianhoe@gmail.com">ianhoe@gmail.com</a></p>
        <div className="d-flex justify-content-center mt-2">
          <a href="https://github.com/eohnai" target="_blank" rel="noopener noreferrer" className="mx-2">
            <FaGithub size={24} />
          </a>
          <a href="https://linkedin.com/in/ianhoe" target="_blank" rel="noopener noreferrer" className="mx-2">
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
