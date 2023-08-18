import React, { useState } from "react";
import { getAllPostIds, getPostData } from "../../lib/posts";
import { formatDate } from "../../lib/dateUtils";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import Image from 'next/image';

export default function Post({ postData }) {
  const [selectedTag, setSelectedTag] = useState(null);
  
  return (
    <div className="container">
      <Sidebar />
      <main>
        <Navbar onTagSelect={(tag) => setSelectedTag(tag)} />
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
              width={600} // or whatever dimensions you prefer
              height={400}
              className="post-feature-image"
            />
          )}
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
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
