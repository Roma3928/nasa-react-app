import React from 'react';
import AsteroidBasket from './AsteroidBasket/AsteroidBasket';
import AsteroidBlock from './AsteroidBlock/AsteroidBlock';
import Categories from './Categories/Categories';
import styles from './Main.module.scss';
import AsteroidService from '../../../API/AsteroidService';
import Loader from '../../UI/Loader/Loader';
import { useFetching } from '../../../hooks/useFetching';
import { getPageCount } from '../../../utils/pages';
import { useObserver } from '../../../hooks/useObserver';

const Main = () => {
  const [asteroids, setAsteroids] = React.useState([]);
  const [category, setCategory] = React.useState('kilometers');
  const [totalPages, setTotalPages] = React.useState(0);
  const [page, setPage] = React.useState(1);
  const [limit, setLimit] = React.useState(10);
  const lastElement = React.useRef();

  const [fetchAsteroid, isAsteroidsLoading, asteroidError] = useFetching(async () => {
    const asteroid = await AsteroidService.getAll();
    let resultingListOfAsteroids = [];
    for (let listOfAsteroids of Object.values(asteroid.near_earth_objects)) {
      for (let data of listOfAsteroids) {
        resultingListOfAsteroids.push(data);
      }
    }
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const nextAsteroids = resultingListOfAsteroids.slice(startIndex, endIndex);

    setAsteroids([...asteroids, ...nextAsteroids]);

    const totalCount = resultingListOfAsteroids.length;
    setTotalPages(getPageCount(totalCount, limit));
  });

  React.useEffect(() => {
    fetchAsteroid();
  }, [page, limit]);

  useObserver(lastElement, page < totalPages, isAsteroidsLoading, () => {
    setPage(page + 1);
  });

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
            {asteroidError && <p className={styles.error}>Произошла ошибка!</p>}
            {asteroids.map((asteroid) => (
              <AsteroidBlock
                key={asteroid.id}
                name={asteroid.name}
                date={asteroid.close_approach_data[0].close_approach_date_full}
                distance={
                  category === 'kilometers'
                    ? `${Math.round(asteroid.close_approach_data[0].miss_distance.kilometers)} км`
                    : formatLunarOrbits(
                        Math.round(asteroid.close_approach_data[0].miss_distance.lunar),
                      )
                }
                size={asteroid.estimated_diameter.meters.estimated_diameter_min}
                hazardous={asteroid.is_potentially_hazardous_asteroid}
              />
            ))}
            <div ref={lastElement}></div>
            {isAsteroidsLoading && (
              <div className={styles.loaderBox}>
                <Loader />
              </div>
            )}
          </div>
          <AsteroidBasket />
        </section>
      </div>
    </main>
  );
};

export default Main;
