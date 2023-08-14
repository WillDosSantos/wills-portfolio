import { useState } from "react";

import { getSortedPostsData } from "../lib/posts";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import HeaderQuote from "../components/HeaderQuote";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion"

export default function Home({ allPostsData }) {
  const [selectedTag, setSelectedTag] = useState(null);
  return (
    <div className="container">
      <Sidebar />
      <main>
        <Navbar onTagSelect={(tag) => setSelectedTag(tag)} />
        <HeaderQuote />
        <div data-aos="fade-up" className="post-container">
          {allPostsData
            .filter((post) => !selectedTag || post.tags.includes(selectedTag))
            .map(({ id, title, date, tags, featureImage }) => (
              <motion.div className="post-card" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Link key={id} href={`/posts/${id}`}>
                  {featureImage && (
                    <Image
                      src={featureImage}
                      alt={`Feature image for ${title}`}
                      width={500}
                      height={300}
                    />
                  )}
                  <h2>{title}</h2>
                  <p>{date}</p>
                  <ul>
                    {tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                </Link>
              </motion.div>
            ))}
        </div>
      </main>
    </div>
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
