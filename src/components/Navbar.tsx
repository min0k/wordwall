import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <div className={styles.container}>
      <nav className={styles.navContainer}>
        <Link to={"/"} className={styles.text}>
          wordwall
        </Link>
        <div className={styles.navLinks}>
          <Link to={"/stats"} className={styles.text}>
            stats
          </Link>
          <Link to={"/about"} className={styles.text}>
            about
          </Link>
        </div>
      </nav>
    </div>
  );
}
