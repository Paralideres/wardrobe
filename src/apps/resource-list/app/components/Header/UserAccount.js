import React from 'react';

// TODO Include LoginFrom

export default () => (
  <div id="user_box">
    <a
      href="UploadFile.aspx"
      className="link_btn_round_md_subir"
      tabIndex="10"
    >
      COLABORAR
    </a>
    <div id="ctl00_Div_sin_Usuario_Reg" className="userbox_reg_profile_box">
      <a id="userbox_reg_link" href="Register.aspx">
        <label id="ctl00_lblReg">REGISTRATE </label>
      </a>
    </div>

    <div id="ctl00_Div_sin_Usuario_Entrar">
      <a id="userbox_log_link" className="userbox_log_link" href="#">
        IDENTIFICARSE
      </a>
    </div>
  </div>
);
