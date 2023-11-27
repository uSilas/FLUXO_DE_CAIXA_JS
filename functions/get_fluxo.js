export function get_fluxo(entradas, DiffDias, saldo_inicial, despesa) {
  console.log(typeof saldo_inicial);
  let fluxo = [["DATA", "SALDO INICIAL", "ENTRADA", "SAÍDA", "SALDO FINAL"]];
  for (var i = 1; i <= DiffDias + 1; i++) {
    fluxo.push([
      entradas[i][1],
      saldo_inicial,
      entradas[i][0],
      despesa[i][1],
      saldo_inicial + entradas[i][0] - despesa[i][1],
    ]);
    saldo_inicial = saldo_inicial + entradas[i][0] - despesa[i][1];
  }
  console.log(fluxo);
  return fluxo;
}
