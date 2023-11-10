const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("pages/menu.html");
});

router.get("/create", (req, res) => {
  res.render("pages/create.html");
});

router.get("/publicar", (req, res) => {
  res.render("pages/publicar.html");
});

router.get("/salgadinho", (req, res) => {
  res.render("pages/salgadinho.html");
});

module.exports = router;
