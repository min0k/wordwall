import { useEffect, useState } from "react";
import { IWordData } from "../ts/interface";
import styles from "./Wordwall.module.css";

export default function Wordwall() {
  const [wordwall, setWordwall] = useState<IWordData[]>();
  const [loading, setLoading] = useState<Boolean>(true);

  useEffect(() => {
    async function getAllWords() {
      const res = await fetch(
        "https://wordwallserver-et57m7q3ca-uw.a.run.app/all-words"
      );
      const data = await res.json();
      setWordwall(data);
      setLoading(false);
    }
    getAllWords();

    return () => {
      setWordwall([]);
    };
  }, []);

  console.log(wordwall);

  if (loading) {
    return <div className={styles.container}>loading...</div>;
  }

  return (
    <div className={styles.container}>
      {wordwall?.map((el) => {
        return (
          <div className={styles.word} key={el._id}>
            {el.word}
            <span className={styles.wordHover}>
              <p className={styles.hoverText}>
                By {el.user} <br /> on {el.createdAt.substring(0, 10)}
              </p>
            </span>
          </div>
        );
      })}
    </div>
  );
}
