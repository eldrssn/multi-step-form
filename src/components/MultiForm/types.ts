export type TStep1 = {
  name: string;
  email: string;
  phone: string;
};

export type TStep2 = {
  selectedPlan?: string;
  isYearly?: boolean;
};

export type TStep3 = Record<string, boolean>;

export type TData = {
  step1Data: TStep1 | null;
  step2Data: TStep2 | null;
  step3Data: TStep3 | null;
};

export type TStep = {
  handleBack?: () => void;
  handleNext?: (stepData: Partial<TData>) => void;
  data: TData;
};

export type TMultiForm = {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
};
