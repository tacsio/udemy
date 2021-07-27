import React from "react";

import Button from "../../UI/Button";

export default function OrderSummary({
  ingredients,
  purchaseCanceled,
  purchaseContinued,
  price,
}) {
  const summary = Object.keys(ingredients).map((key) => {
    return (
      <li key={key}>
        <span style={{ textTransform: "capitalize" }}>{key}</span>:{" "}
        {ingredients[key]}
      </li>
    );
  });

  console.log("update");

  return (
    <div>
      <h3>Your Order</h3>
      <p>Delicious burger with the following ingredients:</p>

      <ul>{summary}</ul>
      <p>
        <strong>Total Prince: {price.toFixed(2)}</strong>
      </p>
      <p>Continue to Checkout?</p>
      <Button bntType="Danger" clicked={purchaseCanceled}>
        Cancel
      </Button>
      <Button bntType="Success" clicked={purchaseContinued}>
        Continue
      </Button>
    </div>
  );
}
