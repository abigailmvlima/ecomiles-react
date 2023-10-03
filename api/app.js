require("dotenv").config();
var createError = require("http-errors");
var express = require("express");
const session = require("express-session");
var path = require("path");
var cookieParser = require("cookie-parser");
// var logger = require('morgan');
const bodyParser = require("body-parser");
const { azureConfig } = require("./config");
const FhirClient = require("fhir-kit-client");

var app = express();

app.use(
  session({
    secret: "secretteste",
    saveUninitialized: true,
    resave: true,
    token: {},
    logado: {
      apelido: "elio.lima",
      nome: "Elio Gonçalves de Lima",
      email: "diretoria@maxtime.info",
      endfoto: "6618004.jpg",
    },
    sis: {
      version: "0.0.1",
    },
  })
);

app.set("views", path.join(__dirname, "/routes/pages/views"));
app.set("view engine", "ejs");

// app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use(express.json());

// Rota para cadastrar um paciente
app.get("/patients", async (req, res) => {
  try {
    const client = new FhirClient({
      baseUrl: azureConfig.fhirEndpoint,
      fhirEndpoint: process.env.VALUE_ID,
      authentication: {
        clientId: azureConfig.clientId,
        clientSecret: azureConfig.clientSecret,
        authorityHost: azureConfig.authorityHost,
      },
    });

    // Consulta para buscar todos os pacientes
    const bundle = await client.search({ resourceType: "Patient" });

    // Extraia a lista de pacientes do bundle de resposta
    const patients = bundle.entry?.map((entry) => entry.resource) || [];

    // Responda com a lista de pacientes em formato FHIR
    res.json({
      resourceType: "Bundle",
      type: "searchset",
      entry: patients.map((patient) => ({
        resource: patient,
      })),
    });
  } catch (error) {
    console.error("Erro ao listar pacientes:", error);
    res.status(500).json({ error: "Erro ao listar pacientes" });
  }
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  if (err.status == 404) {
    res.redirect("/404");
    return false;
  }

  res.status(err.status || 500);
  res.redirect("/");
});

module.exports = app;
