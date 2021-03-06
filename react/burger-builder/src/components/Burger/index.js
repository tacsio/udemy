import React from "react";

import css from "./styles.module.css";
import BurgerIngredient from "./BurgerIngredient";

export default function Burger({ ingredients }) {
  let ingredientsArr = Object.keys(ingredients)
    .map((key) => {
      return [...Array(ingredients[key])].map((_, index) => {
        return <BurgerIngredient key={key + index} type={key} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);

  if (ingredientsArr.length === 0) {
    ingredientsArr = <p>Please start adding ingredients!</p>;
  }

  return (
    <div className={css.Burger}>
      <BurgerIngredient type="bread-top" />
      {ingredientsArr}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
}
