const axios = require("axios");
const { azureConfig } = require("./config");

const aadTenant = "https://login.microsoftonline.com/";
const aadTenantId = azureConfig.tenant_id;

const appId = azureConfig.clientId;
const appSecret = azureConfig.clientSecret;

const fhirEndpoint = azureConfig.fhirEndpoint;

const getHttpHeader = (accessToken) => {
  return {
    Authorization: "Bearer " + accessToken,
    "Content-type": "application/json",
  };
};

const getAuthToken = async () => {
  try {
    const data = {
      client_id: appId,
      client_secret: appSecret,
      grant_type: "client_credentials",
      resource: fhirEndpoint,
    };

    const url = aadTenant + aadTenantId + "/oauth2/token";
    const response = await axios.post(url, data, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    const accessToken = response.data.access_token;
    return accessToken;
  } catch (error) {
    return null;
  }
};

const updatePatients = async (patientId, accessToken, data) => {
  const baseUrl = fhirEndpoint + "Patient/" + patientId;

  try {
    const response = await axios.put(baseUrl, data, {
      headers: getHttpHeader(accessToken),
    });
    const resourceId = response.data.id;
    return resourceId;
  } catch (error) {
    return null;
  }
};

const postPatient = async (accessToken, data) => {
  try {
    const response = await axios.post(fhirEndpoint + "Patient", data, {
      headers: getHttpHeader(accessToken),
    });
    const resourceId = response.data.id;
    return resourceId;
  } catch (error) {
    return null;
  }
};

const deletePatients = async (patientId, accessToken) => {
  const baseUrl = fhirEndpoint + "Patient/" + patientId;
  try {
    const response = await axios.delete(baseUrl, {
      headers: getHttpHeader(accessToken),
    });
    return response?.data;
  } catch (error) {
    return null;
  }
};

const getPatients = async (accessToken) => {
  const baseUrl = fhirEndpoint + "Patient";
  try {
    const response = await axios.get(baseUrl, {
      headers: getHttpHeader(accessToken),
    });

    return response?.data;
  } catch (error) {
    return null;
  }
};

module.exports = {
  getAuthToken,
  postPatient,
  getPatients,
  deletePatients,
  updatePatients,
};
