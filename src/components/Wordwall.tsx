import { useEffect, useState } from "react";

export default function Wordwall() {
  const [wordwall, setWordwall] = useState<any>();

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

  return <div>Wordwall</div>;
}
