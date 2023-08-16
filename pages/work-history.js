// pages/work-history.js

import React from "react";
import Link from "next/link";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import HeaderQuote from "../components/HeaderQuote";

const WorkHistory = () => {
  return (
    <div className="container">
      <Sidebar />
      <main>
        <Navbar/>
        <HeaderQuote />
        <h1>Work History</h1>

        {/* Add your content here */}
        <p>
          This is a brief description of my work history. I will add more
          details later.
        </p>

        {/* Link back to the home page or any other page */}
      </main>
    </div>
  );
};

export default WorkHistory;
