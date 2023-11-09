const porcentagem = [];

const inputs = document.getElementsByClassName;

for (let i = 0; i < inputs.length; i++) {
  porcentagem.push(inputs[i].value);
}

for (let i = 1; i <= 5; i++) {
  // Supondo que você tenha inputs com ids input1, input2, ..., input5
  var valor_input = document.getElementById(`input${i}`).value;
  meuArray.push(valor_input);
}

console.log(meuArray);
