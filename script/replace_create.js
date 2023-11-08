var publicar = document.getElementById("publicar");
var criar = document.getElementById("criar");

criar.addEventListener("click", function (e) {
  window.location.href = "create";
});
publicar.addEventListener("click", function (e) {
  window.location.href = "publicar";
});
