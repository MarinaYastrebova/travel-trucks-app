import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>
        <span>Travel</span>Trucks
      </Link>
      <nav className={styles.nav}>
        <Link href="/" className={styles.navLink}>
          Home
        </Link>
        <Link href="/catalog" className={styles.navLink}>
          Catalog
        </Link>
      </nav>
    </header>
  );
}
