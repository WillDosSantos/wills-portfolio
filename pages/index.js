import { useState, useEffect } from "react";

import { getSortedPostsData } from "../lib/posts";
import { formatDate } from "../lib/dateUtils";
import Layout from "../components/Layout";
import HeaderQuote from "../components/HeaderQuote";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

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
      <div data-aos="fade-up" className="post-container" key={selectedTag}>
        {allPostsData
          .filter((post) => !selectedTag || post.tags.includes(selectedTag))
          .map(({ id, title, date, tags, featureImage, description }) => (
            <motion.div
              className="post-card"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Link key={id} href={`/posts/${id}`}>
                {featureImage && (
                  <div className="img-container">
                    <Image
                      src={featureImage}
                      alt={`Feature image for ${title}`}
                      width={500}
                      height={300}
                      style={{
                        width: "100%",
                      }}
                    />
                  </div>
                )}
                <h2>{title}</h2>
                <p className="post-card--desc">{description}</p>
                <div className="post-card__footer">
                  <ul>
                    {tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                  <p>{formatDate(date)}</p>
                </div>
              </Link>
            </motion.div>
          ))}
      </div>
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
