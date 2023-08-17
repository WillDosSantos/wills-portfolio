import { useState } from "react";

import { getSortedPostsData } from "../lib/posts";
import Layout  from "../components/Layout";
import HeaderQuote from "../components/HeaderQuote";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home({ allPostsData }) {
  const [selectedTag, setSelectedTag] = useState(null); 

  return (
    <Layout selectedTag={selectedTag} onTagSelect={setSelectedTag}>
        <HeaderQuote />
        <div data-aos="fade-up" className="post-container">
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
                          width: '100%'
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
                    <p>{date}</p>
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
