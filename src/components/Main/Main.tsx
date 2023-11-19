import { StepProvider } from '@/context/StepContext';
import { MultiForm } from '../MultiForm';
import { Sidebar } from '../Sidebar';
import styles from './Main.module.scss';

const Main = () => (
  <StepProvider>
    <section className={styles.section}>
      <Sidebar />
      <MultiForm />
    </section>
  </StepProvider>
);

export { Main };
