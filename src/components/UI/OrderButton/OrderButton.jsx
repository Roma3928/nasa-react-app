import React from 'react';
import styles from './OrderButton.module.scss';

function OrderButton() {
  const [itemAdded, setitemAdded] = React.useState(false);

  const addItem = () => {
    setitemAdded(!itemAdded);
  };

  return (
    <React.Fragment>
      <button className={styles.orderButton} onClick={addItem}>
        {itemAdded ? 'В КОРЗИНЕ' : 'ЗАКАЗАТЬ'}
      </button>
    </React.Fragment>
  );
}

export default OrderButton;
