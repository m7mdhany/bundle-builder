import styles from "./ProductList.module.css";

import ProductCard from "./ProductCard";
import products from "../../data/products.json";

function ProductList({ category }) {
  return (
    <div className={styles.grid}>
      {products[category].map((product) => (
        <ProductCard
          key={product.id}
          product={{
            ...product,
            category,
          }}
        />
      ))}
    </div>
  );
}

export default ProductList;