import { getDataXlsx } from "./extrair_dados_xlsx.mjs";

var fileUpload = document.getElementById("metas");
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

//input file Meta
const $file_meta = document.getElementById("metas");

$file_meta.addEventListener("change", async (e) => {
  const file = $file_meta.files[0];

  const data = await getDataXlsx(file);
  console.log(data);
});
