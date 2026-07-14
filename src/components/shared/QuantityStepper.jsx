import styles from "./QuantityStepper.module.css";

function QuantityStepper({
  value,
  onIncrement,
  onDecrement,
}) {
  return (
    <div className={styles.stepper}>
      <button type="button" onClick={onDecrement}>
        -
      </button>

      <span>{value}</span>

      <button type="button" onClick={onIncrement}>
        +
      </button>
    </div>
  );
}

export default QuantityStepper;