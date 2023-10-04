const express = require("express");
const router = express.Router();

const {
  getAuthToken,
  postPatient,
  getPatients,
  deletePatients,
  updatePatients,
} = require("./fhir");

router.get("/patients", async (req, res) => {
  const accessToken = await getAuthToken();
  const data = await getPatients(accessToken);
  res.json(data || []);
});

router.get("/patients/:id", async (req, res) => {
  try {
    const patientId = req.params.id;
    const accessToken = await getAuthToken();
    const data = await getPatients(accessToken, patientId);
    if (!data || data.length <= 0) {
      return res.status(422).json({
        message: "oops, something went wrong",
      });
    }

    return res.status(200).json(data);
  } catch (error) {
    return res.status(422).json({
      message: error.message,
    });
  }
});

router.post("/patients", async (req, res) => {
  try {
    const accessToken = await getAuthToken();
    const patientId = await postPatient(accessToken, req.body);

    const data = { patientId };
    if (!data || data.length <= 0) {
      return res.status(422).json({
        message: "oops, something went wrong",
      });
    }

    return res.status(200).json(data);
  } catch (error) {
    return res.status(422).json({
      message: error.message,
    });
  }
});

router.delete("/patients/:id", async (req, res) => {
  try {
    const patientId = req.params.id;
    const accessToken = await getAuthToken();
    const data = await deletePatients(patientId, accessToken);
    console.log(999, data);
    if (!data) {
      return res.status(422).json({
        message: "oops, something went wrong",
      });
    }

    return res.status(200).json(data);
  } catch (error) {
    return res.status(422).json({
      message: error.message,
    });
  }
});

router.put("/patients/:id", async (req, res) => {
  try {
    const patientId = req.params.id;
    const accessToken = await getAuthToken();
    const responsePatientId = await updatePatients(
      patientId,
      accessToken,
      req.body
    );
    const data = { patientId: responsePatientId };

    if (!data) {
      return res.status(422).json({
        message: "oops, something went wrong",
      });
    }

    return res.status(200).json(data);
  } catch (error) {
    return res.status(422).json({
      message: error.message,
    });
  }
});

module.exports = router;
