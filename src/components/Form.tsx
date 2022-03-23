import { useForm } from "react-hook-form";
import { IFormProps as IProps } from "../ts/interface";
import { wordEntry } from "../ts/types";

export default function Form(props: IProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<wordEntry>();

  return (
    <div>
      <form onSubmit={handleSubmit(props.setNewUser)}>
        <input
          placeholder="name"
          {...register("user", {
            pattern: {
              value: /^\S*$/,
              message: "no spaces",
            },
            required: "name is required",
            maxLength: { value: 50, message: "is your name really this long?" },
          })}
        />
        <p>{errors.user?.message}</p>
        <input
          placeholder="word"
          {...register("word", {
            pattern: {
              value: /^[a-zA-Z]+$/,
              message: "only letters",
            },
            required: "word is required",
            maxLength: {
              value: 45,
              message:
                "the longest word in english is 45 characters long - pneumonoultramicroscopicsilicovolcanoconiosis",
            },
          })}
        />
        <p>{errors.word?.message}</p>
        <input type="submit" />
      </form>
    </div>
  );
}
