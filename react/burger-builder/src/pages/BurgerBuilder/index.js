import React, { useState, useEffect } from "react";

import Burger from "../../components/Burger";
import BuildControls from "../../components/Burger/BuildControls";
import OrderSummary from "../../components/Burger/OrderSummary";

import Modal from "../../components/UI/Modal";

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7,
};

const basePrice = 4;

export default function BurgerBuilder() {
  const [purchasable, setPurchasable] = useState(false);
  const [purchasing, setPurchasing] = useState(false);
  const [totalPrice, setTotalPrice] = useState(basePrice);
  const [ingredients, setIngredients] = useState({
    salad: 0,
    bacon: 0,
    cheese: 0,
    meat: 0,
  });

  useEffect(() => {
    setPurchasable(totalPrice > basePrice);
  }, [totalPrice]);

  function addIngredientHandler(type) {
    const oldCount = ingredients[type];
    const updatedCounted = oldCount + 1;

    ingredients[type] = updatedCounted;

    const priceAddition = INGREDIENT_PRICES[type];
    const newPrice = totalPrice + priceAddition;

    setTotalPrice(newPrice);
    setIngredients(ingredients);
  }

  function removeIngredientHandler(type) {
    const oldCount = ingredients[type];
    if (oldCount === 0) return;

    const updatedCound = oldCount - 1;
    ingredients[type] = updatedCound;

    const priceReduction = INGREDIENT_PRICES[type];
    const newPrice = totalPrice - priceReduction;

    setTotalPrice(newPrice);
    setIngredients(ingredients);
  }

  function purshaseHandler() {
    setPurchasing(true);
  }

  function purchaseCancelHandler() {
    setPurchasing(false);
  }

  function purchaseContinueHandler() {
    alert("Continue");
  }

  return (
    <div>
      <Modal show={purchasing} modalClosed={purchaseCancelHandler}>
        <OrderSummary
          purchaseCanceled={purchaseCancelHandler}
          purchaseContinued={purchaseContinueHandler}
          ingredients={ingredients}
          price={totalPrice}
        />
      </Modal>
      <Burger ingredients={ingredients} />
      <BuildControls
        purchasable={purchasable}
        price={totalPrice}
        ingredients={ingredients}
        ingredientAdded={addIngredientHandler}
        ingredientRemove={removeIngredientHandler}
        ordered={purshaseHandler}
      />
    </div>
  );
}
