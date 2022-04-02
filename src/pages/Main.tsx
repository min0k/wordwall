import { useEffect, useState } from "react";
import Wordwall from "../components/Wordwall";
import FormController from "../components/FormController";
import Welcome from "../components/Welcome";

import styles from "./Main.module.css";

export default function Mainpage() {
  const [newUser, setNewUser] = useState<boolean>(false);

  useEffect(() => {
    if (localStorage.getItem("isNewUser") === null) {
      setNewUser(true);
    }
  }, []);

  if (newUser) {
    return (
      <div className={styles.container}>
        <div className={styles.background} />
        <Welcome />
        <FormController setNewUser={setNewUser} />
      </div>
    );
  }

  return (
    <div>
      <Wordwall />
    </div>
  );
}
