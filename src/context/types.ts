import { Dispatch, SetStateAction } from 'react';

export type StepContextType = {
  step: number;
  setStep: Dispatch<SetStateAction<number>>;
};
