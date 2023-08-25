import React, { useState, useRef, useEffect } from "react";

function MobileNavbar() {
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

    return (
        <>
            <button className="mobile-menu-button" onClick={() => setIsOpen(!isOpen)}>☰</button>
            <div
                ref={sideNavRef}
                className={`mobile-side-nav ${isOpen ? "open" : ""}`}
            >
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/contact">Contact</a>
                {/* ... */}
            </div>
        </>
    );
}

export default MobileNavbar;
