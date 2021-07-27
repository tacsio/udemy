import React from "react";

import Logo from "../../Logo";
import NavigationItems from "../NavigationItems";
import Backdrop from "../../UI/Backdrop";

import css from "./styles.module.css";

export default function SideDrawer({ closed, open }) {
  let attachedClasses = [css.SideDrawer, css.Close];
  if (open) {
    attachedClasses = [css.SideDrawer, css.Open];
  }

  return (
    <React.Fragment>
      <Backdrop show={open} clicked={closed} />
      <div className={attachedClasses.join(" ")}>
        <div className={css.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </React.Fragment>
  );
}
