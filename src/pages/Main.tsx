import { useEffect, useState } from "react";
import Wordwall from "../components/Wordwall";
import FormController from "../components/FormController";

export default function Mainpage() {
  const [newUser, setNewUser] = useState<boolean>(false);

  useEffect(() => {
    if (localStorage.getItem("isNewUser") === null) {
      setNewUser(true);
    }
  }, []);

  if (newUser) {
    return <FormController setNewUser={setNewUser} />;
  }

  return (
    <div>
      <Wordwall />
    </div>
  );
}
