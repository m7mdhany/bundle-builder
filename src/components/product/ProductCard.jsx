import styles from "./ProductCard.module.css";

import Badge from "../shared/Badge";
import Price from "../shared/Price";
import QuantityStepper from "../shared/QuantityStepper";
import VariantSelector from "./VariantSelector";
import useBundle from "../../hooks/useBundle";

function ProductCard({ product }) {
  const { state, dispatch } = useBundle();

  const selection = state.selections[product.id];

  const currentVariant =
    selection?.selectedVariant ??
    product.variants[0]?.id ??
    null;

  const displayQuantity = product.variants.length
    ? selection?.quantities?.[currentVariant] ?? 0
    : selection?.quantity ?? 0;

  const isSelected = product.variants.length
    ? Object.values(selection?.quantities ?? {}).some(
      (qty) => qty > 0
    )
    : (selection?.quantity ?? 0) > 0;

  return (
    <article
      className={`${styles.productCard} ${isSelected ? styles.selected : ""
        }`}
    >
      <div className={styles.imageWrapper}>
        <Badge text={product.badge?.text} />

        <img
          className={styles.image}
          src={`/images/${product.image}`}
          alt={product.name}
        />
      </div>

      <div className={styles.content}>
        <h3>{product.name}</h3>

        <p>
          {product.description}{" "}
          <a href="#" onClick={(e) => e.preventDefault()}>
            Learn More
          </a>
        </p>
      </div>

      <VariantSelector
        variants={product.variants}
        selectedVariant={currentVariant}
        onSelect={(variantId) =>
          dispatch({
            type: "SET_VARIANT",
            payload: {
              product,
              variantId,
            },
          })
        }
      />

      <div className={styles.footer}>
        <QuantityStepper
          value={displayQuantity}
          onIncrement={() =>
            dispatch({
              type: "ADD_PRODUCT",
              payload: {
                product,
                variantId: currentVariant,
              },
            })
          }
          onDecrement={() =>
            dispatch({
              type: "REMOVE_PRODUCT",
              payload: {
                product,
                variantId: currentVariant,
              },
            })
          }
        />

        <Price
          price={product.price}
          compareAtPrice={product.compareAtPrice}
        />
      </div>
    </article>
  );
}

export default ProductCard;