var voltar = document.getElementById("seta");
var ENTRADAS = document.getElementById("entradas");
var fluxo = document.getElementById("fluxo");
var enviar = document.getElementById("enviar");
var label = document.getElementById("entrada");
var labelfluxo = document.getElementById("label_fluxo");

enviar.addEventListener("click", () => {
  entradas_value = document.getElementById("entradas").value;
  fluxo_value = document.getElementById("fluxo").value;
  if (entradas_value.length == 0) {
    alert("ADICIONE UMA ENTRADA");
  }
  if (fluxo_value.length == 0) {
    alert("ADICIONE O FLUXO");
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
