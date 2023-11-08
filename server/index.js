import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.set("view engine", "ejs");
