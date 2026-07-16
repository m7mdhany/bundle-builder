import styles from "./ProductCard.module.css";

import Badge from "../shared/Badge";
import Price from "../shared/Price";
import QuantityStepper from "../shared/QuantityStepper";
import VariantSelector from "./VariantSelector";
import useBundle from "../../hooks/useBundle";
import useMediaQuery from "../../hooks/useMediaQuery";

function ProductCard({ product }) {
  const { state, dispatch } = useBundle();
  const isDesktop = useMediaQuery("(min-height: 1078px)");
  const isTablet = useMediaQuery("(max-height: 1077px)");
  const isMobile = useMediaQuery("(max-width: 430px)");

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
    <>
      {isDesktop && <article
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
          <h3>{product.name}
            {product.isRequired && (
              <span className={styles.required}>
                (Required)
              </span>
            )}
          </h3>
          <p>
            {product.description}{" "}
            <a href="#" onClick={(e) => e.preventDefault()}>
              Learn More
            </a>
          </p>
        </div>

        <div className={styles.footer}>
          <div className={styles.variantWrapper}>
            <VariantSelector
              className={styles.variantSelector}
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
          </div>

          <div className={styles.bottomRow}>
            <QuantityStepper
              value={displayQuantity}
              disableDecrement={product.isRequired}
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
        </div>
      </article>}
      {isTablet && <article
        className={`${styles.productCardTablet} ${isSelected ? styles.selected : ""
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
        <div className={styles.tabletContent}>
          <div className={styles.content}>
            <h3>{product.name}
              {product.isRequired && (
                <span className={styles.required}>
                  (Required)
                </span>
              )}
            </h3>
            <p>
              {product.description}{" "}
              <a href="#" onClick={(e) => e.preventDefault()}>
                Learn More
              </a>
            </p>
          </div>
          <div className={styles.footer}>
            <div className={styles.variantWrapper}>
              <VariantSelector
                className={styles.variantSelector}
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
            </div>

            <div className={styles.bottomRow}>
              <QuantityStepper
                value={displayQuantity}
                disableDecrement={product.isRequired}
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
          </div>
        </div>

      </article>}

    </>

  );
}

export default ProductCard;