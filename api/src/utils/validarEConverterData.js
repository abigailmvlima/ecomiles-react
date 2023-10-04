const validarEConverterData = (dataString) => {
  // Verifica se a string da data tem o formato correto (dd/mm/yyyy)
  const regexData = /^(\d{2})\/(\d{2})\/(\d{4})$/;
  if (!regexData.test(dataString)) {
    throw new Error("Data inválida. Use o formato dd/mm/yyyy.");
  }

  // Extrai os componentes da data
  const partesData = dataString.split("/");
  const dia = parseInt(partesData[0], 10);
  const mes = parseInt(partesData[1], 10);
  const ano = parseInt(partesData[2], 10);

  // Verifica se a data é válida
  if (isNaN(dia) || isNaN(mes) || isNaN(ano)) {
    throw new Error("Data inválida. Use o formato dd/mm/yyyy.");
  }

  // Cria um objeto Date com a data
  const data = new Date(ano, mes - 1, dia);

  // Verifica se o objeto Date representa uma data válida
  if (
    data.getFullYear() === ano &&
    data.getMonth() === mes - 1 &&
    data.getDate() === dia
  ) {
    // Formata a data no formato desejado (yyyy-mm-dd)
    const dataFormatada =
      ano +
      "-" +
      (mes < 10 ? "0" : "") +
      mes +
      "-" +
      (dia < 10 ? "0" : "") +
      dia;
    return dataFormatada;
  } else {
    throw new Error("Data inválida.");
  }
};

module.exports = {
  validarEConverterData,
};
