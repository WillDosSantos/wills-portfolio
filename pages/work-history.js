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
        <Navbar />
        <HeaderQuote />
        <div className="inner-page-container" style={{ position: 'relative' }}>
          <div className="timeline">
            <div className="work-card work-card--left">
                <div className="work-card-date">Current</div>
                <div className="work-card--logo"></div>
                <div className="work-card-main">
                    <h3>Career Update: Executive Creative Director</h3>
                    <p>Are you looking for a new job opportunity? Consider making the switch from your current company to a new one! With a new job, you can gain new experiences, learn new skills, and take your career to the next level.</p>
                </div>
            </div>
            <div className="work-card work-card--right">
                <div className="work-card-date">Current</div>
                <div className="work-card--logo"></div>
                <div className="work-card-main">
                    <h3>Career Update: Executive Creative Director</h3>
                    <p>Are you looking for a new job opportunity? Consider making the switch from your current company to a new one! With a new job, you can gain new experiences, learn new skills, and take your career to the next level.</p>
                </div>
            </div>
          </div>
          {/* Link back to the home page or any other page */}
        </div>
      </main>
    </div>
  );
};

export default WorkHistory;
