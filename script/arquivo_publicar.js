var voltar = document.getElementById("seta");
var ENTRADAS = document.getElementById("entradas");
var fluxo = document.getElementById("fluxo");
var enviar = document.getElementById("enviar");
var label = document.getElementById("entrada");
var labelfluxo = document.getElementById("label_fluxo");
enviar.addEventListener("click", function (event) {
  if (ENTRADAS.files.length == 0 || fluxo.files.length == 0) {
    alert("Nenhum Arquivo Selecionado");
    return;
  }
});

ENTRADAS.addEventListener("change", function (e) {
  const arquivo = e.target;
  const file = arquivo.files[0];

  if (file) {
    const nome = file.name;
    label.innerText = nome;
  }
});

fluxo.addEventListener("change", function (e) {
  const arquivo = e.target;
  const file = arquivo.files[0];

  if (file) {
    const nome = file.name;
    labelfluxo.innerText = nome;
  }
});

voltar.addEventListener("click", function (e) {
  window.location.href = "/";
});
