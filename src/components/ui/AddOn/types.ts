export type TAddOn = {
  addOn: Record<string, string>;
  onChange: () => void;
  isChecked: boolean;
  isYearly: boolean;
};
