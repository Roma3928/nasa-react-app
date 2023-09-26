import React from 'react';
import styles from './Categories.module.scss';

function Categories() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const categories = ['в километрах', 'в лунных орбитах'];

  const onClickCategories = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className={styles.categories}>
      <ul>
        {categories.map((category, index) => (
          <li
            className={activeIndex === index ? styles.active : ''}
            onClick={() => onClickCategories(index)}
            key={`${category}_${index}`}>
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
