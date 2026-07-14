import styles from "./CheckoutPanel.module.css";
import useBundle from "../../hooks/useBundle";
import getBundleSummary from "../../utils/getBundleSummary";
import ReturnsCard from "./ReturnsCard";
import FinancingCard from "./FinancingCard";
import SavingsSection from "./SavingsSection";

function CheckoutPanel() {
  const { state } = useBundle();

  const {
    subtotal,
    compareSubtotal,
    shipping,
    total,
    savings,
  } = getBundleSummary(state.selections);
  return (
    <aside className={styles.checkout}>
      <ReturnsCard />

      <FinancingCard compareTotal={compareSubtotal} total={subtotal} />

      <SavingsSection />

    </aside>
  );
}

export default CheckoutPanel;