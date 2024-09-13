import React, { useCallback, useEffect, useRef } from "react";
import styles from "../../styles.module.scss";

import DeliverySearchWareHouse from "./DeliverySearchWareHouse";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../redux/store/store";
import axios from "axios";
import { debounce } from "lodash";
import { setWareHouseList } from "../../../../redux/slices/PaymentDeliveryData";
import LottieAnimation from "../../../../ui/loading-animation";
const DeliveryWareHouse = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isWareHouseLoading, setIsWareHouseLoading] = React.useState(false);
  const selectedWareHouse = useSelector(
    (state: RootState) => state.paymentDeliveryInfo.selectedWareHouse
  );
  const dispatch = useDispatch<AppDispatch>();
  const [searchTerm, setSearchTerm] = React.useState("");
  const wareHouseListRef = React.useRef<HTMLUListElement>(null);
  const selectedCity = useSelector(
    (state: RootState) => state.paymentDeliveryInfo.city
  );
  const toggleDropdown = () => {
    setIsOpen(!isWareHouseLoading ? !isOpen : false);
  };
  const selectedCityRef = useSelector(
    (state: RootState) => state.paymentDeliveryInfo.cityRef
  );
  const dropdownRef = useRef(null);
  const getDropdownStyle = () => {
    if (dropdownRef.current) {
      return isOpen && !isWareHouseLoading
        ? {
            maxHeight: `${(dropdownRef.current as HTMLElement).scrollHeight}px`,
          }
        : { maxHeight: "0" };
    }
    return {};
  };
  const handleSearch = useCallback(
    debounce(() => {
      const getCities = async () => {
        const apiUrl = "https://api.novaposhta.ua/v2.0/json/";
        const apiKey = "8f9aeef5f8e8792b46accb1044b9c126";
        console.log(selectedCity, "selectedCity");

        const requestPayload = {
          apiKey: apiKey,
          modelName: "AddressGeneral",
          calledMethod: "getWarehouses",
          methodProperties: {
            ...(selectedCityRef === null
              ? { CityName: selectedCity }
              : { SettlementRef: selectedCityRef }),

            Language: "UA",
          },
        };

        try {
          setIsWareHouseLoading(true);
          const response = await axios.post(apiUrl, requestPayload, {
            headers: {
              "Content-Type": "application/json",
            },
          });

          const data = response.data;

          if (data.success) {
            console.log(data, "data.data");

            const filteredWarehouses = await data.data.filter(
              (warehouse: any) => !warehouse.Description.includes("Поштомат")
            );

            dispatch(setWareHouseList(filteredWarehouses));
            setIsWareHouseLoading(false);
            if (wareHouseListRef.current) {
              wareHouseListRef.current.scrollTo({
                top: 0,
                behavior: "smooth",
              }); // Прокрутка к началу списка
            }
          } else {
            console.log("Ошибка в запросе:", data.errors);
          }
        } catch (error) {
          console.log("Ошибка при запросе:", error);
        }
      };

      getCities();
    }, 200),
    [dispatch, selectedCity]
  );
  useEffect(() => {
    handleSearch();
  }, [handleSearch]);
  return (
    <div className={styles.ware_house_selector_container}>
      <div className={styles.ware_house_selector_wrapper}>
        <h1>Відділення</h1>
        <span
          style={{ marginLeft: "0.3rem", fontSize: "12px" }}
          className={styles.required}
        >
          *
        </span>
      </div>
      <div
        className={styles.ware_house_selector_input}
        onClick={toggleDropdown}
      >
        <span
          style={{ opacity: selectedWareHouse.length > 1 ? 1 : 0.5 }}
          className={styles.city_selector_text}
        >
          {selectedWareHouse.length > 1
            ? selectedWareHouse
            : "Выбери виділення"}
        </span>
        {isWareHouseLoading ? (
          <LottieAnimation />
        ) : (
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
        )}
      </div>
      <div
        className={`${styles.dropdown} ${isOpen ? styles.open : ""}`}
        ref={dropdownRef}
        style={getDropdownStyle()}
      >
        <DeliverySearchWareHouse
          setIsOpen={setIsOpen}
          wareHouseListRef={wareHouseListRef}
          isWareHouseLoading={isWareHouseLoading}
        />
      </div>
    </div>
  );
};

export default DeliveryWareHouse;
