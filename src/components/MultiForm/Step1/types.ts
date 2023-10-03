import { TStep1 } from '../types';

export type TErrors = {
  name?: string;
  email?: string;
  phone?: string;
};

export type TFormStep = {
  name: keyof TStep1;
  label: string;
  placeholder: string;
  type: string;
};
