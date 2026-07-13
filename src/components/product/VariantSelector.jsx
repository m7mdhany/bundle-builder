function VariantSelector({
  variants,
  selectedVariant,
  onSelect,
}) {
  if (!variants.length) return null;

  return (
    <div>
      {variants.map((variant) => (
        <button
          key={variant.id}
          type="button"
          onClick={() => onSelect(variant.id)}
        >
          {variant.label}
        </button>
      ))}
    </div>
  );
}

export default VariantSelector;