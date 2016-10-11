import styles from './Resource.css';
import React from 'react';
import he from 'he';

export default ({
  resource
}) => (
  <section className={styles.section}>
    <header className={styles.header}>
      <div className={styles.author}>
      </div>
      <h4 className={styles.authorName}>
        {resource.user.username}
      </h4>
      <div className={styles.actions}>
        <div className={styles.action}>
          <i className="fa fa-share-alt" aria-hidden="true"></i>
        </div>
        <div className={styles.action}>
          <i className="fa fa-heart-o" aria-hidden="true"></i>
        </div>
        <div className={styles.action}>
          <i className="fa fa-ellipsis-h" aria-hidden="true"></i>
        </div>
      </div>
    </header>
    <article>
      <div className={styles.category}>
        <div className={styles.categoryIcon}>Icono</div>
        <a className={styles.categoryLink}>{resource.category.label}</a>
      </div>
      <h1 className={styles.resourceTitle}>{resource.title}</h1>
      <h4 className={styles.reviewTitle}>Resumen</h4>
      <div className={styles.review}>
        {he.decode(resource.review || '')}
      </div>
      <div className={styles.download}>Descargar Recurso</div>
      <div className={styles.embededResourceContainer}>Embeded content</div>
    </article>
    <div className={styles.tagsContainer}>
      <p>Encuentra recursos similares a este haciendo click en cualquiera de las
       siguientes etiquetas</p>
      <a>Tag</a>
      <a>Tag</a>
      <a>Tag</a>
      <a>Tag</a>
      <a>Tag</a>
      <a>Tag</a>
    </div>
  </section>
);
