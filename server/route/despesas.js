const Despesas_controller = require("../controllers/get_despesas.js");

const express = require("express");
const router = express.Router();

router.get("/despesas/:unidade", Despesas_controller.getDespesas);

module.exports = router;
