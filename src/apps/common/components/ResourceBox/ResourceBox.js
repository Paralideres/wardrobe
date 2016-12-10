import styles from './ResourceBox.css';
import React from 'react';

import CategoryIcon from 'common/components/Icon/Category';

export default ({
  id,
  slug,
  title,
  review,
  user,
  category
}) => (
  <div className={styles.box}>
    <div className={styles.boxHeader}>
      <CategoryIcon
        category={category.slug}
        className={styles.boxHeaderIcon}
        size={14} />
      <h3 className={styles.boxHeaderTitle}>
        <a href={`/category/${category.slug}`}>{category.label}</a>
      </h3>
    </div>
    <div className={styles.boxBody}>
      <div className={styles.boxResource}>
        <h3>
          <a href={`/resources/${id}/${slug}`}>{title}</a>
        </h3>
        <summary>
          {review}
        </summary>
        <div className={styles.boxResourceAuthor}>
          <div className={styles.boxResoucesAuthorAvatar}></div>
          <p><a href={`/users/${user.id}`}>{user.fullname}</a></p>
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
          <span>6</span>
          <a><i className="fa fa-heart-o" /></a>
        </div>
      </div>
    </div>
  </div>
);
