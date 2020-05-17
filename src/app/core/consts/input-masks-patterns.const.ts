import { IConfig } from 'ngx-mask';

const upperCaseLetters: IConfig['patterns'] = {
  O: { pattern: /[A-Z]/, optional: true },
};

export const InputMaskPatterns = {
  upperCaseLetters,
};
