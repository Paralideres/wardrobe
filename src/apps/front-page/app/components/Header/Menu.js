import React from 'react';

export default () => (
  <div id="menu">
    <div id="ctl00_menu_bar">
      <ul>
        <li>
          <a id="rec_btn">RECURSOS</a>
          <ul>
            <li>
              <a onClick="IraSeccion(340)" >Arte</a>
              <ul>
                <li>
                  <a onClick="IraSeccion(33)" >Cuentos y Poemas</a>
                </li>
                <li>
                  <a onClick="IraSeccion(161)" >Historietas</a>
                </li>
                <li>
                  <a onClick="IraSeccion(32)" >Guiones-Dramas</a>
                </li>
              </ul>
            </li>
            <li>
              <a onClick="IraSeccion(91)" >Devocionales</a>
              <ul>
                <li>
                  <a onClick="IraSeccion(111)" >Sal y Luz</a>
                </li>
                <li>
                  <a onClick="IraSeccion(112)" >El Evangelio de Juan</a>
                </li>
                <li>
                  <a onClick="IraSeccion(49)" >Adviento</a>
                </li>
                <li>
                  <a onClick="IraSeccion(166)" >Pastoral para el Líder</a>
                </li>
                <li>
                  <a onClick="IraSeccion(188)" >Personajes Bíblicos y Mundo Postmoderno</a>
                </li>
                <li>
                  <a onClick="IraSeccion(274)" >Ellos se Encontraron con Jesús</a>
                </li>
                <li>
                  <a onClick="IraSeccion(354)" >El Camino, la Verdad y la Vida, Yo Soy</a>
                </li>
              </ul>
            </li>
            <li>
              <a onClick="IraSeccion(29)" >Dinámicas/Juegos</a>
              <ul>
                <li><a onClick="IraSeccion(57)" >Exteriores - Grupos Grandes</a></li>
                <li><a onClick="IraSeccion(59)" >Interiores - Activos</a></li>
                <li><a onClick="IraSeccion(128)" >Actividades (varias)</a></li>
                <li><a onClick="IraSeccion(61)" >Conociendo la Biblia</a></li>
                <li><a onClick="IraSeccion(58)" >Exteriores - Grupos Pequeños</a></li>
                <li><a onClick="IraSeccion(63)" >Rompehielos</a></li>
                <li><a onClick="IraSeccion(65)" >Conociéndose Más</a></li>
                <li><a onClick="IraSeccion(127)" >Rallys</a></li>
                <li><a onClick="IraSeccion(60)" >Interiores - Tranquilos</a></li>
                <li><a onClick="IraSeccion(64)" >Creando Compañerismo</a></li>
                <li><a onClick="IraSeccion(66)" >Afirmándose</a></li>
              </ul>
            </li>
            <li>
              <a onClick="IraSeccion(345)" >El Camino</a>
              <ul>
                <li><a onClick="IraSeccion(350)" >El Camino: para Grupos Pequeños</a></li>
              </ul>
            </li>
            <li>
              <a onClick="IraSeccion(67)" >Estudios Bíblicos</a>
              <ul>
                <li><a onClick="IraSeccion(31)" >Grupos Pequeños o Discipulado</a></li>
                <li><a onClick="IraSeccion(113)" >Estudios No Activos</a></li>
                <li><a onClick="IraSeccion(30)" >Estudios Activos</a></li>
                <li><a onClick="IraSeccion(68)" >Meditaciones</a></li>
                <li><a onClick="IraSeccion(174)" >Herramientas De Estudio Para El Líder</a></li>
                <li><a onClick="IraSeccion(212)" >Colecci&#243;n Pastoral Juvenil</a></li>
              </ul>
            </li>
            <li><a onClick="IraSeccion(200)" >Para Padres</a></li>
            <li>
              <a onClick="IraSeccion(169)" >Plantillas</a>
              <ul>
                <li><a onClick="IraSeccion(176)" >Boletines</a></li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <a id="cap_btn" >CAPACITACIÓN</a>
          <ul>
            <li>
              <a onClick="IraSeccion(71)" >Artículos</a>
              <ul>
                <li><a onClick="IraSeccion(136)" >Grupos Celulares Juveniles</a></li>
              </ul>
            </li>
            <li><a href="Cursos.aspx" >Clases Interactivas</a></li>
            <li>
              <a onClick="IraSeccion(27)" >Consejería</a>
              <ul>
                <li><a onClick="IraSeccion(22)" >Consejos/Tips</a></li>
                <li><a onClick="IraSeccion(117)" >Preguntas y Respuestas</a></li>
              </ul>
            </li>
            <li>
              <a onClick="IraSeccion(160)" >Cursos</a>
              <ul>
                <li><a onClick="IraSeccion(114)" >RADiKAL: Felix Ortiz</a></li>
                <li><a onClick="IraSeccion(142)" >El Siguiente Nivel</a></li>
                <li><a onClick="IraSeccion(146)" >MINTS OnLine</a></li>
                <li><a onClick="IraSeccion(351)" >Cursos Animados</a></li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <a href="http://blog.paralideres.org" id="com_btn" target="_blank">COMUNIDAD</a>
        </li>
      </ul>
    </div>
  </div>
);
