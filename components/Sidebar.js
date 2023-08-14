import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";

// components/Sidebar.js
function Sidebar() {
  const titles = ["design", "code", "direct", "write"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [changing, setChanging] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setChanging(true); // Start the exit transition
    }, 3000); // Change title every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebar-content">
        <p className="intro-line">Hello, I’m WILL and I</p>
        <CSSTransition
          in={!changing}
          timeout={500}
          classNames="slide-up"
          onExited={() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % titles.length);
            setChanging(false); // Reset to false after the transition to start the enter transition
          }}
        >
          <h1 key={titles[currentIndex]} className="sidebar-title">
            {titles[currentIndex]}
          </h1>
        </CSSTransition>
        <ul className="job-title-container">
          <li>
            <span>icon</span>
            <span className="job-title">Creative Director</span>
          </li>
          <li>
            <span>icon</span>
            <span className="job-title">Founding Designer</span>
          </li>
        </ul>
        <button
          style={{
            marginTop: "2em",
          }}
          className="btn btn--outline btn--primary"
        >
          Past work
        </button>{" "}
        {/* This could be a modal or a link */}
      </div>
      {/* Add more content here */}
    </div>
  );
}

export default Sidebar;
