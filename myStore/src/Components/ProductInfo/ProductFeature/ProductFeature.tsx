import { useState } from "react";
import ProductFeatureInfo from "./ProductFeatureInfo";

import ProductPayment from "./ProductPayment";
import styles from "./styles.module.scss";

import ProductDesc from "./ProductFeatureDesc";
import ProductMoreInfoButton from "./ProductFeatureMoreInfoButton";
import DeliveryPymentSideBar from "./ProductPaymentDeliverySideBar";

import React from "react";
type ProductFeatureProps = {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
};
const ProductFeature: React.FC<ProductFeatureProps> = ({
  visible,
  setVisible,
}) => {
  const [showAllInfo, setShowAllInfo] = useState<boolean>(false);

  return (
    <div className={styles.product_feature}>
      <div className={styles.product_feature_container}>
        <h1>Характеристики та опис</h1>
        <span>Основні</span>
        <ProductFeatureInfo />
        {showAllInfo && (
          <>
            <span style={{ marginTop: "1rem" }}>
              Користувальницькі характеристики
            </span>
            <div className={styles.product_feature_additional_info_container}>
              <div className={styles.product_feature_info_item}>
                <div
                  className={styles.product_feature_info_item_characteristics}
                >
                  Колір
                </div>
                <div className={styles.product_feature_info_item_answer}>
                  Золото
                </div>
              </div>
            </div>
          </>
        )}
        <ProductMoreInfoButton
          onClick={() => setShowAllInfo(!showAllInfo)}
          text={showAllInfo ? "Приховати характеристики" : "Всі характеристики"}
        />
        <ProductDesc />
      </div>
      <ProductPayment visible={visible} setVisible={setVisible} />
      <DeliveryPymentSideBar visible={visible} setVisible={setVisible} />
    </div>
  );
};
export default ProductFeature;
