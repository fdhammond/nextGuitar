import Link from "next/link";
import Layout from "@/components/layout";
import styles from "../styles/grid.module.css";

import Posts from "@/components/posts";

export default function Blog({ posts }) {
  return (
    <>
      <Layout
        title={"Blog"}
        description="Guitar-Next Blog about guitars and shop">
        <h1>Blog</h1>
        {posts.map((post) => (
          <Posts key={post.id} post={post.attributes} />
        ))}
      </Layout>
    </>
  );
}

export async function getServerSideProps() {
  const response = await fetch(`${process.env.API_URL}/posts?populate=image`);
  const { data: posts } = await response.json();

  return {
    props: {
      posts,
    },
  };
}
