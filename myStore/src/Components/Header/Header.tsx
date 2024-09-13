import { useNavigate } from "react-router-dom";
import styles from "./styles.module.scss";
import logoImage from "./—Pngtree—ukraine flag transparent watercolor painted_5331131.png";
const Header = () => {
  const navigate = useNavigate();
  const wrapperItems = ["Доставка", "Повернення", "Контакти"];
  const handleWrapperItemClick = (title: string) => {
    console.log("handleWrapperItemClick", title);

    if (title === "Повернення") {
      navigate("/returnInfo");
    }
    if (title === "Доставка") {
      navigate("/deliveryInfo");
    }
  };
  return (
    <header className={styles.header}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img src={logoImage}></img>
      </div>
      <div className={styles.wrapper_items_container}>
        {wrapperItems.map((title: string, index: number) => {
          return (
            <a
              onClick={() => handleWrapperItemClick(title)}
              className={styles.wrapper_item}
              key={title}
            >
              {title}
            </a>
          );
        })}
      </div>
    </header>
  );
};
export default Header;
