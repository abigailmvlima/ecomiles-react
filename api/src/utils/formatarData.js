const formatarData = (data) => {
  // Divide a string da data nos componentes ano, mês e dia
  const partes = data.split("-");

  // Reorganiza os componentes na ordem desejada (dd/mm/aaaa)
  const dataFormatada = `${partes[2]}/${partes[1]}/${partes[0]}`;

  return dataFormatada;
};

module.exports = {
  formatarData,
};
