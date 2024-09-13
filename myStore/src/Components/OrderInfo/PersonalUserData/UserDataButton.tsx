import { useDispatch, useSelector } from "react-redux";
import styles from "../styles.module.scss";
import { AppDispatch, RootState } from "../../../redux/store/store";
import {
  setIsPersonalFieldNotCompleted,
  setIsUserDataOpen,
} from "../../../redux/slices/PaymentDeliveryData";

const UserDataButton = ({
  isUserNameValid,
  isLastNameValid,
}: {
  isUserNameValid: boolean;
  isLastNameValid: boolean;
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const isNumberValid = useSelector(
    (state: RootState) => state.paymentDeliveryInfo.isPhoneNumberValid
  );
  const handleUserDataButtonClick = () => {
    if (isUserNameValid && isLastNameValid && isNumberValid) {
      dispatch(setIsUserDataOpen(false));
      dispatch(setIsPersonalFieldNotCompleted(false));
    }
  };
  return (
    <button
      onClick={() => {
        handleUserDataButtonClick();
      }}
      type="submit"
      disabled={!isLastNameValid || !isNumberValid || !isUserNameValid}
      className={
        isLastNameValid && isNumberValid && isUserNameValid
          ? styles.personal_user_data_button_active
          : styles.personal_user_data_button_not_active
      }
    >
      Продовжити
    </button>
  );
};
export default UserDataButton;
