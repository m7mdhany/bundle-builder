import StepHeader from "./StepHeader";
import styles from "./Step.module.css";
function Step({
  step,
  title,
  selectedCount,
  isOpen,
  onToggle,
  children,
}) {
  return (
    <section>
      <StepHeader
        step={step}
        title={title}
        selectedCount={selectedCount}
        isOpen={isOpen}
        onToggle={onToggle}
      />

      {isOpen && (
        <div>
          {children}
        </div>
      )}
    </section>
  );
}

export default Step;