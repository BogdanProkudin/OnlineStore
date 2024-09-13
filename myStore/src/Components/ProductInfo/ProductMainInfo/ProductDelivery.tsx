import { Dispatch, SetStateAction } from "react";
import styles from "./styles.module.scss";
type ProductDeliveryProps = {
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
};
const ProductDelivery: React.FC<ProductDeliveryProps> = ({
  visible,
  setVisible,
}) => {
  return (
    <div className={styles.product_delivery_container}>
      <h1>Доставка</h1>
      <div className={styles.product_delivery_item_container}>
        <img
          className={styles.product_delivery_image}
          src="https://uaprom-static.c.evo.dev/image/catalog/deliveries/nova_poshta-hca41cde541c00d7655d6774a77ad4480d.png"
        />
        <div className={styles.product_delivery_item_text_container}>
          <span>Нова Пошта</span>
          <span className={styles.product_delivery_item_text}>
            Відправка протягом{" "}
            <strong className={styles.product_italic_font}>2-10 днів</strong> в
            ваше місто
          </span>
        </div>
      </div>
      <button
        onClick={() => setVisible(true)}
        className={styles.product_delivery_button}
      >
        Дивитись все
      </button>
    </div>
  );
};

export default ProductDelivery;
