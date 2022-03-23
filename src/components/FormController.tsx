import { addNewWord } from "../api/addNewWord";
import Form from "./Form";
import { wordEntry } from "../ts/types";
import { IFormControllerProps as IProps } from "../ts/interface";

export default function FormController(props: IProps) {
  function onClick(data: wordEntry) {
    addNewWord(data);
    props.setNewUser(false);
    localStorage.setItem("isNewUser", "false");
  }

  return <Form setNewUser={onClick} />;
}
