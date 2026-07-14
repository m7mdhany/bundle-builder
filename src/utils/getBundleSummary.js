import products from "../data/products.json";

export default function getBundleSummary(selections) {
  let subtotal = 0;
  let compareSubtotal = 0;

  Object.entries(selections).forEach(([productId, selection]) => {
    const product = products[selection.category].find(
      (item) => item.id === productId
    );

    if (!product) return;

    const quantity = product.variants.length
      ? Object.values(selection.quantities).reduce(
        (sum, qty) => sum + qty,
        0
      )
      : selection.quantity;

    subtotal += product.price * quantity;

    compareSubtotal +=
      (product.compareAtPrice ?? product.price) * quantity;
  });

  const shipping = subtotal > 0 ? 0 : 0.00;

  return {
    subtotal,

    compareSubtotal,

    shipping,

    total: subtotal + shipping,

    savings: compareSubtotal - subtotal,
  };
}