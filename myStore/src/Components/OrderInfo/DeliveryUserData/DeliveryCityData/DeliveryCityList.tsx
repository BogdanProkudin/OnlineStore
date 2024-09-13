import React, { ReactNode, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../redux/store/store";
import styles from "../../styles.module.scss";
import {
  setCity,
  setCityRef,
  setSelectedWareHouse,
} from "../../../../redux/slices/PaymentDeliveryData";
import DeliveryCityItem from "./DeliveryCityItem";

interface DeliverySearchCityListProps {
  cityListRef: React.RefObject<HTMLUListElement>;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  searchTerm: string;
}

const popularCitiesInUkraine = [
  "Київ",
  "Харків",
  "Одеса",
  "Дніпро",
  "Львів",
  "Запоріжжя",
  "Кривий Ріг",
  "Миколаїв",
  "Маріуполь",
  "Вінниця",
  "Херсон",
  "Чернігів",
  "Полтава",
  "Черкаси",
  "Житомир",
  "Суми",
  "Хмельницький",
  "Чернівці",
  "Рівне",
  "Івано-Франківськ",
];

const DeliverySearchCityList: React.FC<DeliverySearchCityListProps> = ({
  cityListRef,
  setIsOpen,
  searchTerm,
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const citiesList = useSelector(
    (state: RootState) => state.paymentDeliveryInfo.citiesList
  );

  const handleSelectCity = (
    city: string,
    AreaDescription: string | null,
    cityRef: string | null
  ) => {
    const cityWithArea = AreaDescription
      ? `${city} (${AreaDescription})`
      : city;
    dispatch(setCity(cityWithArea));
    dispatch(setCityRef(cityRef));
    dispatch(setSelectedWareHouse(""));
    setIsOpen(false);
  };

  const renderCityItem = (
    city: {
      Description: string;
      AreaDescription: string | null;
      CityID: string;
      index?: number;
    },
    onClick: () => void
  ) => (
    <div
      onClick={() => {
        console.log(`Selected city: ${city.CityID}`);
        onClick();
      }}
      key={city.CityID ? city.CityID : city.index}
      className={styles.city_name_container}
    >
      <DeliveryCityItem city={city} />
    </div>
  );

  return (
    <div className={styles.delivery_city_list_container}>
      <ul ref={cityListRef}>
        {citiesList.length === 0 && searchTerm.length <= 2 ? (
          popularCitiesInUkraine.map((city) =>
            renderCityItem(
              { Description: city, AreaDescription: null, CityID: city },
              () => handleSelectCity(city, null, null)
            )
          )
        ) : citiesList.length !== 0 && searchTerm.length > 2 ? (
          citiesList.map((city, index) =>
            renderCityItem(
              {
                Description: city.Description,
                AreaDescription: city.AreaDescription,
                CityID: city.CityID,
                index: index,
              },
              () =>
                handleSelectCity(
                  city.Description,
                  city.AreaDescription,
                  city.Ref
                )
            )
          )
        ) : (
          <div>
            {popularCitiesInUkraine.map((city) =>
              renderCityItem(
                { Description: city, AreaDescription: null, CityID: city },
                () => handleSelectCity(city, null, null)
              )
            )}
          </div>
        )}
      </ul>
    </div>
  );
};

export default DeliverySearchCityList;
