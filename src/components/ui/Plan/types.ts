import { ChangeEvent } from 'react';

export type TPlan = {
  plan: Record<string, string>;
  handlePlanChange: (event: ChangeEvent<HTMLInputElement>) => void;
  isYearly: boolean;
  isChecked: boolean;
};
