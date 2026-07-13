import Badge from "../shared/Badge";
import Price from "../shared/Price";
import QuantityStepper from "../shared/QuantityStepper";
import VariantSelector from "./VariantSelector";

function ProductCard({ product }) {
  return (
    <article>
      <Badge text={product.badge?.text} />

      <img src={`/images/${product.image}`} alt={product.name} />

      <h3>{product.name}</h3>

      <p>{product.description}</p>

      <a href="#" onClick={(e) => e.preventDefault()}>
        Learn More
      </a>

      <VariantSelector variants={product.variants} />

      <QuantityStepper
        value={0}
        onIncrement={() => { }}
        onDecrement={() => { }}
      />

      <Price
        price={product.price}
        compareAtPrice={product.compareAtPrice}
      />
    </article>
  );
}

export default ProductCard;