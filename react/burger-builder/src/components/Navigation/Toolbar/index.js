import React from "react";
import Logo from "../../Logo";
import NavigationItems from "../NavigationItems";
import DrawerToggle from "../SideDrawer/DrawerToggle";

import css from "./styles.module.css";

export default function Toolbar({ drawerToggleClicked }) {
  return (
    <header className={css.Toolbar}>
      <DrawerToggle clicked={drawerToggleClicked} />
      <div className={css.Logo}>
        <Logo />
      </div>
      <nav className={css.DesktopOnly}>
        <NavigationItems />
      </nav>
    </header>
  );
}
