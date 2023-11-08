const express = require("express");
const cors = require("cors");
const path = require("path");
const router = require("./server/route/pages.js");
const ejs = require("ejs");
const app = express();

app.use(express.static("public"));
app.use(express.static("script"));
app.use(cors());

app.set("port", 3000);
app.set("viewspages", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.engine("html", ejs.renderFile);

app.use("/", router);

app.listen(3000, () => {
  console.log("ola");
});
