import { useMediaQuery } from "@react-hook/media-query";
import styles from "../styles.module.scss";
import PriceOrderProductInfo from "./PriceOrderProductInfo";
import PriceOrderInfoButton from "./PriceOrderInfoButton";
import { ForwardedRef, RefObject } from "react";
type PriceOrderInfoProps = {
  personalFieldRef: RefObject<HTMLDivElement>;
  deliveryFieldRef: RefObject<HTMLDivElement>;
};
const PriceOrderInfo: React.FC<PriceOrderInfoProps> = ({
  personalFieldRef,
  deliveryFieldRef,
}) => {
  const isSmallScreen = useMediaQuery("(min-width: 970px)");
  return (
    <div className={styles.price_order_info_container}>
      <div className={styles.price_order_container}>
        <div className={styles.price_info_container}>
          <span className={styles.price_info_item}>Вартість замовлення:</span>
          <span className={styles.price_item}>399 ₴</span>
        </div>
        <div className={styles.price_info_container}>
          <span className={styles.price_info_item}>Доставка Нова Пошта:</span>
          <span
            style={{ color: "#acacbe", fontSize: "14px" }}
            className={styles.price_item}
          >
            від 50 ₴
          </span>
        </div>
        <div className={styles.price_info_container}>
          <span style={{ fontWeight: 700 }} className={styles.price_info_item}>
            До оплати без доставки:
          </span>
          <span className={styles.price_item}>399 ₴</span>
        </div>
        <PriceOrderInfoButton
          personalFieldRef={personalFieldRef}
          deliveryFieldRef={deliveryFieldRef}
        />
      </div>
      {isSmallScreen && <PriceOrderProductInfo />}
    </div>
  );
};
export default PriceOrderInfo;
