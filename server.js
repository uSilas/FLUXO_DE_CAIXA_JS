const express = require("express");
const cors = require("cors");
const path = require("path");
const ejs = require("ejs");
const app = express();

const router = require("./server/route/pages.js");
const router_sheet = require("./server/route/sheet.js");

app.use(express.static("public"));
app.use(express.static("functions"));
app.use(express.static("script"));

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.set("port", 3000);
app.set("viewspages", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.engine("html", ejs.renderFile);

app.use("/", router);
app.use("/", router_sheet);

app.listen(3000, () => {
  console.log("conectado na porta 3000");
});
