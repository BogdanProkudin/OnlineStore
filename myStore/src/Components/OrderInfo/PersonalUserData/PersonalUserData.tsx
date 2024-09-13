import { ForwardedRef, useState } from "react";
import styles from "../styles.module.scss";
import UserDataButton from "./UserDataButton";
import UserLastNameInput from "./UserLastNameInput";
import UserNameInput from "./UserNameInput";
import UserNumberInput from "./UserNumberInput";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../redux/store/store";
import PersonalClosedUserData from "./PersonalClosedUserData";
import { useMediaQuery } from "@react-hook/media-query";
import classNames from "classnames";

interface PersonalUserDataProps {
  personalFieldRef: ForwardedRef<HTMLDivElement>;
}

const PersonalUserData: React.FC<PersonalUserDataProps> = ({
  personalFieldRef,
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const [isLastNameValid, setLastNameValid] = useState<boolean>(false);
  const [isUserNameValid, setUserNameValid] = useState<boolean>(false);
  const [isNumberValid, setNumberValid] = useState<boolean>(false);

  const isUserDataOpen = useSelector(
    (state: RootState) => state.paymentDeliveryInfo.isUserDataOpen
  );
  const isPersonalFieldNotCompleted = useSelector(
    (state: RootState) => state.paymentDeliveryInfo.isPersonalFieldNotCompleted
  );
  const isPersonalFieldShake = useSelector(
    (state: RootState) => state.paymentDeliveryInfo.isPersonalFieldShake
  );
  const isSmallScreen = useMediaQuery("(max-width: 325px)");

  const renderTitle = () => (
    <div className={styles.personal_user_data_title_container}>
      <span className={styles.personal_user_data_title_number}>1</span>
      <div className={styles.personal_user_data_title_wrapper}>
        <div className={styles.personal_user_data_title}>
          <span>Контактні дані</span>
          <span
            style={{ marginLeft: "0.2rem", fontSize: "18px" }}
            className={styles.required}
          >
            *
          </span>
        </div>
        {isPersonalFieldNotCompleted && (
          <span
            style={{
              marginLeft: "0.5rem",
              fontSize: !isSmallScreen ? "12px" : "10px",
              fontWeight: 500,
            }}
            className={styles.error}
          >
            Заповнення контактних даних обов'язкове
          </span>
        )}
      </div>
    </div>
  );

  const renderUserDataForm = () => (
    <div
      ref={personalFieldRef}
      className={classNames(styles.personal_user_data, {
        [styles.shake]: isPersonalFieldShake,
      })}
    >
      <UserNumberInput />
      <UserLastNameInput
        isLastNameValid={isLastNameValid}
        setLastNameValid={setLastNameValid}
      />
      <UserNameInput
        isUserNameValid={isUserNameValid}
        setUserNameValid={setUserNameValid}
      />
      <UserDataButton
        isLastNameValid={isLastNameValid}
        isUserNameValid={isUserNameValid}
      />
    </div>
  );

  return (
    <div className={styles.personal_user_data_container}>
      {renderTitle()}
      {isUserDataOpen ? renderUserDataForm() : <PersonalClosedUserData />}
    </div>
  );
};

export default PersonalUserData;
