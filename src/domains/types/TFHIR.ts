export type TFHIRPacientAdress = {
  postcode: string;
  address: string;
  number: string;
  complement: string;
  neighborhood: string;
  city: string;
};

export type TFHIRPacient = {
  id: string | number;
  name: string;
  sex: string;
  document: string;
  naturalness: string;
  maritalstatus: string;
  dateOfbirth: string;
  phone: string;
  mail: string;
  address: TFHIRPacientAdress;
};
