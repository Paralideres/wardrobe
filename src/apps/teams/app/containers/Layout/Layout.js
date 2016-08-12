import styles from './Layout.css';
import React, { PropTypes } from 'react';
import { Link } from 'react-router';

export default function Layout({ children }) {
  return (
    <div>
      <header className={styles.header}>
        <div className={styles.logo}>
          <Link to="/" />
        </div>
        <div className={styles.actionBar}>
          <div className={styles.searchBarContainer}>
            <input
              className={styles.searchBar}
              placeholder="Busca en ParaLideres"
            />
            <i className="fa fa-search" />
          </div>
          <div className={styles.createActions}>
            <a className={styles.createResource}>
              Crear Recurso <i className="fa fa-file-text-o" />
            </a>
            <span className={styles.division}>│</span>
            <a className={styles.createTeam}>
              Crear Equipo <i className="fa fa-user" />
            </a>
          </div>
        </div>
      </header>
      <nav className={styles.sidebar}>
        <div className={styles.account}>
          <div className={styles.profilePic}></div>
          <a className={styles.name}>
            Jorge Vivas V
            <i className="fa fa-chevron-down" />
          </a>
          <div className={styles.resourcesCount}>
            0 Publicaciones
          </div>
        </div>
        <ul className={styles.shorthand}>
          <li>
            <h3 className={styles.shorthandTitle}>
              Equipos
              <i className="fa fa-user" />
            </h3>
            <ul className={styles.shorthandMenu}>
              <li>
                <a>
                  <i className={styles.icon} />
                  Alabanza
                  <i className="fa fa-chevron-down" />
                </a>
              </li>
              <li>
                <a>
                  <i className={styles.icon} />
                  Oracion
                  <i className="fa fa-chevron-down" />
                </a>
              </li>
              <li>
                <a>
                  Crear Equipo
                  <i className="fa fa-plus" />
                </a>
              </li>
            </ul>
          </li>

          <li>
            <h3 className={styles.shorthandTitle}>
              Recursos
              <i className="fa fa-file-text-o" />
            </h3>
            <ul className={styles.shorthandMenu}>
              <li>
                <a>
                  Mis Recursos
                  <i className="fa fa-chevron-down" />
                </a>
              </li>
              <li>
                <a>
                  Favoritos
                  <i className="fa fa-chevron-down" />
                </a>
              </li>
              <li>
                <a>
                  Crear Recurso
                  <i className="fa fa-plus" />
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
      <main className={styles.main}>
        {children}
      </main>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.any,
};
