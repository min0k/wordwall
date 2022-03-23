import { wordEntry } from "./types";

export interface IWordData {
  createdAt: string;
  updatedAt: string;
  user: string;
  word: string;
  __v: number;
  _id: string;
}

export interface IFormControllerProps {
  setNewUser: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IFormProps {
  setNewUser: (data: wordEntry) => void;
}
