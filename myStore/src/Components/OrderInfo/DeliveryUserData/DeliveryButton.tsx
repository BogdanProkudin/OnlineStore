import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store/store";
import styles from "../styles.module.scss";

import {
  setIsDeliveryDataOpen,
  setIsDeliveryFieldNotCompleted,
} from "../../../redux/slices/PaymentDeliveryData";
const DeliveryButton = () => {
  const selectedCity = useSelector(
    (state: RootState) => state.paymentDeliveryInfo.city
  );
  const selectedWareHouse = useSelector(
    (state: RootState) => state.paymentDeliveryInfo.selectedWareHouse
  );
  const dispatch = useDispatch();
  const handleDeliveryButtonClick = () => {
    dispatch(setIsDeliveryFieldNotCompleted(false));
    dispatch(setIsDeliveryDataOpen(false));
  };
  return (
    <button
      onClick={() => handleDeliveryButtonClick()}
      type="submit"
      disabled={selectedCity.length === 0 || selectedWareHouse.length === 0}
      className={
        selectedCity.length > 0 && selectedWareHouse.length > 0
          ? styles.delivery_user_data_button_active
          : styles.delivery_user_data_button_not_active
      }
    >
      Продовжити
    </button>
  );
};
export default DeliveryButton;
