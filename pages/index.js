import Link from "next/link";
import Layout from "@/components/layout";

export default function Home() {
  return (
    <>
      <Layout title={"Home"} description={"Guitar Blog and sales"}>
        <h1>Hello World</h1>
        <Link href="/about">A nosotros</Link>
      </Layout>
    </>
  );
}
