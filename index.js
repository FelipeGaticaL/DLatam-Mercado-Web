const express = require("express");
const app = express();
const exphbs = require("express-handlebars");
const _ = require('lodash');

app.listen(3000, () => {
    console.log("El servidor está inicializado en el puerto http://localhost:3000");
});


// publicar la carpeta bootstrap
app.use("/bootstrap", express.static(__dirname + "/node_modules/bootstrap/dist"));

// publicar archivos estaticos
app.use("/assets", express.static(__dirname + "/assets"));



app.set("view engine", "hbs");
app.engine(
    "hbs",
    exphbs.engine({
        extname: ".hbs",
        layoutsDir: __dirname + "/views",
        partialsDir: __dirname + "/views/components"
    })
);

app.get("/", (req, res) => {
    res.render("Main", {
        productos: [
            { nombre: "banana" },
            { nombre: "cebollas" },
            { nombre: "lechuga" },
            { nombre: "papas" },
            { nombre: "pimenton" },
            { nombre: "tomate" }
        ]
    });
});




 //404 => redirect a la ruta raíz
/*  app.get("*", (req, res) => {


    res.redirect("/");
 })
 */


