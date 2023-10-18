import passwordGenerator from 'generate-password-ts';

interface IGeneratedPassword {
  length: number;
  numbers: boolean;
  symbols: boolean;
  lowercase: boolean;
  uppercase: boolean;
  strict: boolean;
}

export const generatePassword = ({
  length,
  numbers,
  symbols,
  lowercase,
  uppercase,
  strict,
}: IGeneratedPassword): string => {
  const password = passwordGenerator.generate({
    length,
    numbers,
    symbols,
    lowercase,
    uppercase,
    strict,
  });

  return password;
};
