import styles from "./Price.module.css";

function Price({ price, compareAtPrice }) {
  return (
    <div className={styles.price}>
      {compareAtPrice && (
        <span className={styles.compare}>
          ${compareAtPrice}
        </span>
      )}

      <span className={styles.current}>
        ${price}
      </span>
    </div>
  );
}

export default Price;