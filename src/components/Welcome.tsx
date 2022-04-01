import styles from "./Welcome.module.css";

export default function Welcome() {
  return (
    <div className={styles.container}>
      <h1>Welcome to the Wordwall</h1>
      <p className={styles.text}>Tell the wall who you are along with a word</p>

      <p></p>
    </div>
  );
}
