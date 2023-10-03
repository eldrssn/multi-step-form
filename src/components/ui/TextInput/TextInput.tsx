import clsx from 'clsx';
import { FC } from 'react';

import { TTextInput } from './types';
import styles from './TextInput.module.scss';

const TextInput: FC<TTextInput> = ({ formik, input }) => {
  const { type, placeholder, name, label } = input;
  const isError = formik.touched[name] && formik.errors[name];

  return (
    <div
      className={clsx(styles.input, {
        [styles.input_error]: isError,
      })}
    >
      <div className={styles.label_box}>
        <label htmlFor="name">{label}</label>
        {isError ? (
          <div className={styles.error}>{formik.errors[name]}</div>
        ) : null}
      </div>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        value={formik.values[name]}
      />
    </div>
  );
};

export { TextInput };
