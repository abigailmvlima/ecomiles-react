import { TFHIRPacient } from 'domains/types/TFHIR';

const list: TFHIRPacient[] = [
  {
    id: 1,
    name: 'Antonio Oliveira',
    sex: 'Masculino',
    document: '00000000000',
    naturalness: 'Brasileiro',
    maritalstatus: 'casado',
    dateOfbirth: '00/00/00',
    phone: '(00) 0 00000000',
    mail: 'usuario@dominio.com.br',
    address: {
      postcode: '03541000',
      address: 'endereco do usuario',
      number: '000',
      complement: 'informacao complementar',
      neighborhood: 'bairro',
      city: 'cidade',
    },
  },
  {
    id: 2,
    name: 'Joao de Oliveira',
    sex: 'Masculino',
    document: '00000000000',
    naturalness: 'Brasileiro',
    maritalstatus: 'casado',
    dateOfbirth: '00/00/00',
    phone: '(00) 0 00000000',
    mail: 'usuario@dominio.com.br',
    address: {
      postcode: '03541000',
      address: 'endereco do usuario',
      number: '000',
      complement: 'informacao complementar',
      neighborhood: 'bairro',
      city: 'cidade',
    },
  },
  {
    id: 3,
    name: 'Marcos Antonio Lima',
    sex: 'Masculino',
    document: '00000000000',
    naturalness: 'Brasileiro',
    maritalstatus: 'casado',
    dateOfbirth: '00/00/00',
    phone: '(00) 0 00000000',
    mail: 'usuario@dominio.com.br',
    address: {
      postcode: '03541000',
      address: 'endereco do usuario',
      number: '000',
      complement: 'informacao complementar',
      neighborhood: 'bairro',
      city: 'cidade',
    },
  },
];

export default list;
