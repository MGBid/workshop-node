const express = require("express");
const app = express();

app.use(express.static("public"));

app.set("view engine", "ejs"); // Seteo el motor de vistas configurándolo
app.set("views", "./src/views"); // Indico donde están las vistas para que las busque ahí

app.use(require("./src/routes/tareasRouter"));

const PORT = 3000;
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
// Esta es la estructura mínima de un servidor