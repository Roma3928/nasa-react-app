import AsteroidBlock from './AsteroidBlock/AsteroidBlock';
import Categories from './Categories/Categories';
import styles from './Main.module.scss';

const Main = () => {
  return (
    <main className={styles.main}>
      <div className={styles.decorElement}></div>
      <div className="container">
        <section className={styles.asteroids}>
          <div className={styles.asteroidsListBox}>
            <h2 className={styles.asteroidsListTitle}>Ближайшие подлёты астероидов</h2>
            <Categories />
            <AsteroidBlock date="12 сент 2023" />
            <AsteroidBlock date="12 сент 2023" />
            <AsteroidBlock date="12 сент 2023" />
          </div>
        </section>
      </div>
    </main>
  );
};

export default Main;
