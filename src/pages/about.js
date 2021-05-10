import React from 'react'

import Layout from '../components/layout'
import ReadyFive from "./imgs/work-history/ready-five-logo.svg"
import PlanningCenter from "./imgs/work-history/pco-logo.svg"
import ElliesGames from "./imgs/work-history/ellies-games-logo.svg"
import Hero from "./imgs/work-history/about-hero.svg"
import ResumeIcon from "./imgs/work-history/resume.svg"

export default () => (
  <Layout style={{ color: `teal` }}>
    <div id="main">
      <section id="one" className="section--about">
        <a href="/">Go Back</a>
        <div className="section--hero__about">
          <div className="col">
            <h1 style={{marginBottom: "15px"}}>Career Path</h1>
            <p>I am truly grateful for the path that has led me to this point in my career and I am excited for new opportunities that are on the horizon.</p>
          </div>
         {/*  <img src={Hero} alt="Me and my creations"/> */}
        </div>
        <section className="timeline">
          <div className="card">
            <div className="card--header">
              <div className="header-details">
                <div className="work-logo" style={{backgroundColor: "#2266F7"}}>
                  <img src={PlanningCenter} alt="Planning Center"/>
                </div>
                <h3>Planning Center</h3>
                <h4>Senior Designer</h4>
              </div>
              <span className="date">Oct 2011 - Current</span>
            </div>
            <ul>
              <li>Create wireframes and ux workflows based on user feedback</li>
              <li>Lead multiple design teams for products and marketing</li>
              <li>Established layouts for mobile and web products</li>
              <li>Implemented and shipped front end code for pixel perfect designs</li>
              <li>Incrementally progressed through roles leading to multi-discipline</li>
            </ul>
          </div>
          <div className="card">
            <div className="card--header">
              <div className="header-details">
                <div className="work-logo" style={{backgroundColor: "#7A3BD2"}}>
                  <img src={ReadyFive} alt="Ready Five"/>
                </div>
                <h3>Ready Five</h3>
                <h4>Lead Designer</h4>
              </div>
              <span className="date">June 2019 - Current</span>
            </div>
            <ul>
              <li>Created branding and asethetic for user interface</li>
              <li>Established design system for streamlined implementation</li>
              <li>Worked closely with lead developers on front end code</li>
              <li>Initiated marketing campaigns and concepts</li>
            </ul>
          </div>
          <div className="card">
            <div className="card--header">
              <div className="header-details">
                <div className="work-logo" style={{backgroundColor: "#00BAF0"}}>
                  <img src={ElliesGames} alt="Ellies Games"/>
                </div>
                <h3>Ellie's Games</h3>
                <h4>Lead Game Designer</h4>
              </div>
              <span className="date">May 2015 - Dec 2018</span>
            </div>
            <ul>
              <li>Created multiple brands and characters for gameplay</li>
              <li>Lead level design to create an engaging experience</li>
              <li>Implemented cross promotion and in-app marketing concepts</li>
            </ul>
        </div>
        <ul className="actions actions--resume">
          <li>
            <a className="button btn--resume" href="/images/resume.pdf" download>Download Resume...</a>
          </li>
        </ul>
        </section>
        <section>
          <h3>Work Fundamentals</h3>
          <p>
            It's been a priviledge to work as a designer over the years and I am grateful for the opportunties that I
            have been blessed with. In order to continue to grow my skill sets, I try to actively challenge myself with
            new projects and approaches. I find that comfortability can tempt one to become compliant rather than engaging.
          </p>
          <p>
            A person might read the following above and notice that I have been in my current position at Planning Center for
            almost a decade. This is the result of Planning Center being a fantastic company to work for. I can confidently say,
            although there are always things that can be improved, that Planning Center has some of the best people I have ever
            worked with. The company makes every effort to try and give their people comfortable and secure working environments.
          </p>
          <p>
            Whatever step I take in the future will be the result of my endevors to expand my knowledge in design, development, and leadership.
          </p>
        </section>
        <section>
          <h3>Personal</h3>
          <p>
            I'm a husband to an amazing woman, father to an beautiful daughter, son to two wonderful parents.
            Our little family is always learning and going on adventures.
          </p>
          <p>
            I have this problem where I want to do everything - so I try to and
            sometimes it works and sometimes it doesn't. I'm currently writing
            and publishing my first book. I know for those that have known me
            for a long time know that it's been a long time coming. And don't
            worry - I have a good editor so there won't be nearly as many
            grammar errors there are on this site. :) Outside of that, I've been
            involved with a number of side projects throughout the years. I led
            and worked with multiple design teams and I maintain a good working
            relationship with people I meet in the industry.
          </p>
        </section>
        <p>
          <strong>TL;DR</strong> I've been in this profession for twelve years. I've
          learned much. I'm going to keep on learning and doing.
        </p>
      </section>
    </div>
  </Layout>
)
