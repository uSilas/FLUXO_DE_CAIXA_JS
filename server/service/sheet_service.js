const S = require("../../functions/google_sheet.js");
const GoogleSheet = require("../../infra/conect_sheet.js");

module.exports = {
  async UpdatePlanilha(data, id_sheet, range) {
    try {
      const conexao = await GoogleSheet();
      const Planilha = new S(conexao.googleSheets, conexao.auth, id_sheet);

      // await Planilha.Clear(range);
      await Planilha.Update(range, data);

      return { message: "ok" };
    } catch (error) {
      throw new Error(error);
    }
  },
};
