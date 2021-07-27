import React from "react";

import css from "./styles.module.css";

import BuildControl from "./BuildControl";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
];

export default function BuildControls({
  ingredientAdded,
  ingredientRemove,
  ingredients,
  price,
  purchasable,
  ordered,
}) {
  const disabled = { ...ingredients };

  for (let key in disabled) {
    disabled[key] = disabled[key] <= 0;
  }

  return (
    <div className={css.BuildControls}>
      <p>
        Current Price: <strong>{price.toFixed(2)}</strong>
      </p>

      {controls.map((control) => (
        <BuildControl
          key={control.label}
          label={control.label}
          disabled={disabled[control.type]}
          added={() => ingredientAdded(control.type)}
          removed={() => ingredientRemove(control.type)}
        />
      ))}

      <button
        disabled={purchasable === false}
        onClick={ordered}
        className={css.OrderButton}
      >
        ORDER NOW
      </button>
    </div>
  );
}
