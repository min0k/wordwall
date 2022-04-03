import styles from "./Welcome.module.css";

export default function Welcome() {
  return (
    <div className={styles.container}>
      <p className={styles.text}>
        To see the wall, provide your indentity and a word.
      </p>
    </div>
  );
}
