var fileUpload = document.getElementById("entrada");
var enviar = document.getElementById("enviar");
var label = document.getElementById("Meta");
enviar.addEventListener("click", function (event) {
  if (fileUpload.files.length == 0) {
    alert("Nenhum Arquivo Selecionado");
    return;
  }
});

fileUpload.addEventListener("change", function (e) {
  const arquivo = e.target;
  const file = arquivo.files[0];

  if (file) {
    const nome = file.name;
    label.innerText = nome;
  }
});
