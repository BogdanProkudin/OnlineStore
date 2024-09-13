import { useSelector } from "react-redux";
import styles from "../styles.module.scss";
import DeliveryCity from "./DeliveryCityData/DeliveryCity";
import DeliveryCompanyInfo from "./DeliveryCompanyInfo";
import DeliveryWareHouse from "./DeliveryWarehouseData/DeliveryWareHouse";
import { RootState } from "../../../redux/store/store";
import DeliveryButton from "./DeliveryButton";
import DeliveryClosedUserData from "./DeliveryClosedUserData";
import { ForwardedRef } from "react";
import { useMediaQuery } from "@react-hook/media-query";
import classNames from "classnames";

interface DeliveryUserDataProps {
  deliveryFieldRef: ForwardedRef<HTMLDivElement>;
}

const DeliveryUserData: React.FC<DeliveryUserDataProps> = ({
  deliveryFieldRef,
}) => {
  const city = useSelector(
    (state: RootState) => state.paymentDeliveryInfo.city
  );
  const isDeliveryDataOpen = useSelector(
    (state: RootState) => state.paymentDeliveryInfo.isDeliveryDataOpen
  );
  const isDeliveryFieldShake = useSelector(
    (state: RootState) => state.paymentDeliveryInfo.isDeliveryFieldShake
  );
  const isDeliveryFieldNotCompleted = useSelector(
    (state: RootState) => state.paymentDeliveryInfo.isDeliveryFieldNotCompleted
  );
  const isSmallScreen = useMediaQuery("(max-width: 325px)");

  const renderTitle = () => (
    <div className={styles.delivery_user_data_title_container}>
      <span className={styles.delivery_user_data_title_number}>2</span>
      <div className={styles.delivery_user_data_title_wrapper}>
        <div className={styles.delivery_user_data_title}>
          <span>Доставка</span>
          <span
            style={{ marginLeft: "0.2rem", fontSize: "18px" }}
            className={styles.required}
          >
            *
          </span>
        </div>
        {isDeliveryFieldNotCompleted && (
          <span
            style={{
              marginLeft: "0.5rem",
              fontSize: !isSmallScreen ? "12px" : "10px",
              fontWeight: 500,
            }}
            className={styles.error}
          >
            Обязательно заполните все поля
          </span>
        )}
      </div>
    </div>
  );

  const renderDeliveryDataForm = () => (
    <div
      ref={deliveryFieldRef}
      className={classNames(styles.delivery_user_data, {
        [styles.shake]: isDeliveryFieldShake,
      })}
    >
      <DeliveryCompanyInfo />
      <DeliveryCity />
      {city.length > 1 && <DeliveryWareHouse />}
      <DeliveryButton />
    </div>
  );

  return (
    <div className={styles.delivery_user_data_container}>
      {renderTitle()}
      {isDeliveryDataOpen ? (
        renderDeliveryDataForm()
      ) : (
        <DeliveryClosedUserData />
      )}
    </div>
  );
};

export default DeliveryUserData;
