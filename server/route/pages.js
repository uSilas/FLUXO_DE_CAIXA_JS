import express from "express";;

const router = express.Router();;

router.get("/", (req, res) => {
  s.render("pages/menu.html");
;
router.get("/create", (req, res) => {
res.render("pages/create.html");
});

router.get("/publicar", (req, res) => {
res.render("pages/publicar.html");
});


export default router