import { AppDispatch, RootState } from "../../../redux/store/store";
import { useDispatch, useSelector } from "react-redux";
import styles from "../styles.module.scss";
import {
  setIsDeliveryFieldNotCompleted,
  setIsDeliveryFieldShake,
  setIsPersonalFieldNotCompleted,
  setIsPersonalFieldShake,
} from "../../../redux/slices/PaymentDeliveryData";
import { useEffect, useRef } from "react";
import { ForwardedRef, RefObject } from "react";

type PriceOrderInfoButtonProps = {
  personalFieldRef: RefObject<HTMLDivElement>;
  deliveryFieldRef: RefObject<HTMLDivElement>;
};

const PriceOrderInfoButton: React.FC<PriceOrderInfoButtonProps> = ({
  personalFieldRef,
  deliveryFieldRef,
}) => {
  const userName = useSelector(
    (state: RootState) => state.paymentDeliveryInfo.name
  );
  const lastName = useSelector(
    (state: RootState) => state.paymentDeliveryInfo.lastName
  );
  const phoneNumber = useSelector(
    (state: RootState) => state.paymentDeliveryInfo.phoneNumber
  );
  const city = useSelector(
    (state: RootState) => state.paymentDeliveryInfo.city
  );
  const wareHouse = useSelector(
    (state: RootState) => state.paymentDeliveryInfo.selectedWareHouse
  );
  const isPhoneNumberValid = useSelector(
    (state: RootState) => state.paymentDeliveryInfo.isPhoneNumberValid
  );

  const dispatch = useDispatch<AppDispatch>();
  const shakeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (shakeTimeoutRef.current) {
        clearTimeout(shakeTimeoutRef.current);
      }
    };
  }, []);

  const handlePuschaseButtonClick = () => {
    if (shakeTimeoutRef.current) {
      clearTimeout(shakeTimeoutRef.current);
    }

    const scrollToRef = (ref: RefObject<HTMLDivElement>) => {
      if (ref.current) {
        ref.current.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }
    };

    if (userName.length < 1 || lastName.length < 1 || !isPhoneNumberValid) {
      dispatch(setIsPersonalFieldNotCompleted(true));
      dispatch(setIsPersonalFieldShake(true));
      scrollToRef(personalFieldRef);

      shakeTimeoutRef.current = setTimeout(() => {
        dispatch(setIsPersonalFieldShake(false));
      }, 500);
    } else if (city.length === 0 || wareHouse.length === 0) {
      dispatch(setIsDeliveryFieldNotCompleted(true));
      dispatch(setIsPersonalFieldNotCompleted(false));
      dispatch(setIsDeliveryFieldShake(true));
      scrollToRef(deliveryFieldRef);

      shakeTimeoutRef.current = setTimeout(() => {
        dispatch(setIsDeliveryFieldShake(false));
      }, 500);
    } else {
      dispatch(setIsDeliveryFieldNotCompleted(false));
      dispatch(setIsPersonalFieldNotCompleted(false));
    }
  };

  return (
    <button
      onClick={handlePuschaseButtonClick}
      className={styles.price_info1_button}
    >
      Оформити замовлення
    </button>
  );
};

export default PriceOrderInfoButton;
