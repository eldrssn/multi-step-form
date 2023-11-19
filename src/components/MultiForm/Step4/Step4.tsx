import { FC, useState } from 'react';

import { getEnding } from '@/utils';
import { Button } from '@components/ui/Button';
import { FormHeader } from '@components/ui/FormHeader';
import { useStepContext } from '@/hooks/useStepContext';

import { Success } from '../Finish';
import { TStep } from '../types';
import { getAddOns, getAddonPrice, getPlanPrice } from './utils';
import styles from './Step4.module.scss';

const Step4: FC<TStep> = ({ handleBack, data }) => {
  const { setStep } = useStepContext();

  const [isSuccess, setIsSuccess] = useState(false);
  const { step2Data, step3Data } = data;
  const selectedPlan = step2Data?.selectedPlan;
  const isYearly = step2Data?.isYearly;

  const choosenAddons = getAddOns(step3Data);

  const planPrice = getPlanPrice({ selectedPlan, isYearly });
  const addonPrice = getAddonPrice({ choosenAddons, isYearly });

  const totalPrice = planPrice && planPrice + addonPrice;

  const handleClickConfirm = () => {
    setIsSuccess(true);
    console.log(data);
  };

  const handleChangePlane = () => setStep(2);

  if (isSuccess) {
    return <Success />;
  }

  return (
    <div>
      <FormHeader
        title="Finishing up"
        description="Double-check everything looks OK before confirming."
      />
      <div className={styles.info}>
        <div className={styles.plan_info}>
          <div className={styles.plan_box}>
            <p className={styles.plan_title}>
              {selectedPlan} ({isYearly ? 'Yearly' : 'Monthly'})
            </p>
            <button
              className={styles.change_button}
              onClick={handleChangePlane}
            >
              Change
            </button>
          </div>
          <span className={styles.plan_price}>
            ${planPrice}/{getEnding(isYearly)}
          </span>
        </div>
        <div className={styles.addons_info}>
          {choosenAddons?.map((addon) => (
            <div className={styles.addon} key={addon.title}>
              <p className={styles.addon_title}>{addon.title}</p>
              <p className={styles.addon_price}>
                +${isYearly ? addon.priceYearly : addon.priceMonthly}/
                {getEnding(isYearly)}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.total_info}>
        <p className={styles.total_title}>
          Total (per {isYearly ? 'year' : 'month'})
        </p>
        <p className={styles.total_price}>
          ${totalPrice}/{getEnding(isYearly)}
        </p>
      </div>
      <div className={styles.buttons}>
        <Button action="back" onClick={handleBack} />
        <Button action="confirm" onClick={handleClickConfirm} />
      </div>
    </div>
  );
};

export { Step4 };
