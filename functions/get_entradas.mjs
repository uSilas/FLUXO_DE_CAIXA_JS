import { addDays, parse, format } from "https://cdn.skypack.dev/date-fns";

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
export function get_entradasTotal(entradas, data_inicial, diffDias) {
  var entradas_total = [["valor", "data"]];
  console.log(data_inicial);
  console.log(typeof data_inicial);
  console.log(entradas);
  for (var i = 1; i <= diffDias + 1; i++) {
    var entradas_filtrado = entradas.filter((elemento, indice) => {
      console.log(elemento);
      if (elemento == ["forma de pagamento", "valor", "data"]) {
        return false;
      } else {
        return elemento[2] == data_inicial;
      }
    });
    var valor_do_dia = entradas_filtrado.reduce((late, current) => {
      console.log(current[1]);
      return late + current[1];
    }, 0);
    console.log(valor_do_dia);
    console.log(entradas_filtrado);

    entradas_total.push([valor_do_dia, entradas_filtrado[0][2]]);
    data_inicial = parse(data_inicial, "dd-MM-yyyy", new Date());
    data_inicial = addDays(data_inicial, 1);
    console.log(typeof data_inicial);
    data_inicial = format(data_inicial, "dd-MM-yyyy");
  }
  return entradas_total;
}
