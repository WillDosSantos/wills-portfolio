// components/Layout.js

import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const Layout = ({ children, selectedTag, onTagSelect }) => {
 
  return (
    <div className="container">
      <Sidebar />
      <main>
        <Navbar onTagSelect={onTagSelect} />
        {children} {/* This will render the content of the page */}
      </main>
    </div>
  );
};

export default Layout;
