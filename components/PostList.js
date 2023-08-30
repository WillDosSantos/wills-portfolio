import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { formatDate } from "../lib/dateUtils";

export default function PostList({ posts }) {
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
  );
}
