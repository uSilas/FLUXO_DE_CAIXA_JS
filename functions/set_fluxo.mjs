var entrada_value = document.getElementById("entradas").value;
var fluxo = document.getElementById("fluxo").value;
var enviar = document.getElementById("enviar");

enviar.addEventListener("click", () => {
  let data = {};
  const form = document.getElementById("form");
  const formData = new FormData(form);
  formData.forEach((value, key) => {
    data[key] = value;
  });
  const entradas = {
    id_sheet: "16gi3tBBpvUVRZUYRw72JiR1WjT6TE3Hg",
    data: entradas_value,
    range: "!A:C",
  };
  const option = {
    method: "POST",
    headers: {
      "Content Type": "application/json",
    },
    body: JSON.stringify(),
  };
  fetch("https://36e6-170-82-230-7.ngrok-free.app/sheet/salgadinho")
    .then((data) => {
      if (!data.ok) {
        throw Error(data.status);
      }
      return data.json();
    })
    .then();
});
