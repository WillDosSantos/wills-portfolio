// pages/work-history.js

import React from "react";
import Link from "next/link";
import HeaderQuote from "../components/HeaderQuote";
import Image from "next/image";
import Layout from "../components/Layout";

const WorkHistory = () => {
  return (
    <Layout>
      <HeaderQuote
        quote="When he worked, he really worked. But when he played, he really played."
        author="Dr. Seuss"
      />
      <div className="inner-page-container" style={{ position: "relative" }}>
        <div className="timeline">
          <div data-aos="fade-up" className="work-card work-card--left">
            <div className="work-card-date">Current</div>
            <div className="work-card--logo">
              <Image
                src="../images/icons/logo-ggp.svg"
                width={24}
                height={23}
                alt="GoGoPool Logo"
              />
            </div>
            <div className="work-card-main">
              <h3>Career Update: Executive Creative Director</h3>
              <p>
                Are you looking for a new job opportunity? Consider making the
                switch from your current company to a new one! With a new job,
                you can gain new experiences, learn new skills, and take your
                career to the next level.
              </p>
            </div>
          </div>
          <div data-aos="fade-up" className="work-card work-card--right">
            <div className="work-card-date">NOV 2022</div>
            <div className="work-card--logo">
              <Image
                src="../images/icons/logo-ggp.svg"
                width={24}
                height={23}
                alt="GoGoPool Logo"
              />
            </div>
            <div className="work-card-main">
              <h3>Career Change: Head of Design</h3>
              <p>
                Are you looking for a new job opportunity? Consider making the
                switch from your current company to a new one! With a new job,
                you can gain new experiences, learn new skills, and take your
                career to the next level.
              </p>
            </div>
          </div>
          <div data-aos="fade-up" className="work-card work-card--left">
            <div className="work-card-date">OCT 2022</div>
            <div className="work-card--logo">
              <Image
                src="../images/icons/logo-pc.svg"
                width={24}
                height={23}
                alt="Planning Center Logo"
              />
            </div>
            <div className="work-card-main">
              <h3>Career Update: Last Days at Planning Center</h3>
              <p>
                Are you looking for a new job opportunity? Consider making the
                switch from your current company to a new one! With a new job,
                you can gain new experiences, learn new skills, and take your
                career to the next level.
              </p>
            </div>
          </div>
          <div data-aos="fade-up" className="work-card work-card--right">
            <div className="work-card-date">JAN 2020</div>
            <div className="work-card--logo">
              <Image
                src="../images/icons/logo-pc.svg"
                width={24}
                height={23}
                alt="Planning Center Logo"
              />
            </div>
            <div className="work-card-main">
              <h3>Career Update: Lead Marketing Designer</h3>
              <p>
                Are you looking for a new job opportunity? Consider making the
                switch from your current company to a new one! With a new job,
                you can gain new experiences, learn new skills, and take your
                career to the next level.
              </p>
            </div>
          </div>
          <div data-aos="fade-up" className="work-card work-card--left">
            <div className="work-card-date">SEPT 2012</div>
            <div className="work-card--logo">
              <Image
                src="../images/icons/logo-pc.svg"
                width={24}
                height={23}
                alt="Planning Center Logo"
              />
            </div>
            <div className="work-card-main">
              <h3>Career Update: Product Designer</h3>
              <p>
                Been enjoying wearing multiple hats out of the gate here at Planning Center. From working on the marketing site with Wordpress to the new design for our login screen for the main app, I've learned a ton. Now, I'm taking more of a focus on mobile design and working on a mobile web app in Batman.js with another talented developer!
              </p>
            </div>
          </div>
          <div data-aos="fade-up" className="work-card work-card--right">
            <div className="work-card-date">OCT 2011</div>
            <div className="work-card--logo">
              <Image
                src="../images/icons/logo-pc.svg"
                width={24}
                height={23}
                alt="Planning Center Logo"
              />
            </div>
            <div className="work-card-main">
              <h3>Career Change: Front End Designer</h3>
              <p>
                Accepted a position out as a Front End Designer for Planning Center. Super excited to start this position and leverage my skills as a designer that's hungry, ambitious, and ready to change things up.
              </p>
            </div>
          </div>
        </div>
        {/* Link back to the home page or any other page */}
      </div>
    </Layout>
  );
};

export default WorkHistory;
