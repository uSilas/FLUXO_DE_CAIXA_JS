const S = require("../../functions/google_sheet.js");
const GoogleSheet = require("../../infra/conect_sheet.js");

module.exports = {
  async AddSheet(req, res) {
    const id_sheet = req.body.id_sheet;
    const data = req.body.data;

    try {
      const conexao = await GoogleSheet();
      const Planilha = S(conexao.googleSheets, conexao.auth, id_sheet);
    } catch (error) {}
  },
};
