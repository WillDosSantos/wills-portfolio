import { useEffect } from "react";
import Layout from "../components/Layout";
import AOS from "aos";
import { motion } from "framer-motion";

const talks = [
  {
    id: "yo9i116y0eE",
    title: "Function with Form",
    videoId: "yo9i116y0eE",
  },
  {
    id: "-vi1y3pjmT4",
    title: "Avoiding Burnout",
    videoId: "-vi1y3pjmT4",
  },
  {
    id: "RTW4Ev8CvIk",
    title: "Speed Talk - 2D Game Art",
    videoId: "RTW4Ev8CvIk",
  },
  {
    id: "JNvjW3gxA0M",
    title: "Lottie Animations for your website",
    videoId: "JNvjW3gxA0M",
  },
];

export default function Speaking() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <Layout isHomePage={false}>
      <div className="hero-text" data-aos="fade-up">
        <h1>Speaking</h1>
        <p style={{ fontSize: "1.2rem", marginTop: "1em", maxWidth: "800px" }}>
          Tech talks and presentations on design, UX, and building products.
        </p>
      </div>
      <div data-aos="fade-up" className="post-container">
        {talks.map((talk) => (
          <motion.div
            className="post-card"
            key={talk.id}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <div className="video-container">
              <iframe
                src={`https://www.youtube.com/embed/${talk.videoId}`}
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div style={{ position: "relative", transform: "none", opacity: 1, padding: "1.5rem" }}>
              <h2>{talk.title}</h2>
            </div>
          </motion.div>
        ))}
      </div>
    </Layout>
  );
}

