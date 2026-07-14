import styles from "./ReviewRow.module.css";

import QuantityStepper from "../shared/QuantityStepper";
import useBundle from "../../hooks/useBundle";

function ReviewRow({ product, selection }) {
  const { dispatch } = useBundle();

  const quantity = product.variants.length
    ? Object.values(selection.quantities).reduce(
      (sum, qty) => sum + qty,
      0
    )
    : selection.quantity;

  return (
    <div className={styles.row}>
      <div className={styles.info}>
        <img
          className={styles.image}
          src={`/images/${product.image}`}
          alt={product.name}
        />

        <div className={styles.details}>
          <h4 className={styles.name}>
            {product.name}

            {product.isRequired && (
              <span className={styles.required}>
                {" "}
                (Required)
              </span>
            )}
          </h4>
        </div>
      </div>

      <div className={styles.actions}>
        <QuantityStepper
          value={quantity}
          onIncrement={() =>
            dispatch({
              type: "ADD_REVIEW_PRODUCT",
              payload: {
                product,
              },
            })
          }
          onDecrement={() =>
            dispatch({
              type: "REMOVE_REVIEW_PRODUCT",
              payload: {
                product,
              },
            })
          }
        />

        <div className={styles.price}>
          {product.compareAtPrice !== null && (
            <span className={styles.comparePrice}>
              ${product.compareAtPrice.toFixed(2)}
              {selection.category === "plans" && "/mo"}
            </span>
          )}

          <span className={styles.currentPrice}>
            {product.price === 0
              ? "FREE"
              : `$${product.price.toFixed(2)}${selection.category === "plans" ? "/mo" : ""
              }`}
          </span>
        </div>
      </div>
    </div>
  );
}

export default ReviewRow;