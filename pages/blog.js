import Link from "next/link";
import Layout from "@/components/layout";

export default function Blog() {
  return (
    <>
      <Layout
        title={"Blog"}
        description="Guitar-Next Blog about guitars and shop">
        <h1>Blog</h1>
        <Link href="/">Back to home</Link>
      </Layout>
    </>
  );
}
