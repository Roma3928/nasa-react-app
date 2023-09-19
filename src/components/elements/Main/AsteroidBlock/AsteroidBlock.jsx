import styles from './AsteroidBlock.module.scss';

function AsteroidBlock({ date }) {
  return (
    <div className={styles.asteroidBlock}>
      <p className={styles.asteroidDate}>{date}</p>
    </div>
  );
}

export default AsteroidBlock;
