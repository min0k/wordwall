import { wordEntry } from "../ts/types";

export async function addNewWord(data: wordEntry) {
  try {
    let response = await fetch(
      `https://wordwallserver-et57m7q3ca-uw.a.run.app/add-word?word=${data.word}&user=${data.user}`
    );
    return response;
  } catch (err) {
    console.error(err);
  }
}
