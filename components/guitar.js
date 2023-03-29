import Image from "next/image";
import Link from "next/link";
import styles from "../styles/guitars.module.css";

export default function Guitar({ guitar }) {
  const { description, image, name, price, url } = guitar;
  return (
    <div className={styles.guitarra}>
      <Image
        src={image.data.attributes.formats.medium.url}
        alt={`Guitar image ${name}`}
        width={600}
        height={400}></Image>
      <div className={styles.contenido}>
        <h3>{name}</h3>
        <p className={styles.descripcion}>{description}</p>
        <p className={styles.precio}>${price}</p>
        <Link href={`/guitars/${url}`} legacyBehavior>
          <a className={styles.enlace}>View product</a>
        </Link>
      </div>
    </div>
  );
}
