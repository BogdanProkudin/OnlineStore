import { Dispatch, SetStateAction, useState } from "react";

import styles from "./styles.module.scss";
import EmblaCarousel from "../ProductImagesCarousel/EmblaCarousel";
import "../ProductImagesCarousel/styles.scss";
import { EmblaOptionsType } from "embla-carousel";
import {
  usePrevNextButtons,
  PrevButton,
  NextButton,
} from "../ProductImagesCarousel/EmblaCarouselButtons";
import useEmblaCarousel from "embla-carousel-react";
import ProductPrice from "./ProductPrice";
import ProductOrderButton from "./ProductOrderButton";
import ProductDelivery from "./ProductDelivery";
type ProductMainInfoProps = {
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
};
const ProductMainInfo: React.FC<ProductMainInfoProps> = ({
  visible,
  setVisible,
}) => {
  const [showDetails, setShowDetails] = useState(false);
  const OPTIONS: EmblaOptionsType = {};
  const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS);

  const slideImages = [
    "https://images.prom.ua/3881419138_w640_h640_3881419138.jpg",
    "https://images.prom.ua/3881419140_w640_h640_3881419140.jpg",
    "https://images.prom.ua/3881419139_w640_h640_3881419139.jpg",
  ];
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);
  return (
    <div className={styles.product_main_info_container}>
      <div
        style={{ marginTop: "5rem" }}
        className={styles.product_content_container}
      >
        <div className={"product_images_container"}>
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <EmblaCarousel
            emblaRef={emblaRef}
            slides={slideImages}
            options={OPTIONS}
            emblaApi={emblaApi}
          />

          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
        <div className={styles.product_right_bar_container}>
          <div className={styles.product_desc_container}>
            <p
              style={{ maxHeight: showDetails ? "100%" : "" }}
              className={styles.product_desc}
            >
              Кулон карта України з гербом RESTEQ срібного кольору 60 см.
              Підвіска у формі Української карти з тризубом. Металевий кулон
              карта.
            </p>
            <ProductPrice />
            <ProductOrderButton />
          </div>
          <ProductDelivery visible={visible} setVisible={setVisible} />
        </div>
      </div>
    </div>
  );
};
export default ProductMainInfo;
