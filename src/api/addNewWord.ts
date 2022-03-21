export const addNewWord = (data: any) => {
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
