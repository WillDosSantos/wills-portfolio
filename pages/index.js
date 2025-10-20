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
      <div className="hero-text">
        <h1 style={{ maxWidth: "1000px" }}>
          <Typewriter
            text="Let's make something amazing!"
            speed={80}
            delay={300}
          />
        </h1>
        <p style={{ maxWidth: "1000px" }}>
          Hi, I'm Will - a designer with over 15 years experience across
          multiple artistic mediums. I love designing and I would love to work
          with you to help your vision reach its goals.
        </p>

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
            Products I've designed
          </h2>

            <div style={{ marginBottom: "2rem" }} data-aos="fade-up" data-aos-delay="100">
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
