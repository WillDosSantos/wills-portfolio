import { useState, useEffect } from "react";

import { getSortedPostsData } from "../lib/posts";
import { formatDate } from "../lib/dateUtils";
import Layout from "../components/Layout";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import PostList from "../components/PostList";
import Typewriter from "../components/Typewriter";

import AOS from "aos";

export default function Home({ allPostsData }) {
  const [selectedTag, setSelectedTag] = useState(null);

  useEffect(() => {
    // This will refresh the AOS animations every time selectedTag changes.
    AOS.refresh();
  }, [selectedTag]);

  return (
    <Layout isHomePage={true} selectedTag={selectedTag} onTagSelect={setSelectedTag}>
      <div className="hero-text">
        <h1>
          <Typewriter 
            text="Let's make something amazing!" 
            speed={80} 
            delay={300}
          />
        </h1>
        <p style={{ maxWidth: "1000px" }}>
          Hi, I'm Will - a designer with over 15 years experience across multiple artistic mediums. 
          I love designing and I would love to work with you to help your vision reach its goals.
        </p>
      </div>
      <PostList posts={allPostsData.filter((post) => !selectedTag || post.tags.includes(selectedTag))} />
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
