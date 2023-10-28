import { useState, memo, FC } from 'react';
import styles from './Categories.module.scss';

interface CategoriesProps {
  setCategory: (category: string) => void;
}

const Categories: FC<CategoriesProps> = memo(({ setCategory }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const categories = ['в километрах', 'в лунных орбитах'];

  const onClickCategories = (index: number) => {
    if (index === 0) {
      setCategory('kilometers');
    } else if (index === 1) {
      setCategory('lunarOrbit');
    }
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
});

export default Categories;
