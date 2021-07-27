import React from "react";

import logoImg from "../../assets/images/burger-logo.png";

import css from "./styles.module.css";

export default function Logo({ height }) {
  return (
    <div className={css.Logo} style={{ height: height }}>
      <img src={logoImg} alt="Burger Builder" />
    </div>
  );
}
