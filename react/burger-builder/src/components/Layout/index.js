import React from "react";

import css from "./styles.module.css";

const layout = (props) => (
  <React.Fragment>
    <div>Toolbar, SideDrawer, Backdrop</div>
    <main className={css.Content}>{props.children}</main>
  </React.Fragment>
);

export default layout;
