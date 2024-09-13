import styles from "./styles.module.scss";
const ProductMoreInfoButton = ({
  onClick,

  text,
}: {
  onClick: () => void;
  text: string;
}) => {
  return (
    <div className={styles.product_feature_info_button_container}>
      <button onClick={onClick} className={styles.product_feature_info_button}>
        {text}
      </button>
    </div>
  );
};

export default ProductMoreInfoButton;
