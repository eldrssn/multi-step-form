import { FC, useState } from 'react';

import { useStepContext } from '@/hooks/useStepContext';
import { Step1 } from './Step1';
import { Step2 } from './Step2';
import { Step3 } from './Step3';
import { Step4 } from './Step4';

import { TData, TStep } from './types';
import styles from './MultiForm.module.scss';

const FORM_STEPS: Record<number, FC<TStep>> = {
  1: Step1,
  2: Step2,
  3: Step3,
  4: Step4,
};

const MultiForm: FC = () => {
  const { step, setStep } = useStepContext();

  const [data, setData] = useState<TData>({
    step1Data: null,
    step2Data: null,
    step3Data: null,
  });

  const handleNext = (stepData: Partial<TData>) => {
    setData((prevData) => ({ ...prevData, ...stepData }));
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const Component = FORM_STEPS[step];

  return (
    <div className={styles.container}>
      <div className={styles.form_box}>
        <Component
          handleBack={handleBack}
          handleNext={handleNext}
          data={data}
        />
      </div>
    </div>
  );
};

export { MultiForm };
