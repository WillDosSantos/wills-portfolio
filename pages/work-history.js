// pages/work-history.js

import React from "react";
import Link from "next/link";
import HeaderQuote from "../components/HeaderQuote";
import Image from "next/image";
import Layout from "../components/Layout";

const WorkHistory = () => {
  return (
    <Layout>
      <div
        style={{
          display: "flex",
          maxWidth: "1200px",
          margin: "7rem auto",
          gap: "2rem",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <img
          src="/images/family.jpg"
          alt="My Family"
          width={800}
          height={1116}
          style={{ borderRadius: "16px", maxWidth: "400px" }}
          data-aos="fade-left"
        />
        <div style={{ maxWidth: "650px" }} data-aos="fade-right">
          <h1
            style={{
              color: "#111111",
              fontSize: "40px",
              lineHeight: "1em",
              marginBottom: "1rem",
            }}
          >
            The moments I feel the best are when I'm able to make life easier
            for others.
          </h1>
          <p style={{ color: "#111111", lineHeight: "1.8em" }}>
            I design for legacy. Over the past 15 years I’ve explored a wide
            range of creative disciplines, from touring in a band and painting
            street art to leading product and brand design across tech and Web3,
            including serving as the founding designer at GoGoPool (now Hypha)
            and shaping widely used tools at Planning Center. What drives me
            isn’t titles or accomplishments, it’s the responsibility I carry as
            a husband and father. I create to provide for my family and to build
            something that outlasts me. I don’t give up; when things get
            difficult, I lean on my faith and push forward. I’m passionate about
            design, storytelling and meaningful product creation, and I bring
            that same depth, care and intentionality into every project I touch,
            with the goal of leaving something better for the generations that
            follow.
          </p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          borderBottom: "1px solid rgba(205, 205, 205, 1)",
        }}
        data-aos="fade-up"
      >
        {/* Company Logos Section */}
        <h2 style={{ color: "#111111", marginBottom: "1rem" }}>Companies I've worked with</h2>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "4rem",
            margin: "1rem auto 4rem auto",
            maxWidth: "1400px",
            padding: "0 2rem",
          }}
        >
          <div
            data-aos="fade-up"
            data-aos-delay="0"
            style={{ opacity: 0.6, transition: "opacity 0.3s" }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.6")}
          >
            <Image
              src="/images/companies/logo-1.svg"
              width={60}
              height={15}
              alt="Company Logo 1"
              style={{ height: "auto", width: "auto", maxHeight: "24px" }}
            />
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            style={{ opacity: 0.6, transition: "opacity 0.3s" }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.6")}
          >
            <Image
              src="/images/companies/logo-2.svg"
              width={60}
              height={15}
              alt="Company Logo 2"
              style={{ height: "auto", width: "auto", maxHeight: "24px" }}
            />
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            style={{ opacity: 0.6, transition: "opacity 0.3s" }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.6")}
          >
            <Image
              src="/images/companies/logo-3.svg"
              width={60}
              height={15}
              alt="Company Logo 3"
              style={{ height: "auto", width: "auto", maxHeight: "24px" }}
            />
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            style={{ opacity: 0.6, transition: "opacity 0.3s" }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.6")}
          >
            <Image
              src="/images/companies/logo-4.svg"
              width={60}
              height={15}
              alt="Company Logo 4"
              style={{ height: "auto", width: "auto", maxHeight: "24px" }}
            />
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="400"
            style={{ opacity: 0.6, transition: "opacity 0.3s" }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.6")}
          >
            <Image
              src="/images/companies/logo-5.svg"
              width={60}
              height={15}
              alt="Company Logo 5"
              style={{ height: "auto", width: "auto", maxHeight: "24px" }}
            />
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="500"
            style={{ opacity: 0.6, transition: "opacity 0.3s" }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.6")}
          >
            <Image
              src="/images/companies/logo-6.svg"
              width={60}
              height={15}
              alt="Company Logo 6"
              style={{ height: "auto", width: "auto", maxHeight: "24px" }}
            />
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <HeaderQuote quote="My journey so far." />
      {/* Resume Download Button */}
      <div className="resume-download-container">
        <Link
          href="/images/willdossantos-resume.pdf"
          target="_blank"
          className="btn btn--primary btn-icon"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <polyline
              points="7,10 12,15 17,10"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <line
              x1="12"
              y1="15"
              x2="12"
              y2="3"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
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
                Joined GoGoPool as a founding member and Head of Design,
                responsible for building the company's entire design ecosystem
                from the ground up. Led all design aspects including UI/UX
                design, front-end development, marketing design, brand identity,
                and user research. Established design systems, created
                comprehensive illustration libraries, and built scalable design
                processes that reduced design-to-development time by 30%.
                Partnered with product and engineering teams to ship 15+
                features that improved validator onboarding and adoption.
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
                Led design for marketing campaigns and strategies across all
                Planning Center products. Established mobile design guidelines
                and component styles while managing teams of designers and
                interns. Created comprehensive illustration guides and
                implemented front-end development on both Rails and React
                frameworks.
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
                Focused on UI/UX creation and implementation across multiple
                products including Planning Center People, Registrations,
                Projector, Music Stand, and Services Mobile. Gathered UX
                analytics through customer interviews and feedback, implementing
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
                Created web designs to showcase product features on marketing
                sites and implemented front-end code in Rails for login systems.
                Produced video and motion graphics while expanding into mobile
                design. Led product design for multiple mobile applications and
                collaborated with developers on feature updates.
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
                Started as a Frontend Designer at Planning Center, focusing on
                implementing designs and creating user interfaces. Leveraged
                skills in HTML, CSS, and design tools while learning the
                company's products and development processes. Gained experience
                in front-end development and design implementation.
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
