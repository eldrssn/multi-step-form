import { FC } from 'react';
import { useStepContext } from '@/hooks/useStepContext';
import { Step } from '../ui/Step';
import { steps } from './constants';
import styles from './Sidebar.module.scss';

const Sidebar: FC = () => {
  const { step } = useStepContext();

  return (
    <aside className={styles.container}>
      {steps.map((item) => (
        <Step step={item} key={item.number} isActive={step === item.number} />
      ))}
    </aside>
  );
};

export { Sidebar };
