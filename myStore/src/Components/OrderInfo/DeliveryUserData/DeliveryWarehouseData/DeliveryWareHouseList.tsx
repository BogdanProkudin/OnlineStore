import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "../../styles.module.scss";
import { AppDispatch, RootState } from "../../../../redux/store/store";
import DeliveryWareHouseItem from "./DeliveryWareHouseItem";
import { setSelectedWareHouse } from "../../../../redux/slices/PaymentDeliveryData";

interface DeliveryWareHouseListProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  wareHouseListRef: React.RefObject<HTMLUListElement>;
  searchTerm: string;
}

const DeliveryWareHouseList: React.FC<DeliveryWareHouseListProps> = ({
  setIsOpen,
  wareHouseListRef,
  searchTerm,
}) => {
  const wareHouseList = useSelector(
    (state: RootState) => state.paymentDeliveryInfo.wareHouseList
  );
  const dispatch = useDispatch<AppDispatch>();

  const handleSelectWareHouse = (wareHouse: string) => {
    dispatch(setSelectedWareHouse(wareHouse));
    setIsOpen(false);
  };

  const filteredWareHouseList = searchTerm
    ? wareHouseList.filter((warehouse: { Description: string }) =>
        warehouse.Description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : wareHouseList
    ? wareHouseList
    : [];

  const renderWareHouseItem = (warehouse: any, index: number) => (
    <div className={styles.delivery_city_list_item_container} key={index}>
      <DeliveryWareHouseItem
        wareHouse={{
          Description: warehouse.Description,
          CityID: warehouse.CityID,
        }}
        handleSelectWareHouse={handleSelectWareHouse}
        highlightedText={searchTerm}
      />
    </div>
  );

  return (
    <div className={styles.delivery_city_list_container}>
      <ul ref={wareHouseListRef}>
        {filteredWareHouseList.length >= 1 ? (
          filteredWareHouseList.map(renderWareHouseItem)
        ) : (
          <div className={styles.nothing_found_message}>Нічого не найдено</div>
        )}
      </ul>
    </div>
  );
};

export default DeliveryWareHouseList;
