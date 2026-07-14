import styles from "./ReviewItems.module.css";
import products from "../../data/products.json";
import useBundle from "../../hooks/useBundle";
import ReviewGroup from "./ReviewGroup";
import ShippingRow from "./ShippingRow";

function ReviewItems() {
  const { state } = useBundle();

  const groups = Object.entries(state.selections).reduce(
    (acc, [productId, selection]) => {
      const product = products[selection.category].find(
        (item) => item.id === productId
      );

      if (!product) return acc;

      if (!acc[selection.category]) {
        acc[selection.category] = [];
      }

      acc[selection.category].push({
        product,
        selection,
      });

      return acc;
    },
    {}
  );

  return (
    <section className={styles.reviewItems}>
      <header className={styles.header}>
        <h2>Your security system</h2>

        <p>
          Review your personalized protection system designed to keep what
          matters most safe.
        </p>
      </header>

      <ReviewGroup
        title="Cameras"
        items={groups.cameras || []}
      />

      <ReviewGroup
        title="Sensors"
        items={groups.sensors || []}
      />

      <ReviewGroup
        title="Accessories"
        items={groups.accessories || []}
      />

      <ReviewGroup
        title="Plan"
        items={groups.plans || []}
      />

      <ShippingRow />
    </section>
  );
}

export default ReviewItems;