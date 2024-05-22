const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const fs = require("fs");

app
  .use(express.static(path.join(__dirname, "public")))
  .set("views", path.join(__dirname, "views"))
  .set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/contacto", (req, res) => {
  res.render("contacto");
});

app.get("/galeria", (req, res) => {
  res.render("galeria");
});

app.get("/servicios", (req, res) => {
  res.render("servicios");
});

app.use((req,res) => {
  res.status(404).send(`<h1><center>404. Page Not Found </center></h1>`)
})

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});

