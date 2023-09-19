import styles from './Categories.module.scss';

function Categories() {
  return (
    <div className={styles.categories}>
      <ul>
        <li className={styles.active}>в километрах</li>
        <li>в лунных орбитах</li>
      </ul>
    </div>
  );
}

export default Categories;
