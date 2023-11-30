const express = require("express");
const app = express();

const path = require("path");

const expressLayout = require("express-ejs-layouts");

app.use(express.static(path.join(__dirname, "/public")));

app.set("view engine", "ejs"); // Seteo el motor de vistas configurándolo
app.set("views", path.join(__dirname, "./src/views")); // Indico donde están las vistas para que las busque ahí

app.use(expressLayout);
app.set("layout", "layouts/layout");

app.use(express.urlencoded({ extended: false }));

app.use(require("./src/routes/tareasRouter"));

const PORT = 3000;
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
// Esta es la estructura mínima de un servidor
