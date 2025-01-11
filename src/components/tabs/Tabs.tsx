import { useState } from "react";

const tabs = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

const TabComponent = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div>
      <ul className="nav nav-tabs">
        {tabs.map((tab) => (
          <li className="nav-item">
            <a
              className={`nav-link ${activeTab === tab.id ? "active" : ""}`}
              id={`${tab.id}-tab`}
              onClick={() => setActiveTab(tab.id)}
              aria-controls={tab.id}
              aria-selected={activeTab === tab.id}
            >
              {tab.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TabComponent;
