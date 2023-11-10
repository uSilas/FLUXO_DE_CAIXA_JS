export function get_data(data_inicial, data_final) {
  data_inicial = data_inicial.getDate();
  data_final = data_final.getDate();
  var diffDias = data_final - data_inicial;
  return diffDias;
}
export function get_entradas(metas, porcentagem) {
  var entradas = [["forma de pagamento", "valor", "data"], []];
  for (i = 0; i < diffDias; i++) {
    for (z = 0; z < porcentagem.length; z++)
      entradas[i].push([forma_pagamento, metas[i] * porcentagem[z], data]);
  }
}
