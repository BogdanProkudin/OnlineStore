import { useState, ChangeEvent, FormEvent, useEffect } from "react";
import { IoCheckmarkCircle } from "react-icons/io5";
import styles from "../styles.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../redux/store/store";
import { setName } from "../../../redux/slices/PaymentDeliveryData";
const UserNameInput = ({
  isUserNameValid,
  setUserNameValid,
}: {
  isUserNameValid: boolean;
  setUserNameValid: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const userName = useSelector(
    (state: RootState) => state.paymentDeliveryInfo.name
  );
  const [isCyrillic, setIsCyrillic] = useState<boolean>(true);
  const dispatch = useDispatch<AppDispatch>();
  const [isSpaceError, setSpaceError] = useState<boolean>(false);
  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value;

    // Проверка на кириллицу
    const cyrillicRegex = /^[\u0400-\u04FF\s]*$/;
    if (cyrillicRegex.test(value) && !value.includes(" ")) {
      setSpaceError(false);
      setIsCyrillic(true);
      dispatch(setName(value));
    } else if (value.includes(" ")) {
      setSpaceError(true);
      setIsCyrillic(true);
    } else if (!cyrillicRegex.test(value)) {
      setSpaceError(false);
      setIsCyrillic(false);
    }
  };
  useEffect(() => {
    if (userName.length > 1) {
      setUserNameValid(true);
    } else {
      setUserNameValid(false);
    }
  }, [userName]);

  return (
    <form className={styles.user_name_input_container}>
      <div className={styles.user_name_input_wrapper}>
        <label htmlFor="userName">Ім'я:</label>
        <span
          style={{ marginLeft: "0.3rem", fontSize: "12px" }}
          className={styles.required}
        >
          *
        </span>
      </div>
      <div style={{ flexDirection: "column" }}>
        <input
          type="text"
          id="userName"
          name="userName"
          value={userName}
          style={{ borderColor: !isCyrillic || isSpaceError ? "red" : "" }}
          onChange={handleChange}
          className={
            !isCyrillic && userName.length === 0
              ? styles.input_valid
              : styles.input_invalid
          }
          placeholder="Введіть ім'я кирилицею"
        />
        {isUserNameValid && userName.length > 1 && (
          <IoCheckmarkCircle color="green" className={styles.checkmark} />
        )}
        {!isCyrillic && (
          <div className={styles.error}>
            Використовуй тільки кириличні символи
          </div>
        )}
        {isSpaceError && (
          <div className={styles.error}>Не може містити пробіли</div>
        )}
      </div>
    </form>
  );
};
export default UserNameInput;
