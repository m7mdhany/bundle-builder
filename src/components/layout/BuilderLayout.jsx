import styles from "./BuilderLayout.module.css";

import Builder from "../builder/Builder";
import ReviewPanel from "../review/ReviewPanel";

function BuilderLayout() {
  return (
    <main className={styles.layout}>
      <Builder />
      <ReviewPanel />
    </main>
  );
}

export default BuilderLayout;