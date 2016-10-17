import styles from './List.css';

import React from 'react';
import _range from 'lodash/range';
import ResourceList from 'common/components/ResourceList/ResourceList';

export default ({
  label,
  id,
  slug,
  resources
}) => (
  <div className={styles.listContainer}>
    <div className={styles.listTitle}>
      <h4>{label} ({resources.current_page}/{resources.last_page})</h4>
      <span>{resources.total} recursos en esta categoría</span>
    </div>
    <div className={styles.listResourceList}>
      <ResourceList
        resources={resources.data || []}
        category={{ label, id, slug }} />
    </div>
    <div className={styles.listPager}>
      <span className={styles.listCurrentPage} href="#">1</span>
      <a className={styles.listPage} href="#">1</a>
      <a className={styles.listPage} href="#">1</a>
      <a className={styles.listPage} href="#">1</a>
      <a className={styles.listPage} href="#">1</a>
      <a className={styles.listPage} href="#">1</a>
      <a className={styles.listPage} href="#">1</a>
      <a className={styles.listPage} href="#">1</a>
      <a className={styles.listNext} href="#">></a>
      <a className={styles.listLast} href="#">>></a>
    </div>
  </div>
);
