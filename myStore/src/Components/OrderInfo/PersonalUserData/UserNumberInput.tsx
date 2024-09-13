import { useState, ChangeEvent, FormEvent } from "react";
import styles from "../styles.module.scss";
import ReactInputMask from "react-input-mask";
import { IoCheckmarkCircle } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../redux/store/store";
import {
  setIsPhoneNumberValid,
  setPhoneNumber,
} from "../../../redux/slices/PaymentDeliveryData";
const UserNumberInput = () => {
  const dispatch = useDispatch<AppDispatch>();
  const phoneNumber = useSelector(
    (state: RootState) => state.paymentDeliveryInfo.phoneNumber
  );
  const isNumberValid = useSelector(
    (state: RootState) => state.paymentDeliveryInfo.isPhoneNumberValid
  );
  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value;

    dispatch(setPhoneNumber(value));

    // Проверка на полное заполнение маски
    if (value.includes("_") || value.length <= 1) {
      dispatch(setIsPhoneNumberValid(false));
    } else {
      dispatch(setIsPhoneNumberValid(true));
    }
  };

  return (
    <form className={styles.number_input_container}>
      <div className={styles.number_input_wrapper}>
        <label htmlFor="phone">Номер телефона:</label>

        <span
          style={{ marginLeft: "0.3rem", fontSize: "12px" }}
          className={styles.required}
        >
          *
        </span>
      </div>
      <div>
        <ReactInputMask
          alwaysShowMask
          mask="+380 (99) 999-99-99"
          value={phoneNumber}
          onChange={handleChange}
          className={!isNumberValid ? styles.input_valid : styles.input_invalid}
        />
        {isNumberValid && (
          <IoCheckmarkCircle color="green" className={styles.checkmark} />
        )}
      </div>
    </form>
  );
};
export default UserNumberInput;
