import { FormikProps } from 'formik';
import { TFormStep, TValues } from '../../MultiForm/Step1/types';

export type TTextInput = {
  formik: FormikProps<TValues>;
  input: TFormStep;
};
