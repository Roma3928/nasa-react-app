import React from 'react';
import AsteroidBasket from './AsteroidBasket/AsteroidBasket';
import AsteroidBlock from './AsteroidBlock/AsteroidBlock';
import Categories from './Categories/Categories';
import styles from './Main.module.scss';
import AsteroidService from '../../../API/AsteroidService';

const Main = () => {
  const [asteroids, setAsteroids] = React.useState([]);
  const [category, setCategory] = React.useState('kilometers');

  React.useEffect(() => {
    fetchAsteroid();
  }, []);

  const fetchAsteroid = async () => {
    const asteroid = await AsteroidService.getAll();
    setAsteroids(Object.values(asteroid.near_earth_objects));
    console.log(Object.values(asteroid.near_earth_objects));
  };

  return (
    <main className={styles.main}>
      <div className={styles.decorElement}></div>
      <div className="container">
        <section className={styles.asteroids}>
          <div className={styles.asteroidsListBox}>
            <h2 className={styles.asteroidsListTitle}>Ближайшие подлёты астероидов</h2>
            <Categories setCategory={setCategory} />
            {asteroids.map((asteroid) =>
              asteroid.map((data) => (
                <AsteroidBlock
                  key={data.id}
                  name={data.name}
                  date={data.close_approach_data[0].close_approach_date_full}
                  distance={
                    category === 'kilometers'
                      ? `${Math.round(data.close_approach_data[0].miss_distance.kilometers)} км`
                      : `${Math.round(data.close_approach_data[0].miss_distance.lunar)} ЛО`
                  }
                  size={data.estimated_diameter.meters.estimated_diameter_min}
                  hazardous={data.is_potentially_hazardous_asteroid}
                />
              )),
            )}
          </div>
          <AsteroidBasket />
        </section>
      </div>
    </main>
  );
};

export default Main;
