import styles from './Poll.css';
import React from 'react';

export default () => (
  <div className={styles.pollContainer}>
    <h1 className={styles.pollTitle}>Encuesta</h1>
    <div className={styles.pollContent}>
      <header className={styles.pollQuestion}>
        Pregunta de la Encuesta
      </header>
      <ul className={styles.pollList}>
        <li className={styles.pollAnswer}>
          <label>
            <input type="radio" />
            Option 1
          </label>
        </li>
        <li className={styles.pollAnswer}>
          <label>
            <input type="radio" />
            Option 2
          </label>
        </li>
        <li className={styles.pollAnswer}>
          <label>
            <input type="radio" />
            Option 3
          </label>
        </li>
        <li className={styles.pollAnswer}>
          <label>
            <input type="radio" />
            Option 4
          </label>
        </li>
        <li className={styles.pollAnswer}>
          <label>
            <input type="radio" />
            Option 5
          </label>
        </li>
        <li className={styles.pollAnswer}>
          <label>
            <input type="radio" />
            Option 5
          </label>
        </li>
        <li className={styles.pollAnswer}>
          <label>
            <input type="radio" />
            Option 5
          </label>
        </li>
        <li className={styles.pollAnswer}>
          <label>
            <input type="radio" />
            Option 5
          </label>
        </li>
        <li className={styles.pollAnswer}>
          <label>
            <input type="radio" />
            Option 5
          </label>
        </li>
      </ul>
      <div className={styles.pollBottom}>
        <a className={styles.pollButton} href="#">Enviar Voto</a>
      </div>
    </div>
  </div>
);
