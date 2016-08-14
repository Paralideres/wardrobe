import styles from './LastUpdates.css';
import React from 'react';
import ResourceBox from 'common/components/ResourceBox';

export default () => (
  <div className={styles.container}>
    <div className={styles.title}>
      <h4>Recursos Destacados</h4>
      <a href="#">Dinamicas</a>
      <a href="#">Devocionales</a>
      <a href="#">Rompehielos</a>
      <a href="#">Estudios Biblicos</a>
      <a href="#">Arte</a>
      <a href="#">Cursos</a>
    </div>
    <div className={styles.resourceList}>
      <ResourceBox />
      <ResourceBox />
      <ResourceBox />
      <ResourceBox />
      <ResourceBox />
      <ResourceBox />
    </div>
    <div className={styles.bottom}>
      <a className={styles.button} href="#">Ver m&aacute;s Recursos</a>
    </div>
  </div>
);
