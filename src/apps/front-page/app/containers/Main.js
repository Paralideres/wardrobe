import React, { Component } from 'react';
import Header from './Header';
import Central from './Central';
import SideBar from './SideBar';

class Users extends Component {

  render() {
    return (
      <div id="main_wrapper" className="clearfix">
        <Header />
        <div id="content" className="clearfix">

          <Central />

          <div id="extra-content">

            <div id="news_stream_box" className="clearfix">
              <div className="nws_header">
                <h1>BLOG STREAM</h1>
              </div>
              <div className="nws_option_selector">
                <a href="http://feeds.feedburner.com/Paralideres/BlogColaborativo"
                  target="_blank" className="nws_suscribe">SUSCR&Iacute;BETE</a>
                <a className="nws_more" href="http://blog.paralideres.org" target="_blank"
                  title="Ir al Blog Colaborativo">VER M&Aacute;S</a>
              </div>
              <div id="blog_stream" className="nws_content">
              </div>
            </div>

            <div id="content_stream_box" className="clearfix">
              <div className="cnt_header">
                <h1>Redes Sociales</h1>
              </div>
              <div className="cnt_option_selector">
                <a className="cnt_more" href="#"></a>
              </div>
              <div className="cnt_content">
                <ul>
                  <li>
                    <div className="cnt_stream">
                      <script src="https://apis.google.com/js/platform.js"></script>
                      <div className="g-ytsubscribe" data-channel="ParaLideres" data-layout="full" data-count="default"></div>
                      <iframe
                        allowFullScreen
                        frameBorder="0"
                        height="170"
                        src="https://www.youtube.com/embed/videoseries?list=PLjcT2vLdd9Q3qdPFhMAi7F6Cos0TVpWlm"
                        width="295"/>
                    </div>
                    <div className="cnt_stream">
                      <div className="likeboxwrap">
                        <iframe
                          src="//www.facebook.com/plugins/likebox.php?href=https://www.facebook.com/paralideres?fref=ts;width=260&amp;height=260&amp;show_faces=true&amp;colorscheme=light&amp;stream=false&amp;border_color&amp;header=false&amp;appId=137352931037"
                          scrolling="no"
                          frameBorder="0"
                          allowTransparency="true" />
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div id="footer" className="clearfix">

            <div id="connect_box">
              <div className="ft_title">
                CON&Eacute;CTATE CON NOSOTROS EN L&Iacute;NEA
              </div>
              <div className="ft_content">
                <p className="ft_social">
                  <a href="http://twitter.com/paralideres" target="_blank"><img title="S&iacute;guenos en Twitter" src="assets/imgs/gral/foot_twitter_btn.jpg" /></a>
                  <a href="http://twitter.com/amigosparalideres" target="_blank"><img title="S&iacute;guenos en  Facebook" src="assets/imgs/gral/foot_facebook_btn.jpg" /></a>
                  <a href="http://feeds.feedburner.com/ParaLideres/BlogColaborativo" target="_blank"><img title="Twitter" src="assets/imgs/gral/foot_rss_btn.jpg" /></a>
                </p>
                <p className="ft_aditional_links">
                  <a href="Contactenos.aspx">Contáctenos</a><br />
                  <a href="VerArticulo.aspx?Idp=652">Qué Creemos</a>
                </p>
              </div>
              <div className="ft_title">
                &Uacute;LTIMOS TWEETS
              </div>
              <div className="ft_content">
                <a className="twitter-timeline" href="https://twitter.com/paralideres" data-widget-id="259309833679937537">Tweets by @paralideres</a>
              </div>
            </div>

            <div id="nav_box" className="clearfix">
              <div className="ft_title">
              PUEDES VISITAR TAMBIÉN ...
              </div>
              <div className="ft_content">
                <table >
                  <tr>
                    <td className="ft_sitemap_col clearfix">
                      <ul>
                        <li>RECURSOS</li>
                      </ul>
                      <div id="ctl00_RecursosColumna1">
                        <ul>
                          <li className="Titulo">
                            <a href="#" onClick="IraSeccion(340)">
                              Arte
                            </a>
                          </li>
                          <li><a href="#" onClick="IraSeccion(33)">Cuentos y Poemas</a></li>
                          <li><a href="#" onClick="IraSeccion(161)">Historietas</a></li>
                          <li><a href="#" onClick="IraSeccion(32)">Guiones-Dramas</a></li>
                        </ul>
                        <ul>
                          <li className="Titulo">
                            <a href="#" onClick="IraSeccion(345)">
                              El Camino
                            </a>
                          </li>
                          <li><a href="#" onClick="IraSeccion(350)">El Camino: para Grupos Pequeños</a></li>
                        </ul>
                        <ul>
                          <li className="Titulo">
                            <a href="#" onClick="IraSeccion(169)">
                              Plantillas
                            </a>
                          </li>
                          <li><a href="#" onClick="IraSeccion(176)">Boletines</a></li>
                        </ul>
                      </div>
                    </td>
                    <td className="ft_sitemap_col clearfix">
                      <div id="ctl00_RecursosColumna2">
                        <ul>
                          <li className="Titulo">
                            <a href="#" onClick="IraSeccion(91)">
                              Devocionales
                            </a>
                          </li>
                          <li><a href="#" onClick="IraSeccion(111)">Sal y Luz</a></li>
                          <li><a href="#" onClick="IraSeccion(112)">El Evangelio de Juan</a></li>
                          <li><a href="#" onClick="IraSeccion(49)">Adviento</a></li>
                          <li><a href="#" onClick="IraSeccion(166)">Pastoral para el Líder</a></li>
                          <li><a href="#" onClick="IraSeccion(188)">Personajes Bíblicos y Mundo Postmoderno</a></li>
                          <li><a href="#" onClick="IraSeccion(274)">Ellos se Encontraron con Jesús
                            </a>
                          </li>
                          <li><a href="#" onClick="IraSeccion(354)">El Camino, la Verdad y la Vida, Yo Soy</a></li>
                        </ul>
                        <ul>
                          <li className="Titulo">
                            <a href="#" onClick="IraSeccion(67)">
                              Estudios Bíblicos
                            </a>
                          </li>
                          <li><a href="#" onClick="IraSeccion(31)">Grupos Pequeños o Discipulado</a></li>
                          <li><a href="#" onClick="IraSeccion(113)">Estudios No Activos</a></li>
                          <li><a href="#" onClick="IraSeccion(30)">Estudios Activos</a></li>
                          <li><a href="#" onClick="IraSeccion(68)">Meditaciones</a></li>
                          <li><a href="#" onClick="IraSeccion(174)">Herramientas De Estudio Para El Líder</a></li>
                          <li><a href="#" onClick="IraSeccion(212)">Colecci&#243;n Pastoral Juvenil</a></li>
                        </ul>
                      </div>
                    </td>
                    <td className="ft_sitemap_col clearfix" >
                      <div id="ctl00_RecursosColumna3">
                        <ul>
                          <li className="Titulo">
                            <a href="#" onClick="IraSeccion(29)">
                              Dinámicas/Juegos
                            </a>
                          </li>
                          <li><a href="#" onClick="IraSeccion(57)">Exteriores - Grupos Grandes</a></li>
                          <li><a href="#" onClick="IraSeccion(59)">Interiores - Activos</a></li>
                          <li><a href="#" onClick="IraSeccion(128)">Actividades (varias)</a></li>
                          <li><a href="#" onClick="IraSeccion(61)">Conociendo la Biblia</a></li>
                          <li><a href="#" onClick="IraSeccion(58)">Exteriores - Grupos Pequeños</a></li>
                          <li><a href="#" onClick="IraSeccion(63)">Rompehielos</a></li>
                          <li><a href="#" onClick="IraSeccion(65)">Conociéndose Más</a></li>
                          <li><a href="#" onClick="IraSeccion(127)">Rallys</a></li>
                          <li><a href="#" onClick="IraSeccion(60)">Interiores - Tranquilos</a></li>
                          <li><a href="#" onClick="IraSeccion(64)">Creando Compañerismo</a></li>
                          <li><a href="#" onClick="IraSeccion(66)">Afirmándose</a></li>
                        </ul>
                        <ul>
                          <li className="Titulo">
                            <a href="#" onClick="IraSeccion(200)">Para Padres</a>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                </table>
              </div>
            </div>

            <div id="copy_box">
              ParaLideres.org &copy; 2014 | <a href="#1">T&eacute;rminos</a> | <a href="#1">Privacidad</a> | Todos los derechos reservados
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Users;
