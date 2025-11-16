import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

// components/Navbar.js
import { useRouter } from 'next/router';

function Navbar({ onTagSelect, isHomePage, onOpenModal }) {
  const router = useRouter();
  const tags = ["case studies", "UI & UX", "games", "illustration", "motion"]; // Updated tags

  // Determine active tag based on current URL
  const getActiveTag = () => {
    if (!isHomePage || router.pathname === '/') {
      return "All";
    }
    // Extract tag from URL path
    const pathSegments = router.pathname.split('/');
    if (pathSegments.length > 1) {
      let tagFromUrl = pathSegments[1].replace(/-/g, ' ');
      // Handle special cases for URL decoding
      if (tagFromUrl === 'ui ux') {
        tagFromUrl = 'UI & UX';
      }
      return tagFromUrl;
    }
    return "All";
  };

  const [activeTag, setActiveTag] = useState(getActiveTag());

  // Update active tag when route changes
  React.useEffect(() => {
    setActiveTag(getActiveTag());
  }, [router.pathname]);

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
          {tags.map((tag) => {
            let urlTag = tag.replace(/ /g, "-").toLowerCase();
            // Handle special case for UI & UX
            if (tag === 'UI & UX') {
              urlTag = 'ui-ux';
            }
            return (
              <Link href={`/${urlTag}`} key={tag}>
                <li
                  onClick={() => handleTagClick(tag)}
                  className={activeTag === tag ? "active" : ""}
                >
                  {tag}
                </li>
              </Link>
            );
          })}
          <Link href="/speaking">
            <li
              className={router.pathname === '/speaking' ? "active" : ""}
            >
              Speaking
            </li>
          </Link>
        </ul>
      ) : (
        // Back to home button
        <ul>
          <Link href="/">
            <li>Back to Home</li>
          </Link>
          <Link href="/speaking">
            <li
              className={router.pathname === '/speaking' ? "active" : ""}
            >
              Speaking
            </li>
          </Link>
        </ul>
      )}
      <div className="navbar-actions">
        <Link href="/work-history">
          <button className="btn btn--outline-blue">Work History</button>
        </Link>
        <button onClick={onOpenModal} className="btn btn--outline btn-icon">
          <Image
            src="../images/icons/icon-envelope.svg"
            alt="envelope icon"
            width={14}
            height={11}
          />
          Connect
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
