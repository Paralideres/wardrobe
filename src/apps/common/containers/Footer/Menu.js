import { nav, menu } from './Menu.css';
import React from 'react';

export default () => (
  <nav className={nav}>
    <ul className={menu}>
      <li><a>Devocionales</a></li>
      <li><a>Arte y Narrativa</a></li>
      <li><a>Dinámicas y Juegos</a></li>
      <li><a>Estudios Bíblicos</a></li>
      <li><a>Consejería</a></li>
      <li><a>Cursos</a></li>
      <li><a>Libros</a></li>
      <li><a>Reflexiones</a></li>
      <li><a>Tecnología</a></li>
      <li><a>Artículos</a></li>
      <li><a>Música</a></li>
      <li><a>Videos</a></li>
    </ul>
  </nav>
);
