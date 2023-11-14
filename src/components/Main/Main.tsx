import { MultiForm } from '../MultiForm';
import { Sidebar } from '../Sidebar';
import styles from './Main.module.scss';
import { StepProvider } from '@/context/StepContext';

const Main = () => (
  <StepProvider>
    <section className={styles.section}>
      <Sidebar />
      <MultiForm />
    </section>
  </StepProvider>
);

export { Main };
