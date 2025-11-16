import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { IoChevronBack, IoMenu } from "react-icons/io5";
import { useRouter } from 'next/router';

function MobileNavbar({ onTagSelect, isHomePage }) {
  const router = useRouter();
  const tags = ["case studies", "UI & UX", "illustration", "motion"]; // Updated tags
  const [isOpen, setIsOpen] = useState(false);
  const sideNavRef = useRef(null);

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

  // Update active tag when route changes
  useEffect(() => {
    setActiveTag(getActiveTag());
  }, [router.pathname]);

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
        </ul>
      </div>
    </>
  );
}

export default MobileNavbar;
