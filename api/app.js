require("dotenv").config();
var createError = require("http-errors");
var express = require("express");
const session = require("express-session");
var path = require("path");
var cookieParser = require("cookie-parser");
// var logger = require('morgan');
const bodyParser = require("body-parser");
const { azureConfig } = require("./config");

const {
  getAuthToken,
  postPatient,
  printPatientInfo,
  getPatients,
  deletePatients,
  updatePatients,
} = require("./fhir");

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

app.get("/patients", async (req, res) => {
  const accessToken = await getAuthToken();
  const data = await getPatients(accessToken);

  res.json(data?.entry || []);
});

app.post("/patients", async (req, res) => {
  console.log(123);
  const accessToken = await getAuthToken();
  const patientId = await postPatient(accessToken, req.body);
  res.json({ patientId });
});

app.delete("/patients/:id", async (req, res) => {
  const patientId = req.params.id;
  console.log(999, patientId);
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
