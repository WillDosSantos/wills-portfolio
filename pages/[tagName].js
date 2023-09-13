import { useState, useEffect } from "react";
import AOS from "aos";
import { useRouter } from 'next/router';
import { getSortedPostsData } from '../lib/posts';
import Layout from '../components/Layout';
import PostList from "../components/PostList";

export default function TagPage({ allPostsData }) {
  const router = useRouter();
  const { tagName } = router.query;
  const tagNameFromURL = tagName.replace("-", " ");
  const filteredPosts = allPostsData.filter(post => post.tags.includes(tagNameFromURL));

  const [selectedTag, setSelectedTag] = useState(null);

  useEffect(() => {
    // This will refresh the AOS animations every time selectedTag changes.
    AOS.refresh();
  }, [selectedTag]);

  return (
    <Layout isHomePage={true}>
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
  const paths = allTags.map(tag => ({ params: { tagName: tag.replace(" ", "-").toLowerCase() } }));

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
