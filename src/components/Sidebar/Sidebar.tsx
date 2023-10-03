import { FC } from 'react';
import { Step } from '../ui/Step';
import { steps } from './constants';
import { TSidebar } from './types';
import styles from './Sidebar.module.scss';

const Sidebar: FC<TSidebar> = ({ step }) => (
  <aside className={styles.container}>
    {steps.map((item) => (
      <Step step={item} key={item.number} isActive={step === item.number} />
    ))}
  </aside>
);

export { Sidebar };
