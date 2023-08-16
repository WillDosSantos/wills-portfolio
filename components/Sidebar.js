import React, { useState, useEffect, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import Link from "next/link";

// components/Sidebar.js
function Sidebar() {
  const titles = ["design", "code", "direct", "write"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isEntering, setIsEntering] = useState(true);

  const titleRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsEntering((prev) => !prev); // Toggle between entering and exiting
    }, 5000); // 5 seconds delay

    return () => clearInterval(interval);
  }, []);

  const handleExited = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % titles.length);
    setIsEntering(true); // Start the entrance animation for the next word
  };

  return (
    <div className="sidebar">
      <div className="sidebar-content">
        <p className="intro-line">Hello, I’m Will and I</p>
        <CSSTransition
          in={isEntering}
          timeout={500}
          nodeRef={titleRef}
          classNames="slide-up"
          onExited={handleExited}
        >
          <h1
            style={{ position: "relative" }}
            ref={titleRef}
            key={titles[currentIndex]}
            className="sidebar-title"
          >
            {titles[currentIndex]}
            <span className="title-shadow">{titles[currentIndex]}</span>
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
        <Link style={{ marginTop: "2em" }} className="btn btn--outline btn--primary" href="/work-history">
            Past work
        </Link>{" "}
        {/* This could be a modal or a link */}
      </div>
      {/* Add more content here */}
    </div>
  );
}

export default Sidebar;
