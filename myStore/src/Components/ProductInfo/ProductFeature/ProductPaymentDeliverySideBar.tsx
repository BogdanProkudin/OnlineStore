import { Sidebar } from "primereact/sidebar";
import React, { useEffect } from "react";
import styles from "./styles.module.scss";
import styles2 from "./styles.module.scss";
import ProductDelivery from "../ProductMainInfo/ProductDelivery";
import { RxCross2 } from "react-icons/rx";
const DeliveryPaymentSideBar = ({
  visible,
  setVisible,
}: {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const sideBarSections: string[] = ["Доставка", "Оплата"];
  const [currentSection, setCurrentSection] =
    React.useState<string>("Доставка");

  useEffect(() => {
    if (visible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [visible]);
  return (
    <Sidebar
      position="right"
      visible={visible}
      blockScroll
      className={styles.sidebar}
      closeIcon={true}
      onHide={() => setVisible(false)}
      content={
        <>
          <div className={styles.sidebar_header}>
            <h1>Доставка та оплата</h1>
            <div>
              {" "}
              <RxCross2
                fontSize={40}
                style={{
                  position: "absolute",
                  top: "10px",
                  right: "10px",
                  cursor: "pointer",
                }}
                onClick={() => setVisible(false)}
              />
            </div>
          </div>
          <div className={styles.sidebar_container}>
            {sideBarSections.map((section: string) => (
              <div
                onClick={() => setCurrentSection(section)}
                style={{
                  borderColor:
                    section === currentSection ? "#7b04df" : "#acacbe",
                }}
                className={styles.sidebar_section_name}
                key={section}
              >
                <b
                  style={{
                    color: section === currentSection ? "#7b04df" : "#acacbe",
                    fontWeight: "700",
                  }}
                >
                  {section}
                </b>
              </div>
            ))}
          </div>{" "}
          {currentSection === "Доставка" && (
            <div className={styles.product_delivery_container}>
              <div className={styles.product_delivery_item_container}>
                <img
                  className={styles.product_delivery_image}
                  src="https://uaprom-static.c.evo.dev/image/catalog/deliveries/nova_poshta-hca41cde541c00d7655d6774a77ad4480d.png"
                />
                <div className={styles.product_delivery_item_text_container}>
                  <span>Нова Пошта</span>
                  <span className={styles.product_delivery_item_text}>
                    Доставка
                    <strong className={styles.product_italic_font}>
                      {" "}
                      2-10 днів
                    </strong>
                    {""} в ваше місто
                  </span>
                </div>
              </div>
            </div>
          )}
          {currentSection === "Оплата" && (
            <div className={styles.product_payment_container}>
              <div className={styles.payment_method}>
                <img
                  className={styles.payment_method_image}
                  src="https://uaprom-static.c.evo.dev/image/catalog/payments/default-hcc5833618bad07d94c9d64d65146a4e4e.png"
                ></img>
                <div className={styles.payment_method_description_container}>
                  <span>Післяплата</span>
                  <span className={styles.payment_method_description_text}>
                    Нова Пошта
                  </span>
                  <span
                    style={{ whiteSpace: "wrap" }}
                    className={styles.payment_method_description_text}
                  >
                    ПРЕДОПЛАТА 200 ГРН ДЛЯ ТОВАРОВ ВІД 1500 ГРН
                  </span>
                </div>
              </div>
              <div className={styles.payment_method}>
                <img
                  className={styles.payment_method_image}
                  src="https://uaprom-static.c.evo.dev/image/catalog/payments/bank_account-hc831eba8a864b5bdbbe3e93c58ae838c7.png"
                ></img>
                <div className={styles.payment_method_description_container}>
                  <span>Оплата на рахунок</span>
                  <span
                    style={{
                      whiteSpace: "wrap",
                      minWidth: "257px",
                      textOverflow: "clip",
                    }}
                    className={styles.payment_method_description_text}
                  >
                    IBAN UA133052990000026002034928535
                  </span>
                </div>
              </div>
            </div>
          )}
        </>
      }
    ></Sidebar>
  );
};
export default DeliveryPaymentSideBar;
