import styles from "./Step.module.css";
import StepHeader from "./StepHeader";

function Step({
  step,
  title,
  selectedCount,
  isOpen,
  onToggle,
  children,
}) {
  return (
    <section
      className={`${styles.step} ${isOpen ? styles.open : ""
        }`}
    >
      <div className={styles.stepNumber}>
        Step {step} of 4
      </div>

      <StepHeader
        step={step}
        title={title}
        selectedCount={selectedCount}
        isOpen={isOpen}
        onToggle={onToggle}
      />

      {isOpen && (
        <div className={styles.content}>
          {children}
        </div>
      )}
    </section>
  );
}

export default Step;