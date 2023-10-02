import listPacients from 'api/mock/listPacients';

const getPacient = () => {
  const response = {
    status: 200,
    data: listPacients,
  };

  return response;
};

export default { getPacient };
