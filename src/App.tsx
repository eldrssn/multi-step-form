import './styles/global.scss';
import styles from './App.module.scss';
import { Main } from './components/Main';

function App() {
  return (
    <main className={styles.main}>
      <Main />
      {/* <section>
        <aside></aside>
        <div></div>
      </section> */}
    </main>
  );
}

export default App;
