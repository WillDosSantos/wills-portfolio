// pages/work-history.js

import React from "react";
import Link from "next/link";
import HeaderQuote from "../components/HeaderQuote";
import Image from "next/image";
import Layout from "../components/Layout";

const WorkHistory = () => {
  return (
    <Layout>
        <HeaderQuote />
        <div className="inner-page-container" style={{ position: 'relative' }}>
          <div className="timeline">
            <div data-aos="fade-up" className="work-card work-card--left">
                <div className="work-card-date">Current</div>
                <div className="work-card--logo">
                    <Image src="../images/icons/logo-ggp.svg" width={24} height={23} alt="GoGoPool Logo"/>
                </div>
                <div className="work-card-main">
                    <h3>Career Update: Executive Creative Director</h3>
                    <p>Are you looking for a new job opportunity? Consider making the switch from your current company to a new one! With a new job, you can gain new experiences, learn new skills, and take your career to the next level.</p>
                </div>
            </div>
            <div data-aos="fade-up" className="work-card work-card--right">
                <div className="work-card-date">NOV 2022</div>
                <div className="work-card--logo">
                    <Image src="../images/icons/logo-ggp.svg" width={24} height={23} alt="GoGoPool Logo"/>
                </div>
                <div className="work-card-main">
                    <h3>Career Change: Head of Design</h3>
                    <p>Are you looking for a new job opportunity? Consider making the switch from your current company to a new one! With a new job, you can gain new experiences, learn new skills, and take your career to the next level.</p>
                </div>
            </div>
            <div data-aos="fade-up" className="work-card work-card--left">
                <div className="work-card-date">OCT 2022</div>
                <div className="work-card--logo">
                    <Image src="../images/icons/logo-pc.svg" width={24} height={23} alt="Planning Center Logo"/>
                </div>
                <div className="work-card-main">
                    <h3>Career Update: Last Days at Planning Center</h3>
                    <p>Are you looking for a new job opportunity? Consider making the switch from your current company to a new one! With a new job, you can gain new experiences, learn new skills, and take your career to the next level.</p>
                </div>
            </div>
            <div data-aos="fade-up" className="work-card work-card--right">
                <div className="work-card-date">JAN 2020</div>
                <div className="work-card--logo">
                    <Image src="../images/icons/logo-pc.svg" width={24} height={23} alt="Planning Center Logo"/>
                </div>
                <div className="work-card-main">
                    <h3>Career Update: Lead Marketing Designer</h3>
                    <p>Are you looking for a new job opportunity? Consider making the switch from your current company to a new one! With a new job, you can gain new experiences, learn new skills, and take your career to the next level.</p>
                </div>
            </div>
          </div>
          {/* Link back to the home page or any other page */}
        </div>
    </Layout>
  );
};

export default WorkHistory;
