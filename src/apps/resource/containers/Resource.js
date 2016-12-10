import styles from './Resource.css';
import React from 'react';

import Button from 'common/components/Button/Button';
import Icon from 'common/components/Icon/Icon';
import Tag from 'common/components/Tag/Tag';
import CategoryIcon from 'common/components/Icon/Category';

function getIframeUrl(resource = {}) {
  if (!resource.attachment) {
    return false;
  }
  const { id, attachment } = resource;
  const base = 'https://docs.google.com/viewer';
  const docUrl = `https://test.paralideres.org/resources/${id}/file/${attachment}`;
  const config = '&embedded=true';
  return `${base}?url=${encodeURIComponent(docUrl)}${config}`;
}

export default ({
  resource
}) => (
  <section className={styles.section}>
    <div className={styles.header}>
      <div className={styles.author}>
        <Icon glyph={Icon.set.ID_CARD} width="25" height="25"/>
      </div>
      <h4 className={styles.authorName}>
        <a>{resource.user.username}</a>
      </h4>
      <span className={styles.date}>
      Publicado hace 3 horas
      </span>
    </div>

    <div className={styles.category}>
      <CategoryIcon
        category={resource.category.slug}
        className={styles.categoryIcon}
        size={18} />
      <a
        href={`/category/${resource.category.slug}`}
        className={styles.categoryLink}>
        {resource.category.label}
      </a>
    </div>
    <h1 className={styles.resourceTitle}>{resource.title}</h1>

    <div className={styles.download}>
      <Button type="passive" disabled={!resource.attachment}>
        Descargar Recurso <Icon glyph={Icon.set.DOWNLOAD} />
      </Button>
      {/* Make this a tooltip
            <b> Para descargar nuestros recursos <a> registrate ahora, es fácil</a></b>
            */}
    </div>

    <div className={styles.actions}>
      <div className={styles.action}>
        <Icon glyph={Icon.set.SHARE} width="20" height="20"/>
      </div>
      <div className={styles.action}>
        <Icon glyph={Icon.set.HEART} width="20" height="20"/>
      </div>
      <div className={styles.action}>
        <Icon glyph={Icon.set.ELIPSIS} width="20" height="20"/>
      </div>
    </div>

    {resource.review ? (
    <div className={styles.review}>
      <h4 className={styles.reviewTitle}>Resumen</h4>
      {resource.review}
    </div>
    ) : null}

    {resource.content ? (
    <article className={styles.content}>
      {resource.content}
    </article>
    ) : null }

    {resource.attachment ? (
    <article className={styles.embededResourceContainer}>
      
    </article>
    ) : null}

    {resource.tags.length > 1 ? (
      <div className={styles.tagsContainer}>
        <p>Encuentra <b>recursos similares</b> a este haciendo click en cualquiera de las
        siguientes etiquetas</p>
        {
          resource.tags.map(tag => (
            <Tag key={tag.id} href="tags/">{tag.label}</Tag>
          ))
        }
      </div>
    ): null}

  </section>
);
