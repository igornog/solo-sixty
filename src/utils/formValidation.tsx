const EMAIL_CHECK = /^[\w-.+]+@([\w-]+\.)+[\w-]{2,}$/;
const CAPITAL_LETTER_CHECK = /[A-Z]/;
const NUMBER_CHECK = /\d/;
const SPECIAL_CHAR = /[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/;

export const isValidEmail = (email: string): boolean => EMAIL_CHECK.test(email);
export const hasCapitalLetter = (password: string): boolean =>
  CAPITAL_LETTER_CHECK.test(password);
export const hasNumber = (password: string): boolean =>
  NUMBER_CHECK.test(password);
export const hasSpecialChar = (password: string): boolean =>
  SPECIAL_CHAR.test(password);
