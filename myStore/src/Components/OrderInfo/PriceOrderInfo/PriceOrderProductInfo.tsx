import styles from "../styles.module.scss";
const PriceOrderProductInfo = () => {
  return (
    <div className={styles.price_order_product_info_container}>
      <div className={styles.price_order_product_info_weclome_container}>
        <span className={styles.price_order_product_info_weclome_text}>
          Замовлення
        </span>
        <span
          className={styles.price_order_product_info_welcome_additional_text}
        >
          1 товар
        </span>
      </div>
      <div className={styles.price_order_product_info}>
        <img src="https://images.prom.ua/5233559617_w100_h100_kulon-karta-ukrainy.jpg" />
        <div className={styles.price_order_product_info_items_container}>
          <span className={styles.price_order_product_name}>
            Кулон карта України з гербом RESTEQ срібного кольору 60 см. Підвіска
            у формі Української карти з тризубом. Металевий кулон карта
          </span>
        </div>
      </div>
    </div>
  );
};
export default PriceOrderProductInfo;
