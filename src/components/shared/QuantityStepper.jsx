import styles from "./QuantityStepper.module.css";

function QuantityStepper({
  value,
  onIncrement,
  onDecrement,
  disableDecrement = false,
}) {
  return (
    <div className={styles.stepper}>
      <button
        type="button"
        onClick={onDecrement}
        disabled={disableDecrement && value <= 1}
      >
        -
      </button>

      <span>{value}</span>

      <button
        type="button"
        onClick={onIncrement}
      >
        +
      </button>
    </div>
  );
}

export default QuantityStepper;