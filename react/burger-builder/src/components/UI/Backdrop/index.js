import React from "react";

import css from "./styles.module.css";

export default function Backdrop({ show, clicked }) {
  return show && <div onClick={clicked} className={css.Backdrop}></div>;
}
