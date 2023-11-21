export function get_despesas(despesas, diffDias, data_inicial, data_final) {
  // Dividir a string em dia, mês e ano
  const [dia_inicial, mes_inicial, ano_inicial] = data_inicial.split("-");
  const [dia_final, mes_final, ano_final] = data_final.split("-");

  // Criar objetos Date com a data fornecida
  let data_inicio = new Date(`${ano_inicial}-${mes_inicial}-${dia_inicial}`);
  let data_finau = new Date(`${ano_final}-${mes_final}-${dia_final}`);
  console.log(data_inicio);
  console.log(data_finau);
  // Obter os dias
  let inicio = data_inicio.toISOString();
  let final = data_finau.toISOString();

  console.log(inicio, final);
  console.log(diffDias);
  for (var i = 0; i <= diffDias; i++) {
    data_inicio.setDate(data_inicio.getDate() + 1);

    var despesas_array = [["data", "valor"]];
    despesas.then((a) => {
      console.log(a);
    });
    var despesas_novas = despesas.data.data.recordset;
    var array_filtrado = despesas_novas.filter((elemento) => {
      return elemento == data_inicio;
    });
    console.log(array_filtrado);
    console.log(data_inicio);
  }
}
