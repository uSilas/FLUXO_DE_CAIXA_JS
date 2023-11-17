export function get_fluxo(entradas, DiffDias, saldo_inicial, despesa) {
  let fluxo = [
    "data",
    "saldo_inicial",
    "valor_ganho",
    "valor_despesa",
    "valor_total",
  ];
  for (i = 0; i <= DiffDias; i++) {
    fluxo.push(
      entradas[i][i][2],
      saldo_inicial,
      entradas[i][1],
      despesa[i],
      saldo_inicial + entradas[i][1] - despesa[i]
    );
    saldo_inicial = saldo_inicial + entradas[i][1] - despesa[i];
  }
}
