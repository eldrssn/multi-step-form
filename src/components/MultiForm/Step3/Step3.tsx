import { FC, useState } from 'react';

import { FormHeader } from '@components/ui/FormHeader';
import { Button } from '@components/ui/Button';
import { AddOn } from '@components/ui/AddOn';

import { TStep, TStep3 } from '../types';
import { addOns } from './constants';
import styles from './Step3.module.scss';

const Step3: FC<TStep> = ({ handleNext, handleBack, data }) => {
  const [selectedAddOns, setSelectedAddOns] = useState<TStep3>(
    data?.step3Data || {}
  );

  const isYearly = !!data.step2Data?.isYearly;

  const handleCheckboxChange = (addOnTitle: string) => {
    setSelectedAddOns({
      ...selectedAddOns,
      [addOnTitle]: !selectedAddOns[addOnTitle],
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    handleNext && handleNext({ step3Data: { ...selectedAddOns } });
  };
  return (
    <div>
      <FormHeader
        title="Pick add-ons"
        description="Add-ons help enhance your gaming experience."
      />
      <form onSubmit={handleSubmit}>
        <div className={styles.addons}>
          {addOns.map((addOn) => (
            <AddOn
              isYearly={isYearly}
              key={addOn.name}
              addOn={addOn}
              onChange={() => handleCheckboxChange(addOn.name)}
              isChecked={selectedAddOns[addOn.name] || false}
            />
          ))}
        </div>
        <div className={styles.buttons}>
          <Button action="back" onClick={handleBack} />
          <Button action="next" type="submit" />
        </div>
      </form>
    </div>
  );
};

export { Step3 };
