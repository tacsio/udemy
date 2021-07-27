import React from "react";

import NavigationItem from "./NavigationItem";

import css from "./styles.module.css";
export default function NavigationItems() {
  return (
    <ul className={css.NavigationItens}>
      <NavigationItem link="/" active>
        Buger Builder
      </NavigationItem>
      <NavigationItem link="/">Checkout</NavigationItem>
    </ul>
  );
}
