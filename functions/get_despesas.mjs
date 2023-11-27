import { addDays } from "https://cdn.skypack.dev/date-fns";
import { get_fluxo } from "./get_fluxo.js";
import { to_Excel } from "./parse_to_excel.mjs";
export async function get_despesas(
  despesas,
  diffDias,
  data_inicial,
  data_final,
  entradas,
  saldo_inicial
) {
  // Dividir a string em dia, mês e ano
  const [dia_inicial, mes_inicial, ano_inicial] = data_inicial.split("-");
  const [dia_final, mes_final, ano_final] = data_final.split("-");

  // Criar objetos Date com a data fornecida
  let data_inicio = new Date(`${ano_inicial}-${mes_inicial}-${dia_inicial}`);
  let data_finau = new Date(`${ano_final}-${mes_final}-${dia_final}`);
  console.log(data_inicio);
  console.log(data_finau);
  // Obter os dias

  let final = data_finau.toISOString();

  console.log(final);
  console.log(diffDias);

  var fluxo = despesas.then((info) => {
    const array_despesas = info.data.recordset;
    console.log(array_despesas);
    var despesas_array = [["data", "valor"]];
    for (var i = 0; i <= diffDias; i++) {
      let inicio = data_inicio.toISOString();
      data_inicio = addDays(data_inicio, 1);

      var array_filtrado = array_despesas.filter((elemento) => {
        var variavel_filtrada = elemento.DataDeVencimento == inicio;
        return variavel_filtrada;
      });
      console.log(array_filtrado);
      var valor_do_dia = 0;
      for (var iterar = 0; iterar < array_filtrado.length; iterar++) {
        var array_do_dia = array_filtrado[iterar];

        valor_do_dia = valor_do_dia + array_do_dia.ValorDaConta;
      }
      despesas_array.push([data_inicio, valor_do_dia]);
    }

    var fluxo = get_fluxo(entradas, diffDias, saldo_inicial, despesas_array);
    var select_valor = document.getElementById("selecionar").value;
    if (fluxo.length == 0) {
      return;
    } else {
      if (select_valor == "1") {
        to_Excel(fluxo, "FLUXO_MAC");
      } else if (select_valor == "2") {
        to_Excel(fluxo, "FLUXO_FILIAL");
      }
    }
    return fluxo;
  });

  return fluxo;
}
