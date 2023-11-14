import { ReactNode, createContext, useState } from 'react';
import { StepContextType } from './types';

const defaultStepContext: StepContextType = {
  step: 1,
  setStep: () => {},
};

export const StepContext = createContext(defaultStepContext);

export const StepProvider = ({ children }: { children: ReactNode }) => {
  const [step, setStep] = useState(1);

  return (
    <StepContext.Provider value={{ step, setStep }}>
      {children}
    </StepContext.Provider>
  );
};
