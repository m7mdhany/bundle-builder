import styles from "./ReturnsCard.module.css";

function ReturnsCard() {
  return (
    <section className={styles.card}>
      <img
        className={styles.badge}
        src="/images/general/guarantee-badge.png"
        alt="100% Satisfaction Guarantee"
      />

      <div className={styles.content}>
        <h3>30-day hassle-free returns</h3>

        <p>
          If you're not totally in love with the product,
          we will refund you 100%.
        </p>
      </div>
    </section>
  );
}

export default ReturnsCard;