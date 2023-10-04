const axios = require("axios");
const { azureConfig } = require("../config");
const { validarEConverterData } = require("./utils/validarEConverterData");
const { validateCPF } = require("./utils/validateCPF");
const { formatarData } = require("./utils/formatarData");

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
  const nameCheck = data?.name;
  let firstName = undefined;
  let lastName = undefined;

  if (nameCheck) {
    const nameSplit = nameCheck.split(" ");
    if (nameSplit.length <= 1) {
      throw new Error("name not found");
    }

    firstName = nameSplit[0];
    lastName = nameSplit[nameSplit.length - 1];
  }

  if (data?.phone.length > 0) {
    if (data?.phone.length <= 5) {
      throw new Error("phone not found");
    }
  }

  const birthDate =
    data?.birthDate && (await validarEConverterData(data.birthDate));
  const document = data?.document && (await validateCPF(data.document));

  const name = nameCheck
    ? {
        name: [
          {
            use: "official",
            family: lastName,
            given: [firstName],
          },
        ],
      }
    : {};

  const phoneValue = data?.phone
    ? [
        {
          system: "phone",
          value: data.phone,
          use: "mobile",
          rank: 1,
        },
      ]
    : [];

  const emailValue = data?.email
    ? [
        {
          system: "email", // Sistema de contato (pode ser "phone", "email", "fax", etc.)
          value: data.email, // Valor de contato
          use: "home", // Uso do contato (pode ser "home", "work", "temp", etc.)
        },
      ]
    : [];

  const telecom =
    data?.phone || data.email
      ? { telecom: [...phoneValue, ...emailValue] }
      : {};

  const identifier = document
    ? {
        identifier: [
          {
            system: "http://example.org/patient-ids",
            value: document,
          },
        ],
      }
    : {};

  const address = data.address
    ? {
        address: [
          {
            use: "home",
            type: "both",
            text: data.address.address,
            line: [data.address.number],
            city: data.address.city,
            district: data.address.neighborhood || "Captal",
            state: data.address.state || "Sao Paulo",
            postalCode: data.address.postcode,
            period: {
              start: "1974-12-25",
            },
          },
        ],
      }
    : {};

  const maritalStatus = data.maritalStatus
    ? {
        maritalStatus: {
          coding: [
            ...(data.maritalStatus == "A"
              ? [
                  {
                    system: "http://hl7.org/fhir/v3/MaritalStatus",
                    code: "A", // Solteiro(a)
                    display: "Solteiro(a)",
                  },
                ]
              : []),

            ...(data.maritalStatus == "M"
              ? [
                  {
                    system: "http://hl7.org/fhir/v3/MaritalStatus",
                    code: "M", // Casado(a)
                    display: "Casado(a)",
                  },
                ]
              : []),

            ...(data.maritalStatus == "D"
              ? [
                  {
                    system: "http://hl7.org/fhir/v3/MaritalStatus",
                    code: "D", // Divorciado(a)
                    display: "Divorciado(a)",
                  },
                ]
              : []),

            ...(data.maritalStatus == "W"
              ? [
                  {
                    system: "http://hl7.org/fhir/v3/MaritalStatus",
                    code: "W", // Viúvo(a)
                    display: "Viúvo(a)",
                  },
                ]
              : []),

            ...(data.maritalStatus == "U"
              ? [
                  {
                    system: "http://hl7.org/fhir/v3/MaritalStatus",
                    code: "U", // Desconhecido
                    display: "Desconhecido",
                  },
                ]
              : []),
          ],
        },
      }
    : {};

  console.log(7777, maritalStatus);
  const dataRequest = {
    resourceType: "Patient",
    id: patientId,
    ...(data.active ? { active: data.active } : {}),
    ...identifier,
    ...maritalStatus,
    ...name,
    ...telecom,
    ...(data.gender ? { gender: data.gender } : {}),
    ...(birthDate ? { birthDate: birthDate } : {}),
    ...address,
  };

  console.log(999, dataRequest);
  const baseUrl = fhirEndpoint + "Patient/" + patientId;
  try {
    const response = await axios.put(baseUrl, dataRequest, {
      headers: getHttpHeader(accessToken),
    });

    const resourceId = response.data.id;
    return resourceId;
  } catch (error) {
    console.log(error.message);
    return null;
  }
};

