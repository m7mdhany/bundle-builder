import styles from "./SavingsSection.module.css";
import useBundle from "../../hooks/useBundle";
import getBundleSummary from "../../utils/getBundleSummary";

function SavingsSection() {
  const { state, dispatch } = useBundle();
  const { savings } = getBundleSummary(state.selections);

  const handleSave = () => {
    localStorage.setItem(
      "bundle",
      JSON.stringify(state.selections)
    );
  };


  const handleCheckout = () => {
    localStorage.removeItem("bundle");

    dispatch({
      type: "RESET_BUNDLE",
    });
  };


  return (
    <section className={styles.section}>
      {savings > 0 && (
        <div className={styles.banner}>
          Congrats! You're saving{" "}
          <strong>${savings.toFixed(2)}</strong>{" "}
          on your security bundle!
        </div>
      )}

      <button
        type="button"
        className={styles.checkoutButton}
        onClick={handleCheckout}
      >
        Checkout
      </button>

      <button
        type="button"
        className={styles.saveButton}
        onClick={handleSave}
      >
        Save my system for later
      </button>
    </section>
  );
}

export default SavingsSection;