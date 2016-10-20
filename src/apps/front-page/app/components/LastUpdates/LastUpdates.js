import styles from './LastUpdates.css';
import React from 'react';
import ResourceBox from 'common/components/ResourceBox/ResourceBox';

export default ({
  resources
}) => (
  <div className={styles.luContainer}>
    <div className={styles.luTitle}>
      <h4>Recursos Destacados</h4>
      <a href="/category/dinamicas-y-juegos">Dinamicas</a>
      <a href="/category/devocionales">Devocionales</a>
      <a href="/category/estudios-biblicos">Estudios Biblicos</a>
      <a href="/category/arte-y-narrativa">Arte</a>
      <a href="/category/cursos">Cursos</a>
    </div>
    <div className={styles.luResourceList}>
      {
        resources.map(r => <ResourceBox key={r.id} {...r} />)
      }
    </div>
    <div className={styles.luBottom}>
      <a className={styles.luButton} href="/resources">Ver m&aacute;s Recursos</a>
    </div>
  </div>
);
