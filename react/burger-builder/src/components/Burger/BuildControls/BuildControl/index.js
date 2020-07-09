import React from "react";

import css from "./styles.module.css";

export default function BuildControl({ label, added, removed, disabled }) {
  return (
    <div className={css.BuildControl}>
      <div className={css.Label}>{label}</div>
      <button disabled={disabled} className={css.Less} onClick={removed}>
        Less
      </button>
      <button className={css.More} onClick={added}>
        More
      </button>
    </div>
  );
}
