import styles from "./ReviewPanel.module.css";

import useBundle from "../../hooks/useBundle";

import ReviewItems from "./ReviewItems";
import CheckoutPanel from "./CheckoutPanel";

function ReviewPanel() {
  const { state } = useBundle();

  const hasSelections =
    Object.keys(state.selections).length > 0;

  if (!hasSelections) {
    return null;
  }

  return (
    <section className={styles.reviewPanel}>
      <ReviewItems />

      <CheckoutPanel />
    </section>
  );
}

export default ReviewPanel;