import { useState } from "react";
import { Link } from "react-router-dom";

const tabs = [
  { id: "home", label: "Home", path: "/" },
  { id: "projects", label: "Projects", path: "/projects" },
  { id: "experience", label: "Experience", path: "/experience" },
  { id: "contact", label: "Contact", path: "/contact" },
];

const TabComponent = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div>
      <ul className="nav nav-tabs">
        {tabs.map((tab) => (
          <li className="nav-item" key={tab.id}>
            <Link
              to={tab.path}
              className={`nav-link ${activeTab === tab.id ? "active" : ""}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TabComponent;
