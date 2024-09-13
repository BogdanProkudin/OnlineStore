import { useState } from "react";
import ProductMoreInfoButton from "./ProductFeatureMoreInfoButton";
import styles from "./styles.module.scss";
const ProductDesc = () => {
  const [showMoreInfo, setShowMoreInfo] = useState(false);
  return (
    <>
      <p className={styles.product_description}>
        Кулон підвіска мапа України з гербом RESTEQ золотого кольору справжня
        знахідка для патріота. Стильна прикраса із символікою України.
      </p>
      <p className={styles.product_description}>Колір: золото</p>
      {showMoreInfo && (
        <>
          <p className={styles.product_all_description_text}>
            Довжина ланцюга: 60 см
          </p>
          <p
            style={{ paddingBottom: "1rem" }}
            className={styles.product_all_description_text}
          >
            Матеріал: метал
          </p>
        </>
      )}
      <ProductMoreInfoButton
        onClick={() => setShowMoreInfo(!showMoreInfo)}
        text={showMoreInfo ? "Приховати опис" : "Весь опис"}
      />
    </>
  );
};
export default ProductDesc;
