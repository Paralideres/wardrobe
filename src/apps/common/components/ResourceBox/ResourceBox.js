import styles from './ResourceBox.css';
import React from 'react';

export default () => (
  <div className={styles.box}>
    <div className={styles.boxHeader}>
      <div className={styles.boxHeaderIcon}><i /></div>
      <h3 className={styles.boxHeaderTitle}>Devocionales</h3>
    </div>
    <div className={styles.boxBody}>
      <div className={styles.boxResource}>
        <h3>Titulo del Recurso</h3>
        <summary>
          <p>
            Resume: Dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore Pablo sed do
            eiusmod.
          </p>
        </summary>
        <div className={styles.boxResourceAuthor}>
          <div className={styles.boxResoucesAuthorAvatar}></div>
          <p>Author: <a>Nombre del Autor</a></p>
        </div>
      </div>
    </div>
    <div className={styles.boxFooter}>
      <div className={styles.boxResourceShare}>
        <a>
          <i className="fa fa-share-alt" /> Compartir Recurso
        </a>
      </div>
      <div className={styles.boxResourceLike}>
        <div className={styles.boxResourceLikeBox}>
          <span>26</span>
          <a><i className="fa fa-heart-o" /></a>
        </div>
      </div>
    </div>
  </div>
);
