import React from "react";

import css from "./styles.module.css";

export default function DrawerToggle({ clicked }) {
  return (
    <div className={css.DrawerToggle} onClick={clicked}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}
