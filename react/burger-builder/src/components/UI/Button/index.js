import React from "react";

import css from "./styles.module.css";

export default function Button({ children, clicked, bntType }) {
  return (
    <button className={[css.Button, css[bntType]].join(" ")} onClick={clicked}>
      {children}
    </button>
  );
}
