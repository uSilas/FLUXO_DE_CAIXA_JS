export function get_data(data_inicial, data_final) {
  data_inicial = data_inicial.getDate();
  data_final = data_final.getDate();
  var diffDias = data_final - data_inicial;

  return diffDias;
}
export function get_tabelaData(data_inicial, data_final, dados) {
  const dadosFiltrados = dados.filter((item) => {
    const dataItem = item[0];
    return dataItem >= data_inicial && dataItem <= data_final;
  });
  return dadosFiltrados;
}

export function get_entradas(metas, porcentagem) {
  var entradas = [["forma de pagamento", "valor", "data"], []];
  for (i = 0; i < diffDias; i++) {
    for (z = 0; z < porcentagem.length; z++)
      entradas[i].push([porcentagem[z], metas[i - 1] * porcentagem[z], data]);
  }
  console.log(entradas);
}
