import React from 'react';
import AsteroidBasket from './AsteroidBasket/AsteroidBasket';
import AsteroidBlock from './AsteroidBlock/AsteroidBlock';
import Categories from './Categories/Categories';
import styles from './Main.module.scss';
import AsteroidService from '../../../API/AsteroidService';
import Loader from '../../UI/Loader/Loader';

const Main = () => {
  const [asteroids, setAsteroids] = React.useState([]);
  const [category, setCategory] = React.useState('kilometers');
  const [isAsteroidsLoading, setIsAsteroidsLoading] = React.useState(false);

  React.useEffect(() => {
    fetchAsteroid();
  }, []);

  const fetchAsteroid = async () => {
    setIsAsteroidsLoading(true);
    const asteroid = await AsteroidService.getAll();
    setAsteroids(Object.values(asteroid.near_earth_objects));
    setIsAsteroidsLoading(false);
  };

  const formatLunarOrbits = (count) => {
    if (count === 1) {
      return '1 лунная орбита';
    } else if (count >= 2 && count <= 4) {
      return `${count} лунные орбиты`;
    } else {
      return `${count} лунных орбит`;
    }
  };

  return (
    <main className={styles.main}>
      <div className={styles.decorElement}></div>
      <div className="container">
        <section className={styles.asteroids}>
          <div className={styles.asteroidsListBox}>
            <h2 className={styles.asteroidsListTitle}>Ближайшие подлёты астероидов</h2>
            <Categories setCategory={setCategory} />
            {isAsteroidsLoading ? (
              <div className={styles.loaderBox}>
                <Loader />
              </div>
            ) : (
              asteroids.map((asteroid) =>
                asteroid.map((data) => (
                  <AsteroidBlock
                    key={data.id}
                    name={data.name}
                    date={data.close_approach_data[0].close_approach_date_full}
                    distance={
                      category === 'kilometers'
                        ? `${Math.round(data.close_approach_data[0].miss_distance.kilometers)} км`
                        : formatLunarOrbits(
                            Math.round(data.close_approach_data[0].miss_distance.lunar),
                          )
                    }
                    size={data.estimated_diameter.meters.estimated_diameter_min}
                    hazardous={data.is_potentially_hazardous_asteroid}
                  />
                )),
              )
            )}
          </div>
          <AsteroidBasket />
        </section>
      </div>
    </main>
  );
};

export default Main;
