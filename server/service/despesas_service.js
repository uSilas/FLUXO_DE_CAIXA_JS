const Conexao = require("../../infra/sql_conect.js");

module.exports = {
  async getDespesa(unidade, data_inicial, data_final) {
    try {
      const SQL = await Conexao();
      const datas = await SQL.query(
        `
            SELECT Unidades.nome,BI_SHOPPINGPAES2.UnidadeID, BI_SHOPPINGPAES2.Histórico1, BI_SHOPPINGPAES2.Histórico2, BI_SHOPPINGPAES2.Histórico3, BI_SHOPPINGPAES2.DataDeEmissão, BI_SHOPPINGPAES2.DataDePagamento, BI_SHOPPINGPAES2.DataDeVencimento, BI_SHOPPINGPAES2.ValorDaConta, BI_SHOPPINGPAES2.ValorPago, BI_SHOPPINGPAES2.FormaDePagamento FROM BI_SHOPPINGPAES2
            INNER JOIN Unidades
            ON Unidades.Código = BI_SHOPPINGPAES2.UnidadeID
            AND BI_SHOPPINGPAES2.UnidadeID = ${unidade}
            WHERE CAST(BI_SHOPPINGPAES2.DataDeVencimento as date) 
            BETWEEN CAST(${data_inicial} as date) AND CAST(${data_final} AS date)
            AND BI_SHOPPINGPAES2.FormaDePagamento <> 'CIELC C'
            AND BI_SHOPPINGPAES2.FormaDePagamento <> 'CASS'
            AND BI_SHOPPINGPAES2.FormaDePagamento <> 'CASS'
            
            AND BI_SHOPPINGPAES2.Histórico3 <> 'VENDAS'
            AND BI_SHOPPINGPAES2.Histórico3 <> 'Transferência'
            AND BI_SHOPPINGPAES2.Histórico3 <> 'TAXA DE CARTOES'
            ORDER BY BI_SHOPPINGPAES2.DataDeVencimento DESC
      `
      );

      return datas;
    } catch (error) {
      throw new Error(error);
    }
  },
};
