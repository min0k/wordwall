import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <div className={styles.container}>
      <nav className={styles.navContainer}>
        <Link to={"/"} className={styles.logoText}>
          WORDWALL.
        </Link>
        <div className={styles.navLinks}>
          <Link to={"/stats"} className={styles.text}>
            STATS
          </Link>
          <Link to={"/about"} className={styles.text}>
            ABOUT
          </Link>
        </div>
      </nav>
    </div>
  );
}
