import styles from "../../styles.module.scss";
import { IoSearchOutline } from "react-icons/io5";
import DeliverySearchCityList from "./DeliveryCityList";
import axios from "axios";
import {
  useEffect,
  useState,
  useCallback,
  useRef,
  SetStateAction,
  Dispatch,
} from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../redux/store/store";
import { setCitiesList } from "../../../../redux/slices/PaymentDeliveryData";
import debounce from "lodash.debounce";

const DeliverySearchCity = ({
  setIsOpen,
}: {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch<AppDispatch>();
  const city = useSelector(
    (state: RootState) => state.paymentDeliveryInfo.city
  );
  const citiesList = useSelector(
    (state: RootState) => state.paymentDeliveryInfo.citiesList
  );
  const cityListRef = useRef<HTMLUListElement>(null);
  const handleSearch = useCallback(
    debounce((term: string | any[]) => {
      const getCities = async () => {
        const apiUrl = "https://api.novaposhta.ua/v2.0/json/";
        const apiKey = "8f9aeef5f8e8792b46accb1044b9c126";

        const requestPayload = {
          apiKey: apiKey,
          modelName: "Address",
          calledMethod: "getSettlements",
          methodProperties: {
            FindByString: term, // Используем FindByString для частичного поиска
          },
        };

        try {
          if (term.length > 2) {
            const response = await axios.post(apiUrl, requestPayload, {
              headers: {
                "Content-Type": "application/json",
              },
            });

            const data = await response.data;

            if (data.success) {
              dispatch(setCitiesList(data.data));

              if (cityListRef.current) {
                cityListRef.current.scrollTo({ top: 0, behavior: "smooth" }); // Прокрутка к началу списка
              }

              console.log();
              
            } else {
              console.log("Ошибка в запросе:", data.errors);
            }
          } else {
            dispatch(setCitiesList([]));
          }
        } catch (error) {
          console.log("Ошибка при запросе:", error);
        }
      };

      getCities();
    }, 200),
    [dispatch]
  ); // Задержка в 200 мс

  useEffect(() => {
    handleSearch(searchTerm);
  }, [searchTerm, dispatch, handleSearch]);

  return (
    <div className={styles.delivery_search_city_container}>
      <div className={styles.delivery_search_input_container}>
        <IoSearchOutline className={styles.delivery_search_icon} />
        <div className={styles.delivery_search_input_wrapper}>
          <input
            onChange={(e: any) => setSearchTerm(e.target.value)}
            placeholder="Введи населений пункт"
          />
          <p>Почни вводити назву населеного пункту від 3-x букв</p>
        </div>
      </div>
      {citiesList.length === 0 ||
        (searchTerm.length > 2 && (
          <div
            style={{ marginTop: "1rem" }}
            className={styles.nothing_found_message}
          >
            Нічого не найдено
          </div>
        ))}
      <DeliverySearchCityList
        searchTerm={searchTerm}
        setIsOpen={setIsOpen}
        cityListRef={cityListRef}
      />
    </div>
  );
};

export default DeliverySearchCity;
