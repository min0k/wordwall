import Form from "../components/Form";
import { useEffect, useState } from "react";

export default function Wall() {
  const [wordwall, setWordwall] = useState<any>();
  const [newUser, setNewUser] = useState<boolean>(true);

  useEffect(() => {
    async function getAllWords() {
      const res = await fetch(
        "https://wordwallserver-et57m7q3ca-uw.a.run.app/all-words"
      );
      const data = await res.json();
      setWordwall(data);
    }
    getAllWords();

    if (localStorage.getItem("isNewUser") === "false") {
      setNewUser(false);
    }
  }, []);
  console.log(wordwall);

  if (newUser) {
    return <Form setNewUser={setNewUser} />;
  }

  return (
    <div>
      <h1>Wall</h1>
    </div>
  );
}
