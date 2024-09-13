import ProductMoreInfoButton from "./ProductFeatureMoreInfoButton";
import styles from "./styles.module.scss";
type ProductPaymentProps = {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
};
const ProductPayment: React.FC<ProductPaymentProps> = ({
  visible,
  setVisible,
}) => {
  return (
    <div className={styles.product_payment_container}>
      <h1>Оплата та гарантії</h1>
      <div className={styles.payment_method}>
        <img
          className={styles.payment_method_image}
          src="https://uaprom-static.c.evo.dev/image/catalog/payments/default-hcc5833618bad07d94c9d64d65146a4e4e.png"
        ></img>
        <div className={styles.payment_method_description_container}>
          <span>Післяплата</span>
          <span className={styles.payment_method_description_text}>
            Нова Пошта
          </span>
        </div>
      </div>
      <div className={styles.payment_method}>
        <img
          className={styles.payment_method_image}
          src="https://uaprom-static.c.evo.dev/image/catalog/payments/bank_account-hc831eba8a864b5bdbbe3e93c58ae838c7.png"
        ></img>
        <div className={styles.payment_method_description_container}>
          <span>Оплата на рахунок</span>
          <span className={styles.payment_method_description_text}>
            IBAN UA133052990000026002034928535
          </span>
        </div>
      </div>
      <ProductMoreInfoButton
        onClick={() => setVisible(true)}
        text={"Дивитись все"}
      />
    </div>
  );
};
export default ProductPayment;
