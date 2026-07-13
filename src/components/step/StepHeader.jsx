function StepHeader({
  step,
  title,
  selectedCount,
  isOpen,
  onToggle,
}) {
  return (
    <button
      type="button"
      onClick={onToggle}
    >      <div>
        <span>STEP {step} OF 4</span>

        <h2>{title}</h2>
      </div>

      <div>
        <span>{selectedCount} selected</span>

        <span>{isOpen ? "▲" : "▼"}</span>
      </div>
      
    </button>
  );
}

export default StepHeader;