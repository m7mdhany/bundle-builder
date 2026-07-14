import products from "../data/products.json";

export default function getRequiredSelections() {
  const selections = {};

  Object.entries(products).forEach(([category, items]) => {
    items.forEach((product) => {
      if (!product.isRequired) return;

      selections[product.id] = product.variants.length
        ? {
          category,
          selectedVariant: product.variants[0].id,
          quantities: {
            [product.variants[0].id]: 1,
          },
        }
        : {
          category,
          quantity: 1,
        };
    });
  });

  return selections;
}