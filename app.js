/**
 * Esta Configuracion fue realizada por Jose Roberto Quevedo (https://github.com/zoomelectrico)
 * Basado en los archivos de Wes Bos (https://github.com/wesbos)
 */
// Importamos Todas Nuestras Dependencias
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const expressValidator = require("express-validator");
const routes = require("./routes/index");
const helpers = require("./helpers");
const errorHandlers = require("./handlers/errorHandlers");

// Creamos La aplicacion en Express
const app = express();

// Configuramos el Template Engine
app.set("views", path.join(__dirname, "views")); // En la carpeta views es donde todos los archivos .pug deben estar
app.set("view engine", "pug"); // En este caso estamos usando pug, pero ejs o handler bar tambien puede funcionar

// Esta linea nos permite servir los archivos estaticos que se encuentran en el servidor, como las fotos, js y css
app.use(express.static(path.join(__dirname, "public")));

// Este middleware va convertir las peticiones a json para facilitarnos la vida
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Con esto vamos a tener validaciones que viene por defecto
app.use(expressValidator());

// Se creara en req un propiedad cookies con las cookies que viene de cada peticion
app.use(cookieParser());

// Middleware propio
app.use((req, res, next) => {
  res.locals.h = helpers; // Expondra el archivo helpers en la vistas
  res.locals.user = req.user || null; // Expondra el usuario en la vistas o sera null
  res.locals.currentPath = req.path; // Expondra la ruta
  next(); // Vamos a la siguiente funcion
});

// Configuracion de las rutas
app.use("/", routes);

// Si no conseguimos el archivo le mandamos 404 al cliente
app.use(errorHandlers.notFound);

// Si el error es del cliente le advertimos con un flash
app.use(errorHandlers.flashValidationErrors);

// Si estamos desarrollando y la app falla veamos donde esta el error
if (app.get("env") === "development") {
  app.use(errorHandlers.developmentErrors);
}

// Si la app falla y estamos en produccion los errores cambian
app.use(errorHandlers.productionErrors);

// Listo muchachos hora de trabajar, vamos a start.js
module.exports = app;
