import { FC } from 'react';

import { TSwitcher } from './types';
import styles from './Switcher.module.scss';

const Switcher: FC<TSwitcher> = ({ isChecked, handleToggle }) => (
  <label className={styles.toggle_switch}>
    <input
      checked={isChecked}
      type="checkbox"
      className={styles.toggle_input}
      onChange={handleToggle}
    />
    <span className={styles.slider} />
  </label>
);

export { Switcher };
