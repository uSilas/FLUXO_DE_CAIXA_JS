const express = require("express");
const router = express.Router();
const SheetController = require("../controllers/sheet_controller.js");

router.post("/sheet", SheetController.AddSheet);

module.exports = router;
