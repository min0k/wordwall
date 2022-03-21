import { useForm } from "react-hook-form";

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    fetch(
      `https://wordwallserver-et57m7q3ca-uw.a.run.app/add-word?word=${data.word}&user=${data.name}`
    )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        placeholder="name"
        {...register("name", {
          pattern: {
            value: /^\S*$/,
            message: "no spaces",
          },
          required: "name is required",
          maxLength: { value: 50, message: "is your name really this long?" },
        })}
      />
      <p>{errors.name?.message}</p>
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
  );
}
