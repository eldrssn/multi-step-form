import { FC } from 'react';
import clsx from 'clsx';
import { TPlan } from './types';
import styles from './Plan.module.scss';

const Plan: FC<TPlan> = ({
  plan: { title, icon, priceYearly, priceMonthly },
  handlePlanChange,
  isYearly,
  isChecked,
}) => (
  <label
    key={title}
    className={clsx(styles.plan_box, {
      [styles.checked]: isChecked,
    })}
  >
    <img
      src={icon}
      alt="icon"
      className={styles.icon}
      width="40px"
      height="40px"
    />
    <input
      className={styles.box}
      type="radio"
      name="plan"
      value={title}
      checked={isChecked}
      onChange={handlePlanChange}
    />
    <div className={styles.description}>
      <p className={styles.title}>{title}</p>
      <p className={styles.price}>
        ${isYearly ? priceYearly : priceMonthly}/{isYearly ? 'yr' : 'mo'}
      </p>
      {isYearly ? <p className={styles.special}>2 months free</p> : <></>}
    </div>
  </label>
);

export { Plan };
