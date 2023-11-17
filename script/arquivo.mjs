import { getDataXlsx } from "./extrair_dados_xlsx.mjs";
import { get_data } from "./get_entradas.mjs";
import { get_tabelaData } from "./get_entradas.mjs";
import { get_entradas } from "./get_entradas.mjs";
import { to_Excel } from "./parse_to_excel.mjs";

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
    alelo.value = 0;
  } else {
    alelo.style.display = "block";
    alelo_label.style.display = "block";
  }
});

enviar.addEventListener("click", function (e) {
  e.preventDefault();
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

enviar.addEventListener("click", async function (event) {
  event.preventDefault();
  if (fileUpload.files.length == 0) {
    alert("Nenhum Arquivo Selecionado");
    return;
  }
  //pegando as metas separadas
  let data = {};
  const form = document.getElementById("form");
  const formData = new FormData(form);
  formData.forEach((value, key) => {
    data[key] = value;
  });
  const file = data.metas;
  let primeira_data = document.getElementById("data_inicial").value;
  document.getElementById("data_inicial").stepDown(1);
  let data_inicial = document.getElementById("data_inicial").value;
  let data_final = document.getElementById("data_final").value;

  document.getElementById("data_inicial").value = primeira_data;
  data_inicial = data_inicial.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  /////////////////////////////////////////

  //agora vamos pegar a diferença de dias//
  var DiffDias = get_data(primeira_data, data_final);
  console.log(DiffDias);
  ////////////////////////////////////////

  //agora vamos pegar a tabela de entradas//
  data_inicial = data_inicial.replace(/(\d*)-(\d*)-(\d*).*/, "$3-$2-$1");
  data_final = data_final.replace(/(\d*)-(\d*)-(\d*).*/, "$3-$2-$1");
  console.log(data_inicial, data_final);
  const entradas = await getDataXlsx(file);
  let tabela_nova = get_tabelaData(data_inicial, data_final, entradas);
  console.log(tabela_nova);
  console.log(data);
  console.log(formData);
  //////////////////

  //Agora vamos pegar a tabela de entradas///
  let porcentagem_nome = Array.from(document.querySelectorAll(".label_nome"));
  let porcentagem_valor = Array.from(document.querySelectorAll(".input_nome"));
  let porcentagens = [];
  porcentagem_valor.forEach(function (input) {
    porcentagens.push(input.value);
  });
  var nome = [];
  porcentagem_nome.forEach(function (label) {
    nome.push(label.textContent || label.innerText);
  });
  console.log(porcentagens);
  console.log(nome);
  if ((select.value = "Mac")) {
    var tabela_entradas = get_entradas(
      porcentagens,
      nome,
      tabela_nova,
      DiffDias
    );
    to_Excel(tabela_entradas, "FORMA DE RECEBIMENTO_MAC");
  } else if ((select.value = "Filial")) {
    var tabela_entradas = get_entradas(
      porcentagens,
      nome,
      tabela_nova,
      DiffDias
    );
    to_Excel(tabela_entradas, "FORMA DE RECEBIMENTO_FILIAL");
  }
  ///////////
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
const $file_meta = document.getElementById("metas"); /*, "$3-$2-$1");

/*$file_meta.addEventListener("change", async (e) => {
  const file = $file_meta.files[0];
  const primeira_data = document.getElementById("data_inicial").value;
  document.getElementById("data_inicial").stepDown(1);
  let data_inicial = document.getElementById("data_inicial").value;
  let data_final = document.getElementById("data_final").value;
  document.getElementById("data_inicial").value = primeira_data;
  data_inicial = data_inicial.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  data_inicial = data_inicial.replace(/(\d*)-(\d*)-(\d*).
  data_final = data_final.replace(/(\d*)-(\d*)-(\d*).*/ /*, "$3-$2-$1");
  const entradas = await getDataXlsx(file);
  let tabela_nova = get_tabelaData(data_inicial, data_final, entradas);

  console.log(tabela_nova);
  console.log(entradas);
  return tabela_nova;
});*/
