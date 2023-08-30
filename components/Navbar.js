import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

// components/Navbar.js
function Navbar({ onTagSelect, isHomePage }) {
  const tags = ["case studies", "apps & games", "illustration", "motion"]; // Add more tags as needed

  const [activeTag, setActiveTag] = useState("All"); // Initially, 'All' is active

  const handleTagClick = (tag) => {
    setActiveTag(tag);
    if (onTagSelect) {
      onTagSelect(tag === "All" ? null : tag);
    }
  };

  return (
    <nav className="navbar">
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
