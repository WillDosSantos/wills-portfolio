import React, { useState, useEffect } from "react";
import { getAllPostIds, getPostData } from "../../lib/posts";
import { formatDate } from "../../lib/dateUtils";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import Image from "next/image";
import ContactModal from "../../components/ContactModal";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

export default function Post({ postData }) {
  const [selectedTag, setSelectedTag] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    console.log(postData.content); // Log the Markdown content
  }, [postData]);

  // Function to handle opening the modal
  const handleOpenModal = () => {
    setModalOpen(true);
  };

  // Function to handle closing the modal
  const handleCloseModal = () => {
    setModalOpen(false);
  };

  // Handle adding/removing the modal-open class to the body element
  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
  }, [isModalOpen]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    // Now you'd probably want to format this data and send it to your backend or third-party service
    // ...

    // Close the modal
    setModalOpen(false);
  };

  return (
    <div className="container">
      <ContactModal isOpen={isModalOpen} onClose={handleCloseModal} />
      {/* <Sidebar /> */}
      <main>
        <Navbar
          onTagSelect={(tag) => setSelectedTag(tag)}
          onOpenModal={handleOpenModal}
        />
        <div data-aos="fade-up" className="blog-post-container">
          <h2>{postData.title}</h2>
          <div className="blog-post-details">
            <p>{postData.tags}</p>
            <p>{formatDate(postData.date)}</p>
          </div>
          {postData.featureImage && (
            <Image
              src={postData.featureImage}
              alt={`Featured image for ${postData.title}`}
              width={600}
              height={400}
              className="post-feature-image"
            />
          )}
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
          >
            {postData.content}
          </ReactMarkdown>
        </div>
      </main>
    </div>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
