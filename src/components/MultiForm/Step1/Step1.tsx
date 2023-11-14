import { FC } from 'react';

import { FormHeader } from '@components/ui/FormHeader';

import { TStep } from '../types';
import { Form } from './Form';

const Step1: FC<TStep> = ({ handleNext, data }) => (
  <>
    <FormHeader
      title="Personal info"
      description="Please provide your name, email address, and phone number."
    />
    <Form handleNext={handleNext} data={data} />
  </>
);

export { Step1 };
