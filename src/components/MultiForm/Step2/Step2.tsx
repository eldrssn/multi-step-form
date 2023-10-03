import { ChangeEvent, FC, useState } from 'react';
import clsx from 'clsx';

import { FormHeader } from '@components/ui/FormHeader';
import { Button } from '@components/ui/Button';
import { Switcher } from '@components/ui/Switcher';
import { Plan } from '@components/ui/Plan';

import { TStep } from '../types';
import { plans } from './constants';
import styles from './Step2.module.scss';

const Step2: FC<TStep> = ({ handleNext, handleBack, data: { step2Data } }) => {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(
    step2Data?.selectedPlan || null
  );
  const [isYearly, setIsYearly] = useState(!!step2Data?.isYearly);

  const handleTogglePeriod = () => {
    setIsYearly(!isYearly);
  };

  const handlePlanChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedPlan(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!selectedPlan) {
      return;
    }

    handleNext && handleNext({ step2Data: { selectedPlan, isYearly } });
  };

  return (
    <div>
      <FormHeader
        title="Select your plan"
        description="You have the option of monthly or yearly billing."
      />
      <form onSubmit={handleSubmit}>
        <div className={styles.plans}>
          {plans.map((plan) => (
            <Plan
              key={plan.title}
              plan={plan}
              isChecked={selectedPlan === plan.title}
              handlePlanChange={handlePlanChange}
              isYearly={isYearly}
            />
          ))}
        </div>

        <div className={styles.period}>
          <p
            className={clsx(styles.option, {
              [styles.choosen]: !isYearly,
            })}
          >
            Monthly
          </p>
          <Switcher isChecked={isYearly} handleToggle={handleTogglePeriod} />
          <p
            className={clsx(styles.option, {
              [styles.choosen]: isYearly,
            })}
          >
            Yearly
          </p>
        </div>

        <div className={styles.buttons}>
          <Button action="back" onClick={handleBack} />
          <Button type="submit" action="next" />
        </div>
      </form>
    </div>
  );
};

export { Step2 };
