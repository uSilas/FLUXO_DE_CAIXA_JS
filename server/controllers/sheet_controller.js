const S = require("../../functions/google_sheet.js");
const GoogleSheet = require("../../infra/conect_sheet.js");
const SheetService = require("../service/sheet_service.js");

module.exports = {
  async AddSheet(req, res) {
    const id_sheet = req.body.id_sheet;
    const data = req.body.data;
    const range = req.body.range;

    if (!data || !id_sheet || !range) {
      return res
        .status(400)
        .json({ message: "Está faltando alguns atributos ou estão vazios" });
    }

    try {
      const response = await SheetService.UpdatePlanilha(data, id_sheet, range);

      return res
        .status(200)
        .json({ message: "Planilha Atualizada", status: response.message });
    } catch (error) {
      res
        .status(406)
        .json({ message: "verefique se o id da tabela esta correta" });
    }
  },
};
