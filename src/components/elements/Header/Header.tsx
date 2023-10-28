import { FC } from 'react';
import styles from './Header.module.scss';

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>ARMAGEDDON 2023</h1>
      <p className={styles.desription}>
        ООО “Команда им. Б. Уиллиса”. Взрываем астероиды с 1998 года.
      </p>
    </header>
  );
};

export default Header;
