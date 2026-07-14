import styles from "./Badge.module.css";

function Badge({ text }) {
  if (!text) return null;

  return <span className={styles.badge}>{text}</span>;
}

export default Badge;