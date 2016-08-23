import styles from './List.css';

import React from 'react';
import _range from 'lodash/range';
import ResourceList from 'common/components/ResourceList/ResourceList';

export default () => (
  <div className={styles.listContainer}>
    <div className={styles.listTitle}>
      <h4>Titulo de la Categoria (1/10)</h4>
    </div>
    <div className={styles.listResourceList}>
      <ResourceList resources={_range(15)} />
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
