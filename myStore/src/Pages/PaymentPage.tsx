import styles from "../Components/OrderInfo/styles.module.scss";
import OrderInfo from "../Components/OrderInfo/OrderInfo";
import PriceOrderProductInfo from "../Components/OrderInfo/PriceOrderInfo/PriceOrderProductInfo";
import { useMediaQuery } from "@react-hook/media-query";
import { useEffect } from "react";
import { MdArrowBackIosNew } from "react-icons/md";
import { Link } from "react-router-dom";
const OrderPage = () => {
  const isSmallScreen = useMediaQuery("(max-width: 970px)");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <h1 className={styles.personal_started_text}>Оформлення замовлення</h1>
      <Link to="/">
        <MdArrowBackIosNew
          fontSize={30}
          className={styles.back_button}
        ></MdArrowBackIosNew>
      </Link>
      {isSmallScreen && (
        <div className={styles.price_order_product_info_small_screen_container}>
          <PriceOrderProductInfo />
        </div>
      )}
      <OrderInfo />
    </>
  );
};
export default OrderPage;
