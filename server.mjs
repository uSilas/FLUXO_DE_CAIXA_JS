import express from "express";
import cors from "cors";
import path from "path";
import ejs from "ejs";
import { fileURLToPath } from "url";
import router from "./server/route/pages.mjs";

const app = express();
const __dirname = path.dirname(new URL(import.meta.url).pathname);

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
