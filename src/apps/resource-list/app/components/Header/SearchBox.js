import React from 'react';

export default () => (
  <div id="search_box">
    <form name="search_form" action="#" method="post" id="search_form">
      <input
        type="text"
        id="ctl00_search_txt_input"
        size="32"
        className="search_txt_input"
      />
      <input
        type="submit"
        value="BUSCAR"
        id="ctl00_btnBuscar"
        className="search_submit link_btn_round_md"
      />
    </form>
  </div>
);
