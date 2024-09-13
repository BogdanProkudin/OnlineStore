import styles from "../styles.module.scss";
import { FaWallet } from "react-icons/fa6";
const PaymentInfo = () => {
  return (
    <div className={styles.payment_info_container}>
      <div className={styles.payment_info_title_container}>
        <span className={styles.payment_info_title_number}>3</span>
        <span>Оплата</span>
      </div>
      <div className={styles.payment_items_container}>
        <div className={styles.payment_items}>
          <FaWallet color="grey" fontSize={20} />
          <h1>Накладений платіж</h1>
        </div>
        <p>20₴ + 2% комісії</p>
      </div>
    </div>
  );
};
export default PaymentInfo;
