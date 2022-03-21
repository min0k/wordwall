import Form from "../components/Form";
import { useEffect } from "react";

export default function Wall() {
  useEffect(() => {
    console.log("Hello");
    fetch("https://wordwallserver-et57m7q3ca-uw.a.run.app/all-words").then(
      (res) => {
        res.json().then((data) => {
          console.log(data);
        });
      }
    );
  });
  return (
    <div>
      <Form />
    </div>
  );
}
