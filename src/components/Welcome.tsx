import styles from "./Welcome.module.css";

export default function Welcome() {
  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Hello</h1>

      <p className={styles.text}>
        In order to see the wall you must provide your indentity and a word
      </p>
    </div>
  );
}
