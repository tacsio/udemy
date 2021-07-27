import React, { useState } from "react";

import Toolbar from "../Navigation/Toolbar";
import SideDrawer from "../Navigation/SideDrawer";

import css from "./styles.module.css";

export default function Layout({ children }) {
  const [showSideDrawer, setShowSideDrawer] = useState(false);

  function sideDrawerClosedHandler() {
    setShowSideDrawer(false);
  }

  function sideDrawerToggleHandler() {
    setShowSideDrawer(!showSideDrawer);
  }

  return (
    <React.Fragment>
      <Toolbar drawerToggleClicked={sideDrawerToggleHandler} />
      <SideDrawer open={showSideDrawer} closed={sideDrawerClosedHandler} />
      <main className={css.Content}>{children}</main>
    </React.Fragment>
  );
}
