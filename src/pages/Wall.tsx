import Form from "../components/Form";
import { useEffect, useState } from "react";
// import getAllWords from "../api/getAllWords";

export default function Wall() {
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

  return (
    <div>
      <Form />
    </div>
  );
}
