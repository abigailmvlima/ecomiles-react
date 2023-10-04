require("dotenv").config();

const express = require("express");
const session = require("express-session");
const cookieParser = require("cookie-parser");

const createError = require("http-errors");
const path = require("path");
const bodyParser = require("body-parser");

const {
  getAuthToken,
  postPatient,
  getPatients,
  deletePatients,
  updatePatients,
} = require("./fhir");

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

app.get("/patients", async (req, res) => {
  const accessToken = await getAuthToken();
  const data = await getPatients(accessToken);
  res.json(data?.entry || []);
});

app.post("/patients", async (req, res) => {
  const accessToken = await getAuthToken();
  const patientId = await postPatient(accessToken, req.body);
  res.json({ patientId });
});

app.delete("/patients/:id", async (req, res) => {
  const patientId = req.params.id;
  const accessToken = await getAuthToken();
  const data = await deletePatients(patientId, accessToken);
  res.json(data);
});

app.put("/patients/:id", async (req, res) => {
  const patientId = req.params.id;
  const accessToken = await getAuthToken();
  const data = await updatePatients(patientId, accessToken, req.body);
  res.json(data);
});

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
