import { plans } from '../Step2/constants';
import { addOns } from '../Step3/constants';

export const getPlanPrice = ({
  selectedPlan,
  isYearly,
}: {
  selectedPlan?: string;
  isYearly?: boolean;
}) => {
  const plan = plans.find((plan) => plan.title === selectedPlan);

  if (!plan) {
    return;
  }
  return isYearly ? +plan.priceYearly : +plan.priceMonthly;
};

export const getAddOns = (step3Data: Record<string, boolean> | null) => {
  if (!step3Data) {
    return;
  }

  return addOns.filter((addOn) => step3Data[addOn.name] === true);
};

export const getAddonPrice = ({
  choosenAddons,
  isYearly,
}: {
  choosenAddons?: Record<string, string>[];
  isYearly?: boolean;
}) =>
  choosenAddons?.reduce((accumulator, nextAddon) => {
    accumulator += isYearly ? +nextAddon.priceYearly : +nextAddon.priceMonthly;
    return accumulator;
  }, 0) || 0;
