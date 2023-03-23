import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/header.module.css";

export default function Header() {
  const router = useRouter();

  return (
    <header className={styles.header}>
      <div className={`contenedor ${styles.navbar}`}>
        <Link href="/" legacyBehavior>
          <a>
            <Image src="/img/logo.svg" width={300} height={40} alt="logo" />
          </a>
        </Link>
        <nav className={styles.navigation}>
          <Link href="/" legacyBehavior>
            <a className={router.pathname === "/" ? styles.active : ""}>Home</a>
          </Link>
          <Link href="/about" legacyBehavior>
            <a className={router.pathname === "/about" ? styles.active : ""}>
              About
            </a>
          </Link>
          <Link href="/blog" legacyBehavior>
            <a className={router.pathname === "/blog" ? styles.active : ""}>
              Blog
            </a>
          </Link>
          <Link href="/shop" legacyBehavior>
            <a className={router.pathname === "/shop" ? styles.active : ""}>
              Shop
            </a>
          </Link>
        </nav>
      </div>
    </header>
  );
}
