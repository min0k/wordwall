import { useEffect, useState } from "react";
import { IWordData } from "../ts/interface";
import styles from "./Wordwall.module.css";

export default function Wordwall() {
  const [wordwall, setWordwall] = useState<IWordData[]>();

  useEffect(() => {
    async function getAllWords() {
      const res = await fetch(
        "https://wordwallserver-et57m7q3ca-uw.a.run.app/all-words"
      );
      const data = await res.json();
      setWordwall(data);
    }
    getAllWords();

    return () => {
      setWordwall([]);
    };
  }, []);

  console.log(wordwall);

  return (
    <div className={styles.container}>
      {wordwall?.map((el) => {
        return (
          <p className={styles.word} key={el._id}>
            {el.word}
          </p>
        );
      })}
    </div>
  );
}
