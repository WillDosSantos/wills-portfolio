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
              <h3>Head of Design - Founding Member</h3>
              <p>
                Joined GoGoPool as a founding member and Head of Design, responsible for building 
                the company's entire design ecosystem from the ground up. Led all design aspects 
                including UI/UX design, front-end development, marketing design, brand identity, 
                and user research. Established design systems, created comprehensive illustration 
                libraries, and built scalable design processes that reduced design-to-development 
                time by 30%. Partnered with product and engineering teams to ship 15+ features 
                that improved validator onboarding and adoption.
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
            <div className="work-card-date">OCT 2018</div>
            <div className="work-card--logo">
              <Image
                src="../images/icons/logo-pc.svg"
                width={24}
                height={23}
                alt="Planning Center Logo"
              />
            </div>
            <div className="work-card-main">
              <h3>Lead Marketing Designer</h3>
              <p>
                Led design for marketing campaigns and strategies across all Planning Center products. 
                Established mobile design guidelines and component styles while managing teams of 
                designers and interns. Created comprehensive illustration guides and implemented 
                front-end development on both Rails and React frameworks.
              </p>
            </div>
          </div>
          <div data-aos="fade-up" className="work-card work-card--right">
            <div className="work-card-date">JUN 2015</div>
            <div className="work-card--logo">
              <Image
                src="../images/icons/logo-pc.svg"
                width={24}
                height={23}
                alt="Planning Center Logo"
              />
            </div>
            <div className="work-card-main">
              <h3>Senior Product Designer</h3>
              <p>
                Focused on UI/UX creation and implementation across multiple products including 
                Planning Center People, Registrations, Projector, Music Stand, and Services Mobile. 
                Gathered UX analytics through customer interviews and feedback, implementing 
                front-end styles within React and Rails applications.
              </p>
            </div>
          </div>
          <div data-aos="fade-up" className="work-card work-card--left">
            <div className="work-card-date">OCT 2012</div>
            <div className="work-card--logo">
              <Image
                src="../images/icons/logo-pc.svg"
                width={24}
                height={23}
                alt="Planning Center Logo"
              />
            </div>
            <div className="work-card-main">
              <h3>Marketing Designer</h3>
              <p>
                Created web designs to showcase product features on marketing sites and implemented 
                front-end code in Rails for login systems. Produced video and motion graphics while 
                expanding into mobile design. Led product design for multiple mobile applications 
                and collaborated with developers on feature updates.
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
              <h3>Frontend Designer</h3>
              <p>
                Started as a Frontend Designer at Planning Center, focusing on implementing designs 
                and creating user interfaces. Leveraged skills in HTML, CSS, and design tools while 
                learning the company's products and development processes. Gained experience in 
                front-end development and design implementation.
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
