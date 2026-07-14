import styles from "./ReviewGroup.module.css";

import ReviewRow from "./ReviewRow";

function ReviewGroup({ title, items }) {
  if (!items.length) return null;

  return (
    <section className={styles.group}>
      <span className={styles.title}>
        {title}
      </span>

      <div className={styles.rows}>
        {items.map(({ product, selection }) => (
          <ReviewRow
            key={product.id}
            product={product}
            selection={selection}
          />
        ))}
      </div>
    </section>
  );
}

export default ReviewGroup;