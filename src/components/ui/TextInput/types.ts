import { FormikProps } from 'formik';
import { TFormStep } from '@/components/MultiForm/Step1/types';
import { TStep1 } from '@/components/MultiForm/types';

export type TTextInput = {
  formik: FormikProps<TStep1>;
  input: TFormStep;
};
