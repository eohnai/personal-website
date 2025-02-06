import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! I'll get back to you soon.`);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="container text-center my-5">
      <h2 className="mb-4 display-4 fw-bold">Contact Me</h2>
      <form onSubmit={handleSubmit} className="w-75 mx-auto">
        <div className="mb-3 text-start">
          <label htmlFor="name" className="form-label">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            className="form-control"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3 text-start">
          <label htmlFor="email" className="form-label">
            Your Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
            className="form-control"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3 text-start">
          <label htmlFor="message" className="form-label">
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Your Message"
            className="form-control"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
