import { useState, useEffect } from "react";

import { getSortedPostsData } from "../lib/posts";
import { formatDate } from "../lib/dateUtils";
import Layout from "../components/Layout";
import HeaderQuote from "../components/HeaderQuote";
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
      <HeaderQuote
        quote="A person who never made a mistake never tried anything new."
        author="Albert Einstein"
      />
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
