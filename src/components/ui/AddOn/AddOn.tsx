import { FC } from 'react';
import clsx from 'clsx';

import { getEnding } from '@/utils';
import { TAddOn } from './types';
import styles from './AddOn.module.scss';

const AddOn: FC<TAddOn> = ({ addOn, onChange, isChecked, isYearly }) => (
  <label
    data-testid="addon"
    className={clsx(styles.addon, {
      [styles.checked]: isChecked,
    })}
  >
    <input type="checkbox" checked={isChecked} onChange={onChange} />
    <span className={styles.checkmark}></span>
    <div className={styles.info}>
      <p className={styles.title}>{addOn.title}</p>
      <p className={styles.description}>{addOn.description}</p>
    </div>
    <p className={styles.price}>
      +${isYearly ? addOn.priceYearly : addOn.priceMonthly}/
      {getEnding(isYearly)}
    </p>
  </label>
);

export { AddOn };
