import { FC } from 'react';
import clsx from 'clsx';

import { TButton } from './types';
import { text } from './constants';
import styles from './Button.module.scss';

const Button: FC<TButton> = ({ type = 'button', action, onClick }) => (
  <button
    type={type}
    onClick={onClick}
    className={clsx(styles.button, {
      [styles.button_back]: action === 'back',
      [styles.button_next]: action === 'next',
      [styles.button_confirm]: action === 'confirm',
    })}
  >
    {text[action]}
  </button>
);

export { Button };
