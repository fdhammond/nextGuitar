import Image from "next/image";
import Link from "next/link";
import styles from "../styles/blog.module.css";

export default function Posts({ post }) {
  const { title, url, content, publishedAt, image } = post;

  const date = new Date(`${publishedAt}`);
  const formatDate = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: false,
    timeZone: "UTC",
  }).format(date);

  return (
    <div className={`${styles.post} ${styles.marginTop}`}>
      <div className={styles.contenido}>
        <h3>{title}</h3>
        <Image
          src={image.data.attributes.formats.medium.url}
          alt={`${title}`}
          width={600}
          height={400}
          className={styles.marginTop}
        />
        <p className={styles.fecha}>{formatDate}</p>
        <p className={`${styles.resumen} ${styles.texto}`}>{content}</p>
        <Link href={`/posts/${url}`} legacyBehavior>
          <a className={styles.enlace}>View Post</a>
        </Link>
      </div>
    </div>
  );
}
