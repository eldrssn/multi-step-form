import clsx from 'clsx';
import { FC } from 'react';
import { useField } from 'formik';

import { TTextInput } from './types';
import styles from './TextInput.module.scss';

const TextInput: FC<TTextInput> = ({ input }) => {
  const { name, label } = input;
  const [field, meta] = useField(input);
  const isError = meta.touched && meta.error;

  return (
    <div
      className={clsx(styles.input, {
        [styles.input_error]: isError,
      })}
    >
      <div className={styles.label_box}>
        <label htmlFor={name}>{label}</label>
        {isError ? <div className={styles.error}>{meta.error}</div> : null}
      </div>
      <input id={name} {...field} {...input} />
    </div>
  );
};

export { TextInput };
