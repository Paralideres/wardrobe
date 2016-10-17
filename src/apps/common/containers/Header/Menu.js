import { nav } from './Menu.css';
import React from 'react';

export default () => (
  <nav className={nav}>
    <ul>
      <li>
        <a>RECURSOS</a>
        <ul>
          <li><a href="/category/devocionales">Devocionales</a></li>
          <li><a href="/category/arte-y-narrativa">Arte y Narrativa</a></li>
          <li><a href="/category/dinamicas-y-juegos">Dinámicas y Juegos</a></li>
          <li><a href="/category/estudios-biblicos">Estudios Bíblicos</a></li>
          <li><a href="/category/consejeria">Consejería</a></li>
          <li><a href="/category/cursos">Cursos</a></li>
          <li><a href="/category/libros">Libros</a></li>
          <li><a href="/category/reflexiones">Reflexiones</a></li>
          <li><a href="/category/tecnologia">Tecnología</a></li>
          <li><a href="/category/articulos">Artículos</a></li>
          <li><a href="/category/musica">Música</a></li>
          <li><a href="/category/videos">Videos</a></li>
        </ul>
      </li>
      <li>
        <a>EQUIPOS</a>
      </li>
    </ul>
  </nav>
);
