import { IoSearchOutline } from "react-icons/io5";
import styles from "../../styles.module.scss";
import React from "react";
import DeliveryWareHouseList from "./DeliveryWareHouseList";

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../redux/store/store";
interface DeliverySearchWareHouseProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isWareHouseLoading: boolean;
  wareHouseListRef: React.RefObject<HTMLUListElement>;
}
const DeliverySearchWareHouse: React.FC<DeliverySearchWareHouseProps> = ({
  setIsOpen,
  isWareHouseLoading,
  wareHouseListRef,
}) => {
  const [searchTerm, setSearchTerm] = React.useState("");

  return (
    <div className={styles.delivery_search_city_container}>
      <div className={styles.delivery_search_input_container}>
        <IoSearchOutline className={styles.delivery_search_icon} />
        <div className={styles.delivery_search_input_wrapper}>
          <input
            onChange={(e: any) => setSearchTerm(e.target.value)}
            placeholder="Введи номер відділення"
          />
        </div>
      </div>
      <DeliveryWareHouseList
        wareHouseListRef={wareHouseListRef}
        setIsOpen={setIsOpen}
        searchTerm={searchTerm}
      />
    </div>
  );
};
export default DeliverySearchWareHouse;
