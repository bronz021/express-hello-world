const bodyParser = require("body-parser");
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const port = 3000;
const app = express();

app.set("view engine", "ejs");
app.get("/", (req, res) => {
  res.render("index", { title: "Home page" });
});

app.listen(port, () => {
  console.log(`App is running on port: ${port}`);
});
