import { addNewWord } from "../api/addNewWord";
import Form from "./Form";
import { wordEntry } from "../ts/types";
import { IFormControllerProps as IProps } from "../ts/interface";

export default function FormController(props: IProps) {
  async function onClick(data: wordEntry) {
    const response = await addNewWord(data);
    if (response?.ok) {
      props.setNewUser(false);
      localStorage.setItem("isNewUser", "false");
    }
  }

  return <Form setNewUser={onClick} />;
}
