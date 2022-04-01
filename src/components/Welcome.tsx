import styles from "./Welcome.module.css";

export default function Welcome() {
  return (
    <div className={styles.container}>
      Welcome to the Wordwall.<br></br> Pick a word you like and add it for all
      to see.
    </div>
  );
}
