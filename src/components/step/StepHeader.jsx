import styles from "./StepHeader.module.css";

function StepHeader({
  title,
  selectedCount,
  isOpen,
  onToggle,
}) {
  return (
    <button
      type="button"
      className={`${styles.header} ${!isOpen ? styles.closeBorder : ""}`}
      onClick={onToggle}
    >
      <div className={styles.left}>

        <div className={styles.titleRow}>
          <h2>{title}</h2>
        </div>
      </div>

      <div className={styles.right}>
        {selectedCount > 0 && (
          <span className={styles.selected}>
            {selectedCount} selected
          </span>
        )}
        <span
          className={`${styles.arrow} ${isOpen ? styles.open : ""
            }`}
        >
          ▼
        </span>
      </div>
    </button>
  );
}

export default StepHeader;