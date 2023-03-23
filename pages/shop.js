import Link from "next/link";
import Layout from "@/components/layout";

export default function Shop() {
  return (
    <>
      <Layout
        title={"Shop"}
        description="Guitar-Next guitar shop, guitar sales">
        <h1>Shop</h1>
        <Link href="/">Back to home</Link>
      </Layout>
    </>
  );
}
