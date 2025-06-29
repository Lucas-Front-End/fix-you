export function isValidCpf(cpf) {
  cpf = cpf.replace(/[^\d]+/g, '');

  if (!cpf || cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) return false;

  let sum = 0;
  for (let i = 0; i < 9; i++) {
    sum += parseInt(cpf.charAt(i)) * (10 - i);
  }

  let firstCheck = 11 - (sum % 11);
  if (firstCheck === 10 || firstCheck === 11) firstCheck = 0;
  if (firstCheck !== parseInt(cpf.charAt(9))) return false;

  sum = 0;
  for (let i = 0; i < 10; i++) {
    sum += parseInt(cpf.charAt(i)) * (11 - i);
  }

  let secondCheck = 11 - (sum % 11);
  if (secondCheck === 10 || secondCheck === 11) secondCheck = 0;
  if (secondCheck !== parseInt(cpf.charAt(10))) return false;

  return true;
}

export function isValidCnpj(cnpj) {
  cnpj = cnpj.replace(/[^\d]+/g, '');

  if (!cnpj || cnpj.length !== 14 || /^(\d)\1{13}$/.test(cnpj)) return false;

  const validateDigits = (length) => {
    let size = length - 2;
    let numbers = cnpj.substring(0, size);
    let digits = cnpj.substring(size);
    let sum = 0;
    let pos = length - 7;

    for (let i = size; i >= 1; i--) {
      sum += parseInt(numbers.charAt(size - i)) * pos--;
      if (pos < 2) pos = 9;
    }

    let result = sum % 11 < 2 ? 0 : 11 - (sum % 11);
    return result === parseInt(digits.charAt(length - size - 1));
  };

  return validateDigits(13) && validateDigits(14);
}

export function isValidEmail(email) {
  if (!email) return false;

  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email.toLowerCase());
}
