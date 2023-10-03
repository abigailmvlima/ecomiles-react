const azureConfig = {
  clientId: process.env.APP_ID || "",
  clientSecret: process.env.SECRET_ID || "",
  authorityHost: `https://login.microsoftonline.com/${process.env.TENANT_ID}`,
  fhirEndpoint: "https://fiapfhir-app.fhir.azurehealthcareapis.com/",
};

console.log(azureConfig);

module.exports = { azureConfig };
