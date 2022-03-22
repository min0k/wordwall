import Form from "../components/Form";
import { useEffect, useState } from "react";
import Wordwall from "../components/Wordwall";

export default function Mainpage() {
  const [newUser, setNewUser] = useState<boolean>(true);

  useEffect(() => {
    if (localStorage.getItem("isNewUser") === "false") {
      setNewUser(false);
    }
  }, []);

  if (newUser) {
    return <Form setNewUser={setNewUser} />;
  }

  return (
    <div>
      <Wordwall />
    </div>
  );
}
