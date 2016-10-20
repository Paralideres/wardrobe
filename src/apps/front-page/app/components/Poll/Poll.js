import styles from './Poll.css';
import React from 'react';

export default ({
  question,
  options
}) => (
  <div className={styles.pollContainer}>
    <h1 className={styles.pollTitle}>Encuesta</h1>
    <div className={styles.pollContent}>
      <header className={styles.pollQuestion}>
      {question}
      </header>
      <ul className={styles.pollList}>
      {
        options.map(o => (
          <li key={o.index} className={styles.pollAnswer}>
            <label>
              <input type="radio" id="poll" value={o.id} />
              {o.option}
            </label>
          </li>
        ))
      }
      </ul>
      <div className={styles.pollBottom}>
        <a className={styles.pollButton} href="#">Enviar Voto</a>
      </div>
    </div>
  </div>
);
