import axios from "axios";
import { RefObject, useEffect, useRef } from "react";
import styles from "./styles.module.scss";
import PaymentUserData from "./PersonalUserData/PersonalUserData";
import DeliveryUserData from "./DeliveryUserData/DeliveryUserData";
import PersonalUserData from "./PersonalUserData/PersonalUserData";
import PaymentInfo from "./PaymentInfo/PaymentInfo";
import PriceOrderInfo from "./PriceOrderInfo/PriceOrderInfo";
import { RootState } from "../../redux/store/store";
import { useSelector } from "react-redux";
import PriceOrderProductInfo from "./PriceOrderInfo/PriceOrderProductInfo";
import { useMediaQuery } from "@react-hook/media-query";
const OrderInfo = () => {
  const isUserDataOpen = useSelector(
    (state: RootState) => state.paymentDeliveryInfo.isUserDataOpen
  );
  const isDeliveryDataOpen = useSelector(
    (state: RootState) => state.paymentDeliveryInfo.isDeliveryDataOpen
  );
  const isBigScreen = useMediaQuery("(min-width: 970px)");
  const personalFieldRef = useRef<HTMLDivElement>(null);
  const deliveryFieldRef = useRef<HTMLDivElement>(null);
  return (
    <div
      style={{ flexDirection: isBigScreen ? "row" : "column" }}
      className={styles.order_info_container}
    >
      <div
        style={{ gap: !isDeliveryDataOpen && !isUserDataOpen ? "25px" : "" }}
        className={styles.order_info_data_container}
      >
        <PersonalUserData personalFieldRef={personalFieldRef} />
        <DeliveryUserData deliveryFieldRef={deliveryFieldRef} />
        <PaymentInfo />
      </div>

      <PriceOrderInfo
        personalFieldRef={personalFieldRef}
        deliveryFieldRef={deliveryFieldRef}
      />
    </div>
  );
};

export default OrderInfo;
