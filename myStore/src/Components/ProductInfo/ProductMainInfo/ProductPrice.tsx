import styles from "./styles.module.scss";
const ProductPrice = () => {
  return (
    <div className={styles.price_container}>
      <div className={styles.new_price_container}>
        <span className={styles.new_price}>399</span>
        <span className={styles.currency}>грн</span>
      </div>
      <div className={styles.old_price_container}>
        <span className={styles.old_price}>800</span>
        <span className={styles.old_currency}>грн</span>
      </div>
    </div>
  );
};
export default ProductPrice;
