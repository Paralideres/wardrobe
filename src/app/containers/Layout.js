import React, { PropTypes } from 'react';

export default function Layout({ children }) {
  return (
    <div>
      <header>
        <div className="logo">
          <a href="#">ParaLideres</a>
        </div>
        <button className="button-equipos">
          Ver Equipos
        </button>
        <button className="button-recursos">
          Ver Recursos
        </button>
        <input type="search" placeholder="Buscar Recursos" name="" />
        <a href="#"><span className="crear-equipo">Crear Equipo</span></a>
        <span className="division">│</span>
        <a href="#"><span className="crear-recurso">Crear Recurso</span></a>
      </header>
      {children}
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.any,
};
