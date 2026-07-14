import styles from "./FinancingCard.module.css";

import useBundle from "../../hooks/useBundle";
import getBundleSummary from "../../utils/getBundleSummary";

function FinancingCard() {
  const { state } = useBundle();

  const {
    compareSubtotal,
    total,
  } = getBundleSummary(state.selections);

  return (
    <section className={styles.financing}>
      <div className={styles.left}>
        <span>
          as low as
        </span>
        <span>
          $19.19/mo
        </span>
      </div>
      
      <div className={styles.right}>
        {compareSubtotal > total && (
          <span className={styles.comparePrice}>
            ${compareSubtotal.toFixed(2)}
          </span>
        )}

        <span className={styles.totalPrice}>
          ${total.toFixed(2)}
        </span>
      </div>
    </section>
  );
}

export default FinancingCard;