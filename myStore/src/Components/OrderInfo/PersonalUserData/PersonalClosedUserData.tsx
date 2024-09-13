import { useDispatch, useSelector } from "react-redux";
import styles from "../styles.module.scss";
import { RootState } from "../../../redux/store/store";
import { FaPen } from "react-icons/fa";
import {
  setIsDeliveryDataOpen,
  setIsUserDataOpen,
} from "../../../redux/slices/PaymentDeliveryData";
const PersonalClosedUserData = () => {
  const dispatch = useDispatch();
  const city = useSelector(
    (state: RootState) => state.paymentDeliveryInfo.city
  );
  const name = useSelector(
    (state: RootState) => state.paymentDeliveryInfo.name
  );
  const lastName = useSelector(
    (state: RootState) => state.paymentDeliveryInfo.lastName
  );
  const phoneNumber = useSelector(
    (state: RootState) => state.paymentDeliveryInfo.phoneNumber
  );
  const handleEditUserDataClick = () => {
    dispatch(setIsUserDataOpen(true));
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
            marginLeft: "1.5rem",
            fontWeight: 500,
            color: "#acacbe",
          }}
        >
          {`${name} ${lastName}`}
        </span>
        <span
          style={{
            marginLeft: "1.5rem",
            fontWeight: 500,
            color: "#acacbe",
          }}
        >
          {phoneNumber}
        </span>
      </div>
    </div>
  );
};
export default PersonalClosedUserData;
