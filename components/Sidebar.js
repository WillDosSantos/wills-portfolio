import React, { useState, useEffect, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import Link from "next/link";
import Image from "next/image";

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
            <a href="https://www.gogopool.com">
              <Image
                src="../images/icons/logo-ggp.svg"
                width={24}
                height={24}
                alt="GoGoPool Logo"
              />
            </a>
            <span className="job-title">Creative Director</span>
          </li>
          <li>
            <a href="https://www.readyfive.io">
              <Image
                src="../images/icons/logo-rf.svg"
                width={24}
                height={24}
                alt="ReadyFive Logo"
              />
            </a>
            <span className="job-title">Founding Designer</span>
          </li>
        </ul>
          <Link
            style={{ marginTop: "2em" }}
            className="btn btn--outline btn--primary btn-icon"
            href="/work-history"
          >
            <Image
              src="../images/icons/icon-paper.svg"
              width={15}
              height={16}
              alt="twitter icon"
            ></Image>
            Past work
          </Link>
        {/* This could be a modal or a link */}
      </div>
      <div className="sidebar-footer">
        <a href="https://twitter.com/w_g_teller">
          <Image
            src="../images/icons/icon-twitter.svg"
            width={17}
            height={15}
            alt="twitter icon"
          ></Image>
        </a>
        <a href="https://twitter.com/w_g_teller">
          <Image
            src="../images/icons/icon-discord.svg"
            width={18}
            height={15}
            alt="discord icon"
          ></Image>
        </a>
        <a href="https://dribbble.com/willds">
          <Image
            src="../images/icons/icon-dribbble.svg"
            width={19}
            height={19}
            alt="dribbble icon"
          ></Image>
        </a>
      </div>
    </div>
  );
}

export default Sidebar;
