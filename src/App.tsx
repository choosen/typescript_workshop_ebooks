import styles from './App.module.css';
import { Counter } from './counter';

function App() {
  return (
    <div className={styles['App']}>
      <header className={styles['App-header']}>
        <Counter />
      </header>
    </div>
  );
}

export default App;
