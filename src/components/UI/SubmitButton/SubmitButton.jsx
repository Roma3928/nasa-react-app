import React from 'react';
import styles from './SubmitButton.module.scss';

function SubmitButton() {
  return (
    <React.Fragment>
      <button className={styles.submitButton}>Отправить</button>
    </React.Fragment>
  );
}

export default SubmitButton;
