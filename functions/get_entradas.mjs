export function get_data(data_inicial, data_final) {
  data_inicial = new Date(data_inicial);
  data_final = new Date(data_final);
  data_inicial = data_inicial.getDate();
  data_final = data_final.getDate();

  var diffDias = data_final - data_inicial;
  return diffDias;
}
export function get_tabelaData(data_inicial, data_final, dados) {
  console.log(data_inicial);
  console.log(data_final);
  const dadosFiltrados = dados.filter((item) => {
    const dataItem = item[0];
    return dataItem >= data_inicial && dataItem <= data_final;
  });
  return dadosFiltrados;
}

export function get_entradas(
  porcentagem,
  porcentagem_nomes,
  dadosFiltrados,
  diffDias
) {
  var entradas = [["forma de pagamento", "valor", "data"]];
  console.log(porcentagem.length);
  for (var i = 1; i <= diffDias + 1; i++) {
    for (var z = 0; z < porcentagem.length; z++) {
      var entradaDia = [];
      entradaDia.push(
        porcentagem_nomes[z],
        dadosFiltrados[i - 1][1] * (porcentagem[z] / 100),
        dadosFiltrados[i][0]
      );
      entradas.push(entradaDia);
    }
  }

  return entradas;
}
