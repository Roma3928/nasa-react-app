import { memo, FC } from 'react';
import SubmitButton from '../../../UI/SubmitButton/SubmitButton';
import styles from './AsteroidBasket.module.scss';

const AsteroidBasket: FC = memo(() => {
  return (
    <div className={styles.basket}>
      <div>
        <h3 className={styles.basketTitle}>Корзина</h3>
        <p className={styles.basketAmount}>
          <span>2</span> астероид<span>а</span>
        </p>
      </div>
      <SubmitButton />
    </div>
  );
});

export default AsteroidBasket;
