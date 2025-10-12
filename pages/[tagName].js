import { useState, useEffect } from "react";
import AOS from "aos";
import { useRouter } from 'next/router';
import { getSortedPostsData } from '../lib/posts';
import Layout from '../components/Layout';
import PostList from "../components/PostList";

export default function TagPage({ allPostsData }) {
  const router = useRouter();
  const { tagName } = router.query;
  let tagNameFromURL = tagName.replace(/-/g, " ");
  
  // Handle special cases for URL decoding
  if (tagNameFromURL === 'ui ux') {
    tagNameFromURL = 'UI & UX';
  }
  
  const filteredPosts = allPostsData.filter(post => post.tags.includes(tagNameFromURL));

  const [selectedTag, setSelectedTag] = useState(null);

  useEffect(() => {
    // This will refresh the AOS animations every time selectedTag changes.
    AOS.refresh();
  }, [selectedTag]);

  return (
    <Layout isHomePage={true}>
      <div className="hero-text"><h1>{tagNameFromURL}</h1></div>
       <PostList posts={filteredPosts} />
    </Layout>
  );
}

export async function getStaticPaths() {
  // Fetch all posts data
  const allPostsData = getSortedPostsData();  // Use getSortedPostsData here

  // Extract and deduplicate all tags
  const allTags = Array.from(new Set(allPostsData.flatMap(post => post.tags)));

  // Generate paths for each tag
  const paths = allTags.map(tag => {
    let urlTag = tag.replace(/ /g, "-").toLowerCase();
    // Handle special case for UI & UX
    if (tag === 'UI & UX') {
      urlTag = 'ui-ux';
    }
    return { params: { tagName: urlTag } };
  });

  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData
    }
  };
}
