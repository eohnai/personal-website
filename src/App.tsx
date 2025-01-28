import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TabComponent from "./components/tabs/Tabs";
import Home from "./components/pages/Home";
import Projects from "./components/pages/Projects";
import Experience from "./components/pages/Experience";
import Contact from "./components/pages/Contact";

function App() {
  return (
    <Router>
      <TabComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
