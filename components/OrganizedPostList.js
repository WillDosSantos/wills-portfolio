import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { formatDate } from "../lib/dateUtils";
import AOS from "aos";

export default function OrganizedPostList({ posts }) {
  const [selectedTag, setSelectedTag] = useState(null);

  useEffect(() => {
    // This will refresh the AOS animations every time selectedTag changes.
    AOS.refresh();
  }, [selectedTag]);

  function truncateString(str, num) {
    if (!str || str.length <= num) {
      return str || "";
    }
    return str.slice(0, num) + "...";
  }

  // Define the order of categories
  const categoryOrder = ["case studies", "UI & UX", "games", "illustration", "motion"];
  
  // Group posts by category
  const groupedPosts = categoryOrder.reduce((acc, category) => {
    const categoryPosts = posts.filter(post => post.tags.includes(category));
    if (categoryPosts.length > 0) {
      acc[category] = categoryPosts;
    }
    return acc;
  }, {});

  return (
    <div className="organized-post-container">
      {Object.entries(groupedPosts).map(([category, categoryPosts]) => (
        <div key={category} className="post-section" data-aos="fade-up">
          <h2 className="section-title">{category}</h2>
          <div className="post-container">
            {categoryPosts.map(({ id, title, date, tags, featureImage, description }) => (
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
        </div>
      ))}
    </div>
  );
}
