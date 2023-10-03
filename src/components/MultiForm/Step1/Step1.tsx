import { FC } from 'react';
import { useFormik } from 'formik';

import { FormHeader } from '@components/ui/FormHeader';
import { TextInput } from '@components/ui/TextInput';
import { Button } from '@components/ui/Button';

import { TStep, TStep1 } from '../types';
import { TErrors } from './types';
import { step1 } from './constants';
import styles from './Step1.module.scss';

const validate = (values: TStep1) => {
  const errors: TErrors = {};

  if (!values.name) {
    errors.name = 'This field is required';
  }

  if (!values.email) {
    errors.email = 'This field is required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.phone) {
    errors.phone = 'This field is required';
  }

  return errors;
};

const Step1: FC<TStep> = ({ handleNext, data: { step1Data } }) => {
  const formik = useFormik<TStep1>({
    initialValues: step1Data || {
      name: '',
      email: '',
      phone: '',
    },
    validate,
    onSubmit: (values) => {
      handleNext && handleNext({ step1Data: { ...values } });
    },
  });

  return (
    <>
      <FormHeader
        title="Personal info"
        description="Please provide your name, email address, and phone number."
      />
      <form onSubmit={formik.handleSubmit} className={styles.form}>
        {step1.map((input) => (
          <TextInput formik={formik} input={input} key={input.name} />
        ))}
        <div className={styles.buttons}>
          <Button type="submit" action="next" />
        </div>
      </form>
    </>
  );
};

export { Step1 };
