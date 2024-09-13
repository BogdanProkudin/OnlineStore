import { useState, ChangeEvent, FormEvent, useEffect } from "react";
import styles from "../styles.module.scss";

import { IoCheckmarkCircle } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../redux/store/store";
import { setLastName } from "../../../redux/slices/PaymentDeliveryData";
const UserLastNameInput = ({
  isLastNameValid,
  setLastNameValid,
}: {
  isLastNameValid: boolean;
  setLastNameValid: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const lastName = useSelector(
    (state: RootState) => state.paymentDeliveryInfo.lastName
  );
  const dispatch = useDispatch<AppDispatch>();
  const [isCyrillic, setIsCyrillic] = useState<boolean>(true);

  const [isSpaceError, setSpaceError] = useState<boolean>(false);
  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value;
    console.log(value, "value", lastName);

    // Регулярное выражение для проверки кириллических символов
    const cyrillicRegex = /^[\u0400-\u04FF\s]*$/;

    // Если ввод содержит только кириллические символы и не содержит пробелов
    if (cyrillicRegex.test(value) && !value.includes(" ")) {
      setSpaceError(false); // Сбросить ошибку пробела
      setIsCyrillic(true); // Установить флаг кириллицы
      dispatch(setLastName(value)); // Обновить lastName в Redux
    }
    // Если ввод содержит пробелы
    else if (value.includes(" ")) {
      setSpaceError(true); // Установить ошибку пробела
      setIsCyrillic(true); // Установить флаг кириллицы
    }
    // Если ввод не содержит кириллических символов
    else if (!cyrillicRegex.test(value)) {
      setSpaceError(false); // Сбросить ошибку пробела
      setIsCyrillic(false); // Сбросить флаг кириллицы
    }
  };

  useEffect(() => {
    // Если длина lastName больше 1, установить isLastNameValid в true
    if (lastName.length > 1) {
      setLastNameValid(true);
    } else {
      setLastNameValid(false);
    }
  }, [lastName]);

  return (
    <form className={styles.last_name_input_container}>
      <div className={styles.last_name_input_wrapper}>
        <label htmlFor="lastName">Фамилия:</label>
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
          id="lastName"
          name="lastName"
          value={lastName}
          style={{ borderColor: !isCyrillic || isSpaceError ? "red" : "" }}
          onChange={(e) => handleChange(e)}
          className={
            !isCyrillic && lastName.length === 0
              ? styles.input_valid
              : styles.input_invalid
          }
          placeholder="Введите фамилию"
        />
        {isLastNameValid && lastName.length > 1 && (
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
export default UserLastNameInput;
