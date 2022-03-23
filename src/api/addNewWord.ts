import { wordEntry } from "../ts/types";

export const addNewWord = (data: wordEntry) => {
  fetch(
    `https://wordwallserver-et57m7q3ca-uw.a.run.app/add-word?word=${data.word}&user=${data.user}`
  )
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};
