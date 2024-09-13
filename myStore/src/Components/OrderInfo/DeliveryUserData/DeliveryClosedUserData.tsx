import { useDispatch, useSelector } from "react-redux";
import styles from "../styles.module.scss";
import { RootState } from "../../../redux/store/store";
import { FaPen } from "react-icons/fa";
import { setIsDeliveryDataOpen } from "../../../redux/slices/PaymentDeliveryData";
const DeliveryClosedUserData = () => {
  const dispatch = useDispatch();
  const city = useSelector(
    (state: RootState) => state.paymentDeliveryInfo.city
  );
  const wareHouse = useSelector(
    (state: RootState) => state.paymentDeliveryInfo.selectedWareHouse
  );
  const handleEditUserDataClick = () => {
    dispatch(setIsDeliveryDataOpen(true));
  };
  return (
    <div className={styles.delivery_user_data_closed_container}>
      <div className={styles.delivery_user_data_closed_items_container}>
        <FaPen
          onClick={() => handleEditUserDataClick()}
          className={styles.delivery_user_data_closed_icon}
        />
        <div className={styles.delivery_user_data_closed_title_container}>
          <img src="https://uaprom-static.c.evo.dev/image/catalog/deliveries/nova_poshta-hca41cde541c00d7655d6774a77ad4480d.png" />
          <span
            style={{ fontWeight: "500" }}
            className={styles.delivery_company_name}
          >
            Нова Пошта
          </span>
        </div>
        <span
          style={{
            marginLeft: "1.2rem",
            fontWeight: 500,
            color: "#acacbe",
          }}
        >
          {city}
        </span>
        <span
          style={{
            marginLeft: "1.2rem",
            fontWeight: 500,
            color: "#acacbe",
          }}
        >
          {wareHouse}
        </span>
      </div>
    </div>
  );
};
export default DeliveryClosedUserData;
