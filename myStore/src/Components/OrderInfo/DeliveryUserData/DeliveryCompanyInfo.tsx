import styles from "../styles.module.scss";
const DeliveryCompanyInfo = () => {
  return (
    <div className={styles.delivery_title_container}>
      <img src="https://uaprom-static.c.evo.dev/image/catalog/deliveries/nova_poshta-hca41cde541c00d7655d6774a77ad4480d.png" />
      <div className={styles.delivery_item_text_container}>
        <span className={styles.delivery_company_name}>Нова Пошта</span>
        <span className={styles.delivery_company_price}>від 50 ₴</span>
      </div>
    </div>
  );
};
export default DeliveryCompanyInfo;
