import { useEffect, useState } from "react";

interface IWordData {
  createdAt: string;
  updatedAt: string;
  user: string;
  word: string;
  __v: number;
  _id: string;
}

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
  }, []);
  console.log(wordwall);

  const Wall = wordwall?.map((el: IWordData) => {
    return <p key={el._id}>{el.word}</p>;
  });

  return <div>{Wall}</div>;
}
