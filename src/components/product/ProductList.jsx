import ProductCard from "./ProductCard";
import products from "../../data/products.json";

function ProductList({ category }) {
  return (
    <>
      {products[category].map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </>
  );
}

export default ProductList;