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

  const quantity = product.variants.length
    ? selection?.quantities?.[currentVariant] ?? 0
    : selection?.quantity ?? 0;

  return (
    <article>
      <Badge text={product.badge?.text} />

      <img src={`/images/${product.image}`} alt={product.name} />

      <h3>{product.name}</h3>

      <p>{product.description}</p>

      <a href="#" onClick={(e) => e.preventDefault()}>
        Learn More
      </a>

      <VariantSelector
        variants={product.variants}
        selectedVariant={currentVariant}
        onSelect={(variantId) =>
          dispatch({
            type: "SET_VARIANT",
            payload: {
              productId: product.id,
              variantId,
            },
          })
        }
      />
      
      <QuantityStepper
        value={quantity}
        onIncrement={() =>
          dispatch({
            type: "ADD_PRODUCT",
            payload: {
              productId: product.id,
              variantId: currentVariant
            },
          })
        }
        onDecrement={() =>
          dispatch({
            type: "REMOVE_PRODUCT",
            payload: {
              productId: product.id,
              variantId: currentVariant,
            },
          })
        }
      />

      <Price
        price={product.price}
        compareAtPrice={product.compareAtPrice}
      />
    </article>
  );
}

export default ProductCard;