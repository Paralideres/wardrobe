import styles from './Category.css';
import React from 'react';
import cx from 'classnames';
import Icon from './Icon';

const categoryIconMap = {
  'devocionales': Icon.set.OPEN_BOOK,
  'arte-y-narrativa': Icon.set.QUILL,
  'dinamicas-y-juegos': Icon.set.BASKETBALL,
  'estudios-biblicos': Icon.set.BOOKMARK,
  'consejeria': Icon.set.USER_CHAT,
  'cursos': Icon.set.GRADUATION,
  'libros': Icon.set.BOOK,
  'reflexiones': Icon.set.USER_HEART,
  'tecnologia': Icon.set.LAMP,
  'articulos': Icon.set.PAPER_PIN,
  'musica': Icon.set.MUSIC_NOTE,
  'videos': Icon.set.VIDEO_CLIP
}

export default ({ category, size }) => {

  const iconStyle = cx(styles.base, styles[category]);
  console.log(styles);
  return (
    <div className={iconStyle}>
      <Icon
        glyph={categoryIconMap[category]}
        width={size}
        height={size}
      />
    </div>
  );
};
