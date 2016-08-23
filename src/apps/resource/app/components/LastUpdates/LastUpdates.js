import styles from './LastUpdates.css';
import React from 'react';
import ResourceBox from 'common/components/ResourceBox/ResourceBox';

export default () => (
  <div className={styles.luContainer}>
    <div className={styles.luTitle}>
      <h4>Recursos Destacados</h4>
      <a href="#">Dinamicas</a>
      <a href="#">Devocionales</a>
      <a href="#">Rompehielos</a>
      <a href="#">Estudios Biblicos</a>
      <a href="#">Arte</a>
      <a href="#">Cursos</a>
    </div>
    <div className={styles.luResourceList}>
      <ResourceBox />
      <ResourceBox />
      <ResourceBox />
      <ResourceBox />
      <ResourceBox />
      <ResourceBox />
    </div>
    <div className={styles.luBottom}>
      <a className={styles.luButton} href="#">Ver m&aacute;s Recursos</a>
    </div>
  </div>
);
