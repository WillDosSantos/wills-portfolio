import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { IoChevronBack, IoMenu } from "react-icons/io5";

function MobileNavbar({ onTagSelect, isHomePage }) {
  const tags = ["case studies", "apps & games", "illustration", "motion"]; // Add more tags as needed
  const [activeTag, setActiveTag] = useState("All"); // Initially, 'All' is active
  const [isOpen, setIsOpen] = useState(false);
  const sideNavRef = useRef(null);

  const handleTagClick = (tag) => {
    setActiveTag(tag);
    if (onTagSelect) {
      onTagSelect(tag === "All" ? null : tag);
    }
  };

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

  return (
    <>
      <button className="mobile-menu-button" onClick={() => setIsOpen(!isOpen)}>
      <IoMenu />
      </button>
      <div
        ref={sideNavRef}
        className={`mobile-side-nav ${isOpen ? "open" : ""}`}
      >
        <button 
          className="mobile-close-button" 
          onClick={() => setIsOpen(false)}
          aria-label="Close menu"
        >
          <IoChevronBack />
        </button>
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
            <Link href={`/${tag.replace(" ", "-").toLowerCase()}`} key={tag}>
              <li
                onClick={() => handleTagClick(tag)}
                className={activeTag === tag ? "active" : ""}
              >
                {tag}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </>
  );
}

export default MobileNavbar;
