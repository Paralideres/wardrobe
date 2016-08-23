import styles from './Resource.css';
import React from 'react';

export default () => (
  <section className={styles.section}>
    <header className={styles.header}>
      <div className={styles.author}>
      </div>
      <h4 className={styles.authorName}>
        Nombre Autor
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
        <a className={styles.categoryLink}>Categoria</a>
      </div>
      <h1 className={styles.resourceTitle}>Titulo del Recurso</h1>
      <h4 className={styles.reviewTitle}>Resumen</h4>
      <div className={styles.review}>
        Serie de 3 Estudios en los que no se tratara de ensalzar una red social,
        pero sí usar el contexto en el que los chicos se encuentran, en su
        idioma y su cultura, para llevarles el mismo mensaje de amor y
        salvación de nuestro Señor Jesucristo en el matiz de colores que ya
        conocen.
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
