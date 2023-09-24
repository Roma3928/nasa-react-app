import styles from './AsteroidBlock.module.scss';
import asteroidIcon from '../../../../assets/img/asteroid-img.png';
import OrderButton from '../../../UI/OrderButton/OrderButton';
import classNames from 'classnames';

function AsteroidBlock({ name, hazardous, size, distance, date }) {
  return (
    <div className={styles.asteroidBlock}>
      <p className={styles.asteroidDate}>{date}</p>
      <div className={styles.asteroidContent}>
        <p className={styles.asteroidDistance}>
          {Math.round(distance)} <span>км</span>
        </p>
        <img
          className={classNames(styles.asteroidImg, {
            [styles.asteroidImgLarge]: size > 100,
          })}
          src={asteroidIcon}
          alt=""
        />
        <div>
          <p className={styles.asteroidName}>{name}</p>
          <p className={styles.asteroidSize}>
            Ø <span>{Math.round(size)}</span> м
          </p>
        </div>
      </div>
      <div className={styles.asteroidFooter}>
        <OrderButton />
        {hazardous && <p className={styles.asteroidHazardAssessment}>Опасен</p>}
      </div>
    </div>
  );
}

export default AsteroidBlock;
