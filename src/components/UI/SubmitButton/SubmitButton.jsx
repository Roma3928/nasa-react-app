import React from 'react';
import styles from './SubmitButton.module.scss';

function SubmitButton(props) {
  return (
    <React.Fragment>
      <button className={styles.submitButton} {...props}>
        Отправить
      </button>
    </React.Fragment>
  );
}

export default SubmitButton;
