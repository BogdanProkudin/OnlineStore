import React, { useState, useRef } from "react";
import styles from "../../styles.module.scss";
import DeliverySearchCity from "./DeliverySearchCity";
import { RootState } from "../../../../redux/store/store";
import { useSelector } from "react-redux";

const DeliveryCity = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const city = useSelector(
    (state: RootState) => state.paymentDeliveryInfo.city
  );
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const getDropdownStyle = () => {
    if (dropdownRef.current) {
      return isOpen
        ? {
            maxHeight: `${(dropdownRef.current as HTMLElement).scrollHeight}px`,
          }
        : { maxHeight: "0" };
    }
    return {};
  };

  return (
    <div className={styles.city_selector_container}>
      <div className={styles.city_selector_wrapper}>
        <h1>Населений пункт</h1>
        <span
          style={{ marginLeft: "0.3rem", fontSize: "12px" }}
          className={styles.required}
        >
          *
        </span>
      </div>
      <div className={styles.city_selector_input} onClick={toggleDropdown}>
        <span
          style={{ opacity: city.length < 1 ? "0.5" : "" }}
          className={styles.city_selector_text}
        >
          {city.length > 1 ? city : "Вкажи населений пункт"}
        </span>
        <svg
          width="14"
          height="14"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.5s ease",
          }}
        >
          <path
            d="M5 7L10 12L15 7"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div
        className={`${styles.dropdown} ${isOpen ? styles.open : ""}`}
        ref={dropdownRef}
        style={getDropdownStyle()}
      >
        <DeliverySearchCity setIsOpen={setIsOpen} />
      </div>
    </div>
  );
};

export default DeliveryCity;
