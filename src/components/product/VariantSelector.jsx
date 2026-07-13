function VariantSelector({ variants }) {
  if (!variants.length) return null;

  return (
    <div>
      {variants.map((variant) => (
        <button key={variant.id} type="button">
          {variant.label}
        </button>
      ))}
    </div>
  );
}

export default VariantSelector;