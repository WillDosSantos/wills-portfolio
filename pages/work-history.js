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
        quote="My journey so far."
      />
       {/* Resume Download Button */}
       <div className="resume-download-container">
          <Link href="/images/willdossantos-resume.pdf" target="_blank" className="btn btn--primary btn-icon">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <polyline points="7,10 12,15 17,10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <line x1="12" y1="15" x2="12" y2="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Download Resume
          </Link>
        </div>
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
              <h3>Saying bye to Planning Center</h3>
              <p>
                It's been 11 years working with this amazing company and now the
                time has come to take the knowledge I've gained and apply it to
                something else. I'm very excited to accpet my new position at
                GoGoPool. I will miss everyone at Planning Center and hope that
                we run into eachother again.
              </p>
            </div>
          </div>
          <div data-aos="fade-up" className="work-card work-card--right">
            <div className="work-card-date">APR 2019</div>
            <div className="work-card--logo">
              <Image
                src="../images/icons/logo-rf.svg"
                width={24}
                height={23}
                alt="Ready Five Logo"
              />
            </div>
            <div className="work-card-main">
              <h3>Founding Designer Role</h3>
              <p>
                Was drafted as a contract designer by some of the talented
                developers that I know and decided to join the team as a
                founding designer. Doing everything from the blog posts,
                marketing site, mobile and web apps, and pretty muh everything
                else.
              </p>
            </div>
          </div>
          <div data-aos="fade-up" className="work-card work-card--left">
            <div className="work-card-date">SEPT 2018</div>
            <div className="work-card--logo">
              <Image
                src="../images/icons/logo-pc.svg"
                width={24}
                height={23}
                alt="Planning Center Logo"
              />
            </div>
            <div className="work-card-main">
              <h3>Career Update: Lead Mobile Design</h3>
              <p>
                While still maintaining the front end design on Planning Center
                People, I've decided to dive even further into designing for our
                mobile apps. Working with both the Androind and iOS teams is
                great and there are a lot of lessons to learn.
              </p>
            </div>
          </div>
          <div data-aos="fade-up" className="work-card work-card--right">
            <div className="work-card-date">JUL 2016</div>
            <div className="work-card--logo">
              <Image
                src="../images/icons/logo-pc.svg"
                width={24}
                height={23}
                alt="Planning Center Logo"
              />
            </div>
            <div className="work-card-main">
              <h3>Career Update: Senior Product Designer</h3>
              <p>
                Started working working as a Senior Product Designer on the
                Planning Center People product. After a few years bouncing
                around on multiple design and video projects, I'm excited to
                plant my feet in this role and work with this amazing team.
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
                Been enjoying wearing multiple hats out of the gate here at
                Planning Center. From working on the marketing site with
                Wordpress to the new design for our login screen for the main
                app, I've learned a ton. Now, I'm taking more of a focus on
                mobile design and working on a mobile web app in Batman.js with
                another talented developer!
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
                Accepted a position out as a Front End Designer for Planning
                Center. Super excited to start this position and leverage my
                skills as a designer that's hungry, ambitious, and ready to
                change things up.
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
