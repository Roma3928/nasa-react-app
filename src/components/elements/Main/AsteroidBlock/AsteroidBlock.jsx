import styles from './AsteroidBlock.module.scss';
import asteroidIcon from '../../../../assets/img/asteroid-img.png';
import arrowIcon from '../../../../assets/img/asteroid-img.png';
import OrderButton from '../../../UI/OrderButton/OrderButton';

function AsteroidBlock({ date }) {
  return (
    <div className={styles.asteroidBlock}>
      <p className={styles.asteroidDate}>{date}</p>
      <div className={styles.asteroidContent}>
        <p className={styles.asteroidDistance}>
          5 652 334 <span>км</span>
        </p>
        <img className={styles.asteroidImg} src={asteroidIcon} alt="" />
        <div>
          <p className={styles.asteroidName}>2021 FQ</p>
          <p className={styles.asteroidSize}>
            Ø <span>234</span> м
          </p>
        </div>
      </div>
      <div className={styles.asteroidFooter}>
        <OrderButton />
        <p className={styles.asteroiHazardAssessment}>Опасен</p>
      </div>
    </div>
  );
}

export default AsteroidBlock;
