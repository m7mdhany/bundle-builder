import styles from "./ShippingRow.module.css";

function ShippingRow() {
  return (
    <div className={styles.row}>
      <div className={styles.info}>
        <img
          className={styles.icon}
          src="/images/general/shipping.png"
          alt="Shipping"
        />

        <span className={styles.title}>
          Fast Shipping
        </span>
      </div>

      <div className={styles.price}>
        <span className={styles.comparePrice}>
          $5.99
        </span>

        <span className={styles.currentPrice}>
          FREE
        </span>
      </div>
    </div>
  );
}

export default ShippingRow;