import React from 'react';

export default () => (
  <div id="sidebar_box">

    <div className="sb_box" id="sb_ad_box">
      <div className="sb_ad">
      </div>
    </div>

    <div className="sb_box">
      <div className="sb_title">ENCUESTA</div>
      <div className="sb_content sv_box clearfix">
        <p className="sv_txt">
          <label id="ctl00_lblPregunta">
            ¿Qu&#233; tipo de recursos prefieres para capacitarte?
          </label>
        </p>
        <div id="ctl00_MostrarPreguntas">
          <table >
            <tr align="left">
              <td>
                <input id="ctl00_sv_radio_opt_1" type="radio"
                  value="sv_radio_opt_1"
                />
                <label htmlFor="ctl00_sv_radio_opt_1">Libros y/o material de lectura. </label>
              </td>
            </tr>
            <tr align="left">
              <td>
                <input id="ctl00_sv_radio_opt_2" type="radio"
                  value="sv_radio_opt_2"
                />
                <label htmlFor="ctl00_sv_radio_opt_2">Videos</label>
              </td>
            </tr>
            <tr align="left">
              <td>
                <input id="ctl00_sv_radio_opt_3" type="radio"
                  value="sv_radio_opt_3"
                />
                <label htmlFor="ctl00_sv_radio_opt_3">Talleres y/o Conferencias </label>
              </td>
            </tr>
            <tr align="left">
              <td>
                <input id="ctl00_sv_radio_opt_4" type="radio"
                  value="sv_radio_opt_4"
                />
                <label htmlFor="ctl00_sv_radio_opt_4">Cursos Online </label>
              </td>
            </tr>
            <tr align="left">
              <td>
                <input id="ctl00_sv_radio_opt_5" type="radio"
                  value="sv_radio_opt_5"
                />
                <label htmlFor="ctl00_sv_radio_opt_5">Otros </label>
              </td>
            </tr>
            <tr align="left">
              <td>
              </td>
            </tr>
            <tr align="left">
              <td>
              </td>
            </tr>
            <tr align="left">
              <td>
              </td>
            </tr>
            <tr align="left">
              <td>
              </td>
            </tr>
            <tr align="left">
              <td>
              </td>
            </tr>
            <tr align="center">
              <td align="center">
                <label id="ErrorRespuesta">* Seleccione una respuesta!</label>
                <input type="submit"
                  name="ctl00$btnVotarPregunta"
                  value="Votar!"
                  id="ctl00_btnVotarPregunta"
                  className="link_btn_round_md sv_votar"
                />
              </td>
            </tr>
          </table>
        </div>
        <br />
        <div>
          <a href="ResultadoEncuesta.aspx?IdPr=190" id="ctl00_aVerResultado">
          <label id="ctl00_Label1">Ver Resultado </label>
          </a>
        </div>
      </div>
    </div>

    <div className="sb_box" id="sb_ad_box">
      <div className="sb_ad">
        <a href="./register.aspx" rel="register"
          title="Aprende, Crece y Comparte en ParaLideres.org"
        >
          <img src="http://paralideres.org/assets/imgs/banners/250x250_pl.png" alt="Participa en una de las mayores comunidades de recursos para l&iacute;deres juveniles, padres y maestros de Am&eacute;rica Latina." />
        </a>
      </div>
    </div>

    <div className="sb_box">
      <div className="sb_title">NUBE DE ETIQUETAS</div>
      <div className="sb_content">
        <table
          ID="tblResultadoEtiquetas"
          className="tag_cloud_tbl"
          HorizontalAlign="Center"
          tabIndex="7"
        >
          <tbody>
          </tbody>
        </table>
      </div>
    </div>

  </div>
);
