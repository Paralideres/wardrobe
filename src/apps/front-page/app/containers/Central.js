import React from 'react';

import slider1 from '../../../../img/old/slider/compartir.jpg';
import slider2 from '../../../../img/old/slider/paleta_recursos.jpg';
import slider3 from '../../../../img/old/slider/slider-tips1.png';
import slider4 from '../../../../img/old/slider/slider_elcamino2.png';

import LastUpdates from '../components/LastUpdates/LastUpdates';

export default () => (
  <div id="central_content">

    <div className="main_announcer_box">

      <div className="home-slider">
        <ul className="bxslider">
          <li>
            <a href="http://paralideres.org/UploadFile.aspx">
            <img src={slider1} alt="Compartir" />
            </a>
          </li>
          <li>
            <a href="http://paralideres.org/Secciones.aspx?Ide=29&Pag=1">
            <img src={slider2} alt="Recursos" />
            </a>
          </li>
          <li>
            <a target="_blank" href="http://www.youtube.com/watch?v=B2P3anFyNNg&feature=share&list=PLjcT2vLdd9Q2i__NJRMxdnWHncgmXVgwX">
            <img src={slider3} alt="Tips Youtube" />
            </a>
          </li>
          <li>
            <a href="http://www.paralideres.org/VerArticulo.aspx?Idp=6509">
            <img src={slider4} alt="El Camino" />
            </a>
          </li>
        </ul>
      </div>
    </div>

    <LastUpdates />
  </div>
);
