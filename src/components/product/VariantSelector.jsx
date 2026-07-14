import styles from "./VariantSelector.module.css";

function VariantSelector({
  variants,
  selectedVariant,
  onSelect,
}) {
  if (!variants.length) return null;

  return (
    <div className={styles.variantSelector}>
      {variants.map((variant) => (
        <button
          key={variant.id}
          type="button"
          className={`${styles.variant} ${selectedVariant === variant.id ? styles.active : ""
            }`}
          onClick={() => onSelect(variant.id)}
        >
          <img
            src={`/images/${variant.image}`}
            alt={variant.label}
          />

          <span>{variant.label}</span>
        </button>
      ))}
    </div>
  );
}

export default VariantSelector;