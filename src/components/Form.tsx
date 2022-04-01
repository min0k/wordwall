import { useForm } from "react-hook-form";
import { IFormProps as IProps } from "../ts/interface";
import { wordEntry } from "../ts/types";
import styles from "./Form.module.css";

export default function Form(props: IProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<wordEntry>();

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit(props.setNewUser)}>
        <label className={styles.labels}>Who are you </label>
        <input
          autoFocus
          placeholder="JobuTupaki"
          className={styles.input}
          {...register("user", {
            pattern: {
              value: /^\S*$/,
              message: "No spaces",
            },
            required: "Name is required",
            maxLength: {
              value: 50,
              message: "Are you sure you entered your name correctly?",
            },
          })}
        />
        <p className={styles.errorMessage}>{errors.user?.message}</p>
        <label className={styles.labels}>What is your word of choice </label>
        <input
          placeholder="Bagel"
          className={styles.input}
          {...register("word", {
            pattern: {
              value: /^[a-zA-Z]+$/,
              message: "Letters only",
            },
            required: "A Word is required",
            maxLength: {
              value: 45,
              message: "The longest word in english is 45 characters long...",
            },
          })}
        />
        <p className={styles.errorMessage}>{errors.word?.message}</p>
        <button type="submit" className={styles.submitButton}>
          Submit
        </button>
      </form>
    </div>
  );
}
