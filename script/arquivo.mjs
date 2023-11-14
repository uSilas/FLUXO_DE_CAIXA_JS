import { getDataXlsx } from "./extrair_dados_xlsx.mjs";
import { get_data } from "./get_entradas.mjs";
import { get_tabelaData } from "./get_entradas.mjs";

var fileUpload = document.getElementById("metas");
var enviar = document.getElementById("enviar");
var label = document.getElementById("Meta");
var select = document.getElementById("selecionar");
var alelo = document.getElementById("alelo");
var alelo_label = document.getElementById("alelo_label");

select.addEventListener("change", (e) => {
  if (select.value == "Filial") {
    alelo.style.display = "none";
    alelo_label.style.display = "none";
  } else {
    alelo.style.display = "block";
    alelo_label.style.display = "block";
  }
});

enviar.addEventListener("click", function (e) {
  var data_inicial = new Date(document.getElementById("data_inicial").value);
  var data_final = new Date(document.getElementById("data_final").value);
  const diferença = get_data(data_inicial, data_final);
  console.log(diferença);
  data_inicial = data_inicial.getDate();
  data_final = data_final.getDate();
  if (data_inicial > data_final) {
    alert("a data inicial está maior do que a final");
  }
});

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
  const primeira_data = document.getElementById("data_inicial").value;
  document.getElementById("data_inicial").stepDown(1);
  let data_inicial = document.getElementById("data_inicial").value;
  const data_final = document.getElementById("data_final").value;
  document.getElementById("data_inicial").value = primeira_data;
  data_inicial = data_inicial.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  data_inicial = data_inicial.replace(/(\d*)-(\d*)-(\d*).*/, "$3-$2-$1");
  const entradas = await getDataXlsx(file);
  const tabela_nova = get_tabelaData(data_inicial, data_final, entradas);
  console.log(tabela_nova);
  console.log(entradas);
});
