import { useState, useEffect } from "react";

import { getSortedPostsData } from "../lib/posts";
import { formatDate } from "../lib/dateUtils";
import Layout from "../components/Layout";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import PostList from "../components/PostList";
import OrganizedPostList from "../components/OrganizedPostList";
import Typewriter from "../components/Typewriter";
import { FiArrowUpRight } from "react-icons/fi";

import AOS from "aos";

export default function Home({ allPostsData }) {
  const [selectedTag, setSelectedTag] = useState(null);

  useEffect(() => {
    // This will refresh the AOS animations every time selectedTag changes.
    AOS.refresh();
  }, [selectedTag]);

  return (
    <Layout
      isHomePage={true}
      selectedTag={selectedTag}
      onTagSelect={setSelectedTag}
    >
      <div className="hero-text" style={{ maxWidth: "1300px", margin: "5em auto" }}>
        <div style={{ 
          display: "flex", 
          alignItems: "center", 
          justifyContent: "space-between",
          gap: "3rem",
          flexWrap: "wrap",
        }}>
          <div style={{ flex: "1", minWidth: "300px", maxWidth: "1000px" }}>
            <h1>
              <Typewriter
                text="Let's make something amazing!"
                speed={80}
                delay={300}
              />
            </h1>
            <p className="hero-text-p">
            Hi, I’m Will — a senior UX/UI designer with 15+ years of experience crafting thoughtful digital experiences. I love helping teams sharpen their vision and turn ideas into purposeful, high-quality products.
            </p>
          </div>
          <div style={{ flex: "0 0 auto", position: "relative" }} className="hero-image-container">
            <div className="testimonial-card testimonial-card-1" style={{
              borderRadius: "16px",
              background: "linear-gradient(270deg, rgba(255, 255, 255, 0.70) 0%, rgba(255, 255, 255, 0.90) 100%)",
              boxShadow: "0 32px 54px 0 rgba(0, 0, 0, 0.10)",
              backdropFilter: "blur(48.5px)",
              padding: "1rem",
              position: "absolute",
              top: "70px",
              left: "100px",
              transform: "translate(-50%, -50%)",
              zIndex: 1000,
              fontSize: "1rem",
            }}
            data-aos="fade-up"
            data-aos-delay="200"
            >
              <p>This is amazing! You nailed it!
                <span style={{ display: "block", fontSize: "0.8rem", color: "#6663ff"}}>- Emin Gün Sirer (CEO of Avalabs)</span>
              </p>
            </div>
            <div className="testimonial-card testimonial-card-2" style={{
              borderRadius: "16px",
              background: "linear-gradient(270deg, rgba(255, 255, 255, 0.70) 0%, rgba(255, 255, 255, 0.90) 100%)",
              boxShadow: "0 32px 54px 0 rgba(0, 0, 0, 0.10)",
              backdropFilter: "blur(48.5px)",
              padding: "1rem",
              position: "absolute",
              bottom: "0px",
              right: "-120px",
              transform: "translate(-50%, -50%)",
              zIndex: 1000,
              fontSize: "1rem",
            }}
            data-aos="fade-up"
            data-aos-delay="600"
            >
              <p>This looks so good! LFGG! 
                <span style={{ display: "block", fontSize: "0.8rem", color: "#6663ff"}}>- Steven Gates (CEO of Hypha)</span>
              </p>
            </div>
            <div 
              className="hero-image-wrapper"
              style={{ 
                position: "relative",
                width: "500px",
                height: "500px"
              }}
              data-aos="fade-up"
            >
              <Image
                src="/images/hero.svg"
                alt="gradient liquid background"
                width={700}
                height={700}
                style={{ 
                  width: "100%", 
                  height: "100%",
                  borderRadius: "8px"
                }}
              />
              <Image
                src="/images/logo-1.svg"
                alt="Logo 1"
                width={100}
                height={100}
                style={{
                  position: "absolute",
                  top: "70%",
                  left: "11%",
                  width: "180px",
                  height: "auto"
                }}
                data-aos="fade-up"
                data-aos-delay="100"
              />
              <Image
                src="/images/logo-2.svg"
                alt="Logo 2"
                width={100}
                height={100}
                style={{
                  position: "absolute",
                  top: "10%",
                  right: "8%",
                  width: "180px",
                  height: "auto"
                }}
                data-aos="fade-up"
                data-aos-delay="200"
              />
              <Image
                src="/images/logo-3.svg"
                alt="Logo 3"
                width={100}
                height={100}
                style={{
                  position: "absolute",
                  bottom: "170px",
                  left: "70px",
                  width: "120px",
                  height: "auto"
                }}
                data-aos="fade-up"
                data-aos-delay="300"
              />
              <Image
                src="/images/logo-4.svg"
                alt="Logo 4"
                width={100}
                height={100}
                style={{
                  position: "absolute",
                  bottom: "170px",
                  right: "180px",
                  width: "140px",
                  height: "auto"
                }}
                data-aos="fade-up"
                data-aos-delay="400"
              />
              <Image
                src="/images/logo-5.svg"
                alt="Logo 5"
                width={100}
                height={100}
                style={{
                  position: "absolute",
                  bottom: "110px",
                  left: "72%",
                  transform: "translate(-50%, -50%)",
                  width: "120px",
                  height: "auto"
                }}
                data-aos="fade-up"
                data-aos-delay="500"
              />
            </div>
          </div>
        </div>

        <div
          className="companies-section"
          style={{ maxWidth: "1000px", marginTop: "12rem", marginBottom: "12rem" }}
          data-aos="fade-up"
        >
          <h2
            style={{
              fontSize: "1rem",
              marginBottom: "1.5rem",
              color: "#1b1a26",
              textTransform: "uppercase",
              letterSpacing: "2px",
            }}
          >
            Products I've led design for:
          </h2>

            <div style={{ marginBottom: "3rem" }} data-aos="fade-up" data-aos-delay="100">
              <h3
                style={{
                  fontSize: "1.2rem",
                  marginBottom: "0.8rem",
                  color: "#1b1a26",
                  fontWeight: "600",
                }}
              >
                Multisig Labs
              </h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                <li
                  style={{
                    marginBottom: "0.5rem",
                    fontSize: "1.2rem",
                    borderBottom: "1px solid rgb(195, 193, 213)",
                    borderStyle: "dotted",
                    padding: "0.5em",
                  }}
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <a
                    href="https://hypha.sh"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#6663ff", textDecoration: "none", display: "flex", alignItems: "center", justifyContent: "space-between" }}
                  >
                    <span>Hypha</span>
                    <FiArrowUpRight style={{ marginLeft: "0.5rem", fontSize: "1.5rem" }} />
                  </a>
                </li>
                <li
                  style={{
                    marginBottom: "0.5rem",
                    fontSize: "1.2rem",
                    borderBottom: "1px solid rgb(195, 193, 213)",
                    borderStyle: "dotted",
                    padding: "0.5em",
                  }}
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <a
                    href="https://gogopool.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#6663ff", textDecoration: "none", display: "flex", alignItems: "center", justifyContent: "space-between" }}
                  >
                    <span>Gogopool</span>
                    <FiArrowUpRight style={{ marginLeft: "0.5rem", fontSize: "1.5rem" }} />
                  </a>
                </li>
                <li
                  style={{
                    marginBottom: "0.5rem",
                    fontSize: "1.2rem",
                    borderBottom: "1px solid rgb(195, 193, 213)",
                    borderStyle: "dotted",
                    padding: "0.5em",
                  }}
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <a
                    href="https://pandasia.io"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#6663ff", textDecoration: "none", display: "flex", alignItems: "center", justifyContent: "space-between" }}
                  >
                    <span>Pandasia</span>
                    <FiArrowUpRight style={{ marginLeft: "0.5rem", fontSize: "1.5rem" }} />
                  </a>
                </li>
              </ul>
            </div>
            <div style={{ marginBottom: "3rem" }} data-aos="fade-up" data-aos-delay="500">
            <h3
                style={{
                  fontSize: "1.2rem",
                  marginBottom: "0.8rem",
                  color: "#1b1a26",
                  fontWeight: "600",
                }}
              >
                Ready Five
              </h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                <li
                  style={{
                    marginBottom: "0.5rem",
                    fontSize: "1.2rem",
                    borderBottom: "1px solid rgb(195, 193, 213)",
                    borderStyle: "dotted",
                    padding: "0.5em",
                  }}
                  data-aos="fade-up"
                  data-aos-delay="600"
                >
                  <a
                    href="https://www.readyfive.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#6663ff", textDecoration: "none", display: "flex", alignItems: "center", justifyContent: "space-between" }}
                  >
                    <span>Ready Five - Web</span>
                    <FiArrowUpRight style={{ marginLeft: "0.5rem", fontSize: "1.5rem" }} />
                  </a>
                </li>
                <li
                  style={{
                    marginBottom: "0.5rem",
                    fontSize: "1.2rem",
                    borderBottom: "1px solid rgb(195, 193, 213)",
                    borderStyle: "dotted",
                    padding: "0.5em",
                  }}
                  data-aos="fade-up"
                  data-aos-delay="600"
                >
                  <a
                    href="https://www.readyfive.io/mobile"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#6663ff", textDecoration: "none", display: "flex", alignItems: "center", justifyContent: "space-between" }}
                  >
                    <span>Ready Five - Mobile iOS & Android</span>
                    <FiArrowUpRight style={{ marginLeft: "0.5rem", fontSize: "1.5rem" }} />
                  </a>
                </li>
              </ul>
            </div>

            <div data-aos="fade-up" data-aos-delay="500">
              <h3
                style={{
                  fontSize: "1.2rem",
                  marginBottom: "0.8rem",
                  color: "#1b1a26",
                  fontWeight: "600",
                }}
              >
                Planning Center
              </h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                <li
                  style={{
                    marginBottom: "0.5rem",
                    fontSize: "1.2rem",
                    borderBottom: "1px solid rgb(195, 193, 213)",
                    borderStyle: "dotted",
                    padding: "0.5em",
                  }}
                  data-aos="fade-up"
                  data-aos-delay="600"
                >
                  <a
                    href="https://www.planningcenter.com/music-stand"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#6663ff", textDecoration: "none", display: "flex", alignItems: "center", justifyContent: "space-between" }}
                  >
                    <span>Music Stand</span>
                    <FiArrowUpRight style={{ marginLeft: "0.5rem", fontSize: "1.5rem" }} />
                  </a>
                </li>
                <li
                  style={{
                    marginBottom: "0.5rem",
                    fontSize: "1.2rem",
                    borderBottom: "1px solid rgb(195, 193, 213)",
                    borderStyle: "dotted",
                    padding: "0.5em",
                  }}
                  data-aos="fade-up"
                  data-aos-delay="700"
                >
                  <a
                    href="https://www.planningcenter.com/services"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#6663ff", textDecoration: "none", display: "flex", alignItems: "center", justifyContent: "space-between" }}
                  >
                    <span>Services - Mobile iOS & Android</span>
                    <FiArrowUpRight style={{ marginLeft: "0.5rem", fontSize: "1.5rem" }} />
                  </a>
                </li>
                <li
                  style={{
                    marginBottom: "0.5rem",
                    fontSize: "1.2rem",
                    borderBottom: "1px solid rgb(195, 193, 213)",
                    borderStyle: "dotted",
                    padding: "0.5em",
                  }}
                  data-aos="fade-up"
                  data-aos-delay="800"
                >
                  <a
                    href="https://www.planningcenter.com/people"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#6663ff", textDecoration: "none", display: "flex", alignItems: "center", justifyContent: "space-between" }}
                  >
                    <span>People</span>
                    <FiArrowUpRight style={{ marginLeft: "0.5rem", fontSize: "1.5rem" }} />
                  </a>
                </li>
                <li
                  style={{
                    marginBottom: "0.5rem",
                    fontSize: "1.2rem",
                    borderBottom: "1px solid rgb(195, 193, 213)",
                    borderStyle: "dotted",
                    padding: "0.5em",
                  }}
                  data-aos="fade-up"
                  data-aos-delay="900"
                >
                  <a
                    href="https://www.planningcenter.com/registrations"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#6663ff", textDecoration: "none", display: "flex", alignItems: "center", justifyContent: "space-between" }}
                  >
                    <span>Registrations</span>
                    <FiArrowUpRight style={{ marginLeft: "0.5rem", fontSize: "1.5rem" }} />
                  </a>
                </li>
              </ul>
            </div>
        </div>
      </div>
      {selectedTag ? (
        <PostList
          posts={allPostsData.filter((post) => post.tags.includes(selectedTag))}
        />
      ) : (
        <OrganizedPostList posts={allPostsData} />
      )}
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
