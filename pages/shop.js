import Layout from "@/components/layout";
import Guitar from "@/components/guitar";
import styles from "../styles/grid.module.css";

export default function Shop({ guitars }) {
  return (
    <>
      <Layout
        title={"Shop"}
        description="Guitar-Next guitar shop, guitar sales">
        <h1>Shop</h1>
        <main className="contenedor">
          <h1 className="heading">Our Collection</h1>

          <div className={styles.grid}>
            {guitars.map((guitar) => (
              <Guitar key={guitar.id} guitar={guitar.attributes} />
            ))}
          </div>
        </main>
      </Layout>
    </>
  );
}

// export async function getStaticProps() {
//   const response = await fetch(`${process.env.API_URL}/guitars?populate=image`);
//   const { data: guitars } = await response.json();

//   return {
//     props: {
//       guitars,
//     },
//   };
// }

export async function getServerSideProps() {
  const response = await fetch(`${process.env.API_URL}/guitars?populate=image`);
  const { data: guitars } = await response.json();

  return {
    props: {
      guitars,
    },
  };
}
