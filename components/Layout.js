// components/Layout.js

import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import MobileNavbar from "./MobileNavbar";

const Layout = ({ children, selectedTag, onTagSelect, isHomePage }) => {
 
  return (
    <div className="container">
      <MobileNavbar/>
      <Sidebar />
      <main>
        <Navbar onTagSelect={onTagSelect} isHomePage={isHomePage} />
        {children} {/* This will render the content of the page */}
      </main>
    </div>
  );
};

export default Layout;
