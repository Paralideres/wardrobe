import React from 'react';

export default () => (
  <div id="user_log_form">
    <p><label id="ctl00_lblError"></label></p>
    <p>
      <label htmlFor="pl_usr">Correo Electr&oacute;nico</label>
      <br />
      <input
        type="text"
        id="ctl00_txtEmail"
        className="usr_input"
        tabIndex="1"
      />
    </p>
    <p>
      <label htmlFor="pl_pwr">Contraseña</label>
      <br />
      <input
        type="password"
        id="ctl00_txtClave"
        tabIndex="2"
        className="usr_input"
      />
    </p>
    <p>
      <input
        type="submit"
        value="Entrar"
        id="ctl00_BtnOK"
        tabIndex="3"
        className="link_btn lkb_round_md"
      />
      | <a id="dialog-cancel" href="#">Cancelar</a>
      <br />
      <br />
      <span><a href="EnvioEmail.aspx">Olvide mi contraseña</a></span>
    </p>
  </div>
);
