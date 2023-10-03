import { FC } from 'react';
import clsx from 'clsx';

import { TStep } from './types';
import styles from './Step.module.scss';

const Step: FC<TStep> = ({ step: { number, title }, isActive }) => (
  <div
    className={clsx(styles.box, {
      [styles.box_active]: isActive,
    })}
  >
    <div className={styles.number}>{number}</div>
    <div className={styles.info}>
      <p className={styles.info_number}>Step {number}</p>
      <p className={styles.info_title}>{title}</p>
    </div>
  </div>
);

export { Step };
