const Despesas_service = require("../service/despesas_service.js");
const Middleware_date = require("../middleware/date_middleware.js");
const Despesa_service = require("../service/despesas_service.js");

module.exports = {
  async getDespesas(req, res) {
    const unidade = req.params["unidade"];
    let data_inicial = req.query.initialDate;
    let data_final = req.query.finalDate;

    try {
      let data_incialUS = Middleware_date.To_USdate(data_inicial);
      let data_finalUS = Middleware_date.To_USdate(data_final);

      const data = await Despesa_service.getDespesa(
        unidade,
        data_incialUS,
        data_finalUS
      );

      return res.status(200).json({ data: data });
    } catch (error) {
      res.status(406).json({ message: error });
    }
  },
};
