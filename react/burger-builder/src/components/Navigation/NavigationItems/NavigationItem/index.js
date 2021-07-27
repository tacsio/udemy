import React from "react";

import css from "./styles.module.css";

export default function NavigationItem({ children, link, active }) {
  return (
    <li className={css.NavigationItem}>
      <a className={active ? css.active : null} href={link}>
        {children}
      </a>
    </li>
  );
}
