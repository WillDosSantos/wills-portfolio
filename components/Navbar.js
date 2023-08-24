import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

// components/Navbar.js
function Navbar({ onTagSelect, isHomePage }) {
  const tags = ["case studies", "apps & games", "illustration", "motion"]; // Add more tags as needed
  const [isOpen, setIsOpen] = useState(false);
  const sideNavRef = useRef(null);

  const closeSideNav = (e) => {
    if (sideNavRef.current && !sideNavRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", closeSideNav);

    return () => {
      document.removeEventListener("mousedown", closeSideNav);
    };
  }, []);

  const [activeTag, setActiveTag] = useState("All"); // Initially, 'All' is active

  const handleTagClick = (tag) => {
    setActiveTag(tag);
    if (onTagSelect) {
      onTagSelect(tag === "All" ? null : tag);
    }
  };

  return (
    <nav className="navbar">
      <button onClick={() => setIsOpen(!isOpen)}>☰</button>
      <div
        ref={sideNavRef}
        className={`mobile-side-nav ${isOpen ? "open" : ""}`}
      >
        {/* Your nav links go here */}
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        {/* ... */}
      </div>
      {isHomePage ? (
        <ul>
          <Link href="/">
            <li
              onClick={() => handleTagClick("All")}
              className={activeTag === "All" ? "active" : ""}
            >
              All
            </li>
          </Link>
          {tags.map((tag) => (
            <li
              key={tag}
              onClick={() => handleTagClick(tag)}
              className={activeTag === tag ? "active" : ""}
            >
              {tag}
            </li>
          ))}
        </ul>
      ) : (
        // Back to home button
        <ul>
          <Link href="/">
            <li>Back to Home</li>
          </Link>
        </ul>
      )}
      <button className="btn btn--outline btn-icon">
        <Image
          src="../images/icons/icon-envelope.svg"
          alt="envelope icon"
          width={14}
          height={11}
        />
        Connect
      </button>{" "}
      {/* This could be a modal or a link */}
    </nav>
  );
}

export default Navbar;
