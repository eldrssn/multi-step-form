import { FC } from 'react';
import { TFormHeader } from './types';
import styles from './FormHeader.module.scss';

const FormHeader: FC<TFormHeader> = ({ title, description }) => (
  <>
    <h1 className={styles.title}>{title}</h1>
    <p className={styles.description}>{description}</p>
  </>
);

export { FormHeader };
