const azureConfig = {
  clientId: process.env.APP_ID || "",
  clientSecret: process.env.SECRET_ID || "",
  authorityHost: `https://login.microsoftonline.com/${process.env.TENANT_ID}`,
  fhirEndpoint: "https://fiapfhir-app.fhir.azurehealthcareapis.com/",
  tenant_id: process.env.TENANT_ID,
};

console.log(azureConfig);

module.exports = { azureConfig };
