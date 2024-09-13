import React from "react";
import styles from "../../styles.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/store/store";

interface DeliveryWareHouseItemProps {
  wareHouse: {
    Description: string;
    CityID: string;
  };
  handleSelectWareHouse: (wareHouse: string) => void;
  highlightedText: string;
}

const DeliveryWareHouseItem: React.FC<DeliveryWareHouseItemProps> = ({
  wareHouse,
  handleSelectWareHouse,
  highlightedText,
}) => {
  const selectedWareHouse = useSelector(
    (state: RootState) => state.paymentDeliveryInfo.selectedWareHouse
  );
  const createHighlightedText = (text: string, highlight: string) => {
    if (!highlight.trim()) {
      return text;
    }

    const regex = new RegExp(`(${highlight})`, "gi");
    const parts = text.split(regex);

    return parts.map((part, index) =>
      regex.test(part) ? (
        <span style={{ margin: "0" }} key={index} className={styles.highlight}>
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <li
      style={{
        color: wareHouse.Description === selectedWareHouse ? "blue" : "",
      }}
      onClick={() => handleSelectWareHouse(wareHouse.Description)}
    >
      {createHighlightedText(wareHouse.Description, highlightedText)}
    </li>
  );
};

export default DeliveryWareHouseItem;
