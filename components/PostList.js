import { useState, useEffect } from "react";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { formatDate } from "../lib/dateUtils";
import AOS from "aos";

export default function PostList({ posts }) {

  function truncateString(str, num) {
    if (!str || str.length <= num) {
      return str || "";
    }
    return str.slice(0, num) + "...";
  }
  
  const [selectedTag, setSelectedTag] = useState(null);

  useEffect(() => {
    // This will refresh the AOS animations every time selectedTag changes.
    AOS.refresh();
  }, [selectedTag]);
  
  return (
    <div data-aos="fade-up" className="post-container">
      {posts.map(({ id, title, date, tags, featureImage, description }) => (
        <motion.div
          className="post-card"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          key={id}
        >
          <Link href={`/posts/${id}`}>
            <div className="post-card-content">
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
              <div className="post-card-text">
                <h2>{title}</h2>
                <p className="post-card--desc">{truncateString(description, 100)}</p>
                <div className="post-card__footer">
                  <ul>
                    {tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                  <p>{formatDate(date)}</p>
                </div>
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
