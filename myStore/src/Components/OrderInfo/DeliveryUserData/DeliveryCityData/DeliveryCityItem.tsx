import { RootState } from "../../../../redux/store/store";
import { useSelector } from "react-redux";
import styles from "../../styles.module.scss";
interface DeliveryCityItemProps {
  city: { Description: string; AreaDescription: string | null; CityID: string };
}
const DeliveryCityItem: React.FC<DeliveryCityItemProps> = ({ city }) => {
  const selectedCity = useSelector(
    (state: RootState) => state.paymentDeliveryInfo.city
  );
  return (
    <>
      {city.Description ? (
        <li style={{ color: selectedCity === city.Description ? "blue" : "" }}>
          {city.AreaDescription && city.Description
            ? `${city.Description} (${city.AreaDescription})`
            : city.Description}
        </li>
      ) : (
        <li>Ошибка</li>
      )}
    </>
  );
};
export default DeliveryCityItem;
