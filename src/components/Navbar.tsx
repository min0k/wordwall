import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <div className={styles.container}>
      <nav className={styles.navContainer}>
        <Link to={"/"} className={styles.logoText}>
          WORDWALL.
        </Link>
        <div className={styles.navLinks}></div>
      </nav>
    </div>
  );
}
