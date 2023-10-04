require("dotenv").config();

const express = require("express");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const createError = require("http-errors");
const path = require("path");
const bodyParser = require("body-parser");
const routers = require("../src/routes");

var app = express();

app.use(
  session({
    secret: "secrettest",
    saveUninitialized: true,
    resave: true,
    token: {},
    logado: {
      apelido: "usuario.sobrenome",
      nome: "Nome do Usuario",
      email: "usuario@dominio.com",
    },
    sis: {
      version: "1.0.0",
    },
  })
);

app.set("views", path.join(__dirname, "/routes/pages/views"));
app.set("view engine", "ejs");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(cors({ origin: "*" }));

app.use("/", routers);

app.use(function (req, res, next) {
  next(createError(404));
});

app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  if (err.status == 404) {
    res.redirect("/404");
    return false;
  }

  res.status(err.status || 500);
  res.redirect("/");
});

module.exports = app;
