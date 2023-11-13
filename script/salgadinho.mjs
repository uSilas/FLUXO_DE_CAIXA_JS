const form = document.getElementById("form");
const btn = document.getElementById("btn");
const input_salgadinho = document.getElementById("n_salgado");
const voltar = document.getElementById("img");

input_salgadinho.addEventListener("keyup", (e) => {
  let valorInput = e.target.value.replace(/[^0-9]/g, "");

  if (!(valorInput == e.target.value)) {
    console.log("ialdfja");
  }
});

btn.addEventListener("click", async (e) => {
  e.preventDefault();

  let data = {};
  const formData = new FormData(form);

  formData.forEach((value, key) => {
    data[key] = value;
  });

  let valorInput = data.n_salgado.replace(/[^0-9]/g, "");

  if (!(valorInput == data.n_salgado)) {
    return alert("Campo com letra");
  }

  if (data.unidade == "" || data.date == "") {
    return alert("Campos vazios, verefique se você preencheu todos os campos");
  }

  let sheet = [Object.values(data)];

  Swal.fire({
    title: "Please Wait !",
    html: "data uploading", // add html attribute if you want or remove
    allowOutsideClick: false,
    onBeforeOpen: () => {
      Swal.showLoading();
    },
  });

  try {
    const request = await fetch(
      "https://0c7a-170-82-230-7.ngrok-free.app/sheet/salgadinho",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id_sheet: "10FEDev4qucyT5Ty1T321DTSdqPw6jVneJD0HZ4f-Fw0",
          range: "!A:C",
          data: sheet,
        }),
      }
    );

    const response = await request.json().then((d) => {
      swal.fire({
        html: "Dados atualizados",
        showConfirmButton: false,
        onRender: function () {
          // there will only ever be one sweet alert open.
          $(".swal2-content").prepend(sweet_loader);
        },
      });
    });
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Something went wrong!",
      footer: '<a href="#">Why do I have this issue?</a>',
    });
  }
});

voltar.addEventListener("click", (e) => {
  window.location.href = "/";
});
