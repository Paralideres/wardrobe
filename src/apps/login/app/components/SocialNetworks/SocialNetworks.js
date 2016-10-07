import styles from './SocialNetworks.css';
import React from 'react';

export default () => (
  <div className={styles.snContainer}>
    <div className={styles.snNetwork + ' ' + styles.snFacebook}>
      <div className={styles.snNetworkIcon}>
        <i className="fa fa-thumbs-o-up" />
      </div>
      <div className={styles.snNetworkText}>
        +9K amigos
      </div>
      <a className={styles.snNetworkButton}>
        Me Gusta
      </a>
    </div>

    <div className={styles.snNetwork + ' ' + styles.snTwitter}>
      <div className={styles.snNetworkIcon}>
        <i className="fa fa-twitter" />
      </div>
      <div className={styles.snNetworkText}>
        +9K seguidores
      </div>
      <a className={styles.snNetworkButton}>
        Seguir
      </a>
    </div>

    <div className={styles.snNetwork + ' ' + styles.snYoutube}>
      <div className={styles.snNetworkIcon}>
        <i className="fa fa-youtube" />
      </div>
      <div className={styles.snNetworkText}>
        +9K suscriptores
      </div>
      <a className={styles.snNetworkButton}>
        Suscribirme
      </a>
    </div>
  </div>
);
