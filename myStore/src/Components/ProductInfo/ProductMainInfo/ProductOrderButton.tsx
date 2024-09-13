import { Link } from "react-router-dom";
import styles from "./styles.module.scss";
const ProductOrderButton = () => {
  return (
    <button className={styles.order_button} role="button">
      <Link to="/product">Купити</Link>
    </button>
  );
};

export default ProductOrderButton;

/* CSS */
