import { useState } from 'react';
import { MultiForm } from '../MultiForm';
import { Sidebar } from '../Sidebar';
import styles from './Main.module.scss';

const Main = () => {
  const [step, setStep] = useState(1);

  return (
    <section className={styles.section}>
      <Sidebar step={step} />
      <MultiForm step={step} setStep={setStep} />
    </section>
  );
};

export { Main };
