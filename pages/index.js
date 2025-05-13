import { useState, useEffect } from "react";

import { getSortedPostsData } from "../lib/posts";
import { formatDate } from "../lib/dateUtils";
import Layout from "../components/Layout";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import PostList from "../components/PostList";


import AOS from "aos";

export default function Home({ allPostsData }) {
  const [selectedTag, setSelectedTag] = useState(null);

  useEffect(() => {
    // This will refresh the AOS animations every time selectedTag changes.
    AOS.refresh();
  }, [selectedTag]);

  return (
    <Layout isHomePage={true} selectedTag={selectedTag} onTagSelect={setSelectedTag}>
      <div className="hero-text"><h1>Let’s make <br></br>something amazing.</h1> Will Dos Santos Designs is a design studio based in San Diego, California. We specialize in branding, illustration, user interface & everything in between.</div>
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