const postPatient = async (accessToken, data) => {
  try {
    const name = data?.name;
    const nameSplit = name.split(" ");
    if (nameSplit.length <= 1) {
      throw new Error("name not found");
    }

    const firstName = nameSplit[0];
    const lastName = nameSplit[nameSplit.length - 1];

    if (data.phone.length <= 5) {
      throw new Error("phone not found");
    }

    if (!["male", "female", "other"].includes(data.gender)) {
      throw new Error("gender not found");
    }

    console.log(111, data.maritalStatus);
    if (!["A", "M", "D", "W", "U"].includes(data.maritalStatus)) {
      throw new Error("maritalStatus not found");
    }

    const maritalStatus = {
      coding: [
        ...(data.maritalStatus == "A"
          ? [
              {
                system: "http://hl7.org/fhir/v3/MaritalStatus",
                code: "A", // Solteiro(a)
                display: "Solteiro(a)",
              },
            ]
          : []),

        ...(data.maritalStatus == "M"
          ? [
              {
                system: "http://hl7.org/fhir/v3/MaritalStatus",
                code: "M", // Casado(a)
                display: "Casado(a)",
              },
            ]
          : []),

        ...(data.maritalStatus == "D"
          ? [
              {
                system: "http://hl7.org/fhir/v3/MaritalStatus",
                code: "D", // Divorciado(a)
                display: "Divorciado(a)",
              },
            ]
          : []),

        ...(data.maritalStatus == "W"
          ? [
              {
                system: "http://hl7.org/fhir/v3/MaritalStatus",
                code: "W", // Viúvo(a)
                display: "Viúvo(a)",
              },
            ]
          : []),

        ...(data.maritalStatus == "U"
          ? [
              {
                system: "http://hl7.org/fhir/v3/MaritalStatus",
                code: "U", // Desconhecido
                display: "Desconhecido",
              },
            ]
          : []),
      ],
    };

    const birthDate = await validarEConverterData(data.birthDate);
    const document = await validateCPF(data.document);
    const dataRequest = {
      resourceType: "Patient",
      active: true,
      identifier: [
        {
          system: "http://example.org/patient-ids",
          value: document,
        },
      ],
      name: [
        {
          use: "official",
          family: lastName,
          given: [firstName],
        },
      ],
      telecom: [
        {
          system: "phone",
          value: data.phone,
          use: "mobile",
          rank: 1,
        },
        {
          system: "email", // Sistema de contato (pode ser "phone", "email", "fax", etc.)
          value: data.email, // Valor de contato
          use: "home", // Uso do contato (pode ser "home", "work", "temp", etc.)
        },
      ],
      gender: data.gender,
      birthDate: birthDate,
      maritalStatus,
      address: [
        {
          use: "home",
          type: "both",
          text: data.address.address,
          line: [data.address.number],
          city: data.address.city,
          district: data.address.neighborhood || "Captal",
          state: data.address.state || "Sao Paulo",
          postalCode: data.address.postcode,
          period: {
            start: "1974-12-25",
          },
        },
      ],
    };

    const response = await axios.post(fhirEndpoint + "Patient", dataRequest, {
      headers: getHttpHeader(accessToken),
    });

    const resourceId = response.data.id;
    return resourceId;
  } catch (error) {
    console.error(777, error.message);
    return null;
  }
};

const deletePatients = async (patientId, accessToken) => {
  const baseUrl = fhirEndpoint + "Patient/" + patientId;
  try {
    const response = await axios.delete(baseUrl, {
      headers: getHttpHeader(accessToken),
    });
    return [200, 201, 204].includes(response.status);
  } catch (error) {
    return null;
  }
};

const getPatients = async (accessToken, patientId) => {
  const baseUrl = fhirEndpoint + `Patient${patientId ? `/${patientId}` : ""}`;
  try {
    const response = await axios.get(baseUrl, {
      headers: getHttpHeader(accessToken),
    });

    if (!response?.data) {
      return null;
    }

    const patients = response?.data?.entry || [response?.data] || [];
    console.log(777, patients);

    const list = patients.map((patient, key) => {
      return apiToClientAPP(patient?.resource || patient);
    });

    if (patientId) return list[0];

    return list;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const apiToClientAPP = (patient) => {
  console.log(99, patient);
  return {
    id: patient?.id,
    ...(patient?.name
      ? {
          name: `${patient?.name[0]?.given[0]} ${patient?.name[0].family}`,
        }
      : {}),

    ...(patient?.gender
      ? {
          gender: patient?.gender,
        }
      : {}),

    ...(patient?.identifier
      ? {
          document: patient?.identifier[0].value,
        }
      : {}),

    ...(patient?.identifier
      ? {
          document: patient?.identifier[0].value,
        }
      : {}),

    ...(patient?.maritalStatus?.coding
      ? {
          maritalStatus: {
            code: patient?.maritalStatus?.coding[0]?.code,
            display: patient?.maritalStatus?.coding[0]?.display,
          },
        }
      : {}),

    ...(patient?.birthDate
      ? {
          birthDate: formatarData(patient?.birthDate),
        }
      : {}),

    ...(patient?.telecom && patient?.telecom[0]
      ? {
          phone: patient?.telecom[0]?.value,
        }
      : {}),

    ...(patient?.telecom && patient?.telecom[1]
      ? {
          email: patient?.telecom[1]?.value,
        }
      : {}),

    ...(Array.isArray(patient?.address) && patient?.address.length > 0
      ? {
          address: {
            ...(patient?.address && patient?.address[0]
              ? {
                  postcode: patient?.address[0]?.postalCode,
                }
              : {}),

            ...(patient?.address && patient?.address[0]
              ? {
                  address: patient?.address[0]?.text,
                }
              : {}),

            ...(patient?.address && patient?.address[0]
              ? {
                  number: patient?.address[0]?.line[0],
                }
              : {}),

            ...(patient?.address && patient?.address[0]
              ? {
                  neighborhood: patient?.address[0]?.district,
                }
              : {}),

            ...(patient?.address && patient?.address[0]
              ? {
                  city: patient?.address[0]?.city,
                }
              : {}),

            ...(patient?.address && patient?.address[0]
              ? {
                  state: patient?.address[0]?.state,
                }
              : {}),
          },
        }
      : {}),
  };
};

module.exports = {
  getAuthToken,
  postPatient,
  getPatients,
  deletePatients,
  updatePatients,
};
