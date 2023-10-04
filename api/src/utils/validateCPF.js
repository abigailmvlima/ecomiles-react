const validateCPF = (cpf) => {
  // Remove all non-numeric characters
  cpf = cpf.replace(/\D/g, "");

  // Check if the CPF has 11 digits
  if (cpf.length !== 11) {
    throw new Error("CPF must contain 11 numeric digits");
  }

  // Check if all digits are equal (invalid CPF)
  const isAllDigitsEqual = /^(.)\1+$/.test(cpf);
  if (isAllDigitsEqual) {
    throw new Error("Invalid CPF (all digits are equal)");
  }

  // Calculate the first verification digit
  let sum = 0;
  for (let i = 0; i < 9; i++) {
    sum += parseInt(cpf.charAt(i)) * (10 - i);
  }
  let digit1 = 11 - (sum % 11);
  if (digit1 > 9) {
    digit1 = 0;
  }

  // Calculate the second verification digit
  sum = 0;
  for (let i = 0; i < 10; i++) {
    sum += parseInt(cpf.charAt(i)) * (11 - i);
  }
  let digit2 = 11 - (sum % 11);
  if (digit2 > 9) {
    digit2 = 0;
  }

  // Check if the verification digits match the actual digits
  if (
    parseInt(cpf.charAt(9)) !== digit1 ||
    parseInt(cpf.charAt(10)) !== digit2
  ) {
    throw new Error("Invalid CPF (incorrect verification digits)");
  }

  // If it reaches here, the CPF is valid
  return cpf;
};

module.exports = {
  validateCPF,
};
