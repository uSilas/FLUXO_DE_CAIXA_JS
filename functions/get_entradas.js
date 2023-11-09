export function get_entradas(metas, porcentagem) {
  var entradas = [["forma de pagamento", "valor", "data"], []];
  for (i = 0; i < metas.length; i++) {
    for (z = 0; z < porcentagem.length; z++)
      entradas[i].push([forma_pagamento, metas[i] * porcentagem[z], data]);
  }
}
