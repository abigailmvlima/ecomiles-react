import { TFHIRPacient } from 'domains/types/TFHIR';

const list: TFHIRPacient[] = [
  {
    id: 1,
    name: 'Antonio Oliveira',
    sex: 'Masculino',
    document: '505.984.950-37',
    naturalness: 'Brasileiro',
    maritalstatus: 'casado',
    dateOfbirth: '05/12/1985',
    phone: '(11) 9 526-0325',
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
    document: '862.223.040-60',
    naturalness: 'Brasileiro',
    maritalstatus: 'casado',
    dateOfbirth: '10/01/1986',
    phone: '(11) 9 938-0423',
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
    document: '845.820.930-60',
    naturalness: 'Brasileiro',
    maritalstatus: 'casado',
    dateOfbirth: '01/10/1984',
    phone: '(11) 9 555-4455',
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
