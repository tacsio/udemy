import React, { useState } from "react";

import Burger from "../../components/Burger";

export default function BurgerBuilder() {
  const [ingredients, setIngredients] = useState({
    salad: 1,
    bacon: 1,
    cheese: 2,
    meat: 2,
  });

  return (
    <div>
      <Burger ingredients={ingredients} />
      <div>Burger Controls</div>
    </div>
  );
}
