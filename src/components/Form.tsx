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
          autoComplete="off"
          placeholder="JobuTupaki"
          className={styles.input}
          {...register("user", {
            pattern: {
              value: /^\S*$/,
              message: "No spaces",
            },
            required: "Identity required",
            maxLength: {
              value: 20,
              message: "Identity must be shorter than 20 characters",
            },
          })}
        />
        <p className={styles.errorMessage}>{errors.user?.message}</p>
        <label className={styles.labels}>What is your word of choice </label>
        <input
          autoComplete="off"
          placeholder="Bagel"
          className={styles.input}
          {...register("word", {
            pattern: {
              value: /^[a-zA-Z]+$/,
              message: "Letters only",
            },
            required: "Word required",
            maxLength: {
              value: 20,
              message: "Word must be shorter than 20 characters",
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
