import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <div>
      <nav>
        <Link to={"/"} className={styles.wordwall}>
          wordwall
        </Link>
        <Link to={"/"}>stats</Link>
        <Link to={"/"}>about</Link>
      </nav>
    </div>
  );
}
