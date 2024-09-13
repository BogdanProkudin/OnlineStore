import styles from "./styles.module.scss";
const ProductFeatureInfo = () => {
  const productInfo: { characteristics: string; answer: string }[] = [
    { characteristics: "Виробник", answer: "RESTEQ" },
    { characteristics: "Вид виробу", answer: "Кулон" },
    { characteristics: "Матеріал", answer: "Бижутерный сплав" },
    { characteristics: "Призначення", answer: "Унісекс" },
  ];
  return (
    <div className={styles.product_feature_info_container}>
      {productInfo.map((item, index) => {
        return (
          <div className={styles.product_feature_info_item} key={index}>
            <div className={styles.product_feature_info_item_characteristics}>
              {item.characteristics}
            </div>
            {item.characteristics === "Виробник" ? (
              <a
                href="https://prom.ua/ua/brands/Resteq"
                className={styles.product_feature_info_item_link_answer}
              >
                {item.answer}
              </a>
            ) : (
              <div className={styles.product_feature_info_item_answer}>
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
export default ProductFeatureInfo;
