import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./EmblaCarouselButtons";
import useEmblaCarousel from "embla-carousel-react";
import "./styles.scss";
import { DotButton, useDotButton } from "./EmblaCarouselDotButtons";
import { useMediaQuery } from "@react-hook/media-query";
type PropType = {
  slides: string[];
  options?: EmblaOptionsType;
  emblaRef: any;
  emblaApi: any;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options, emblaRef, emblaApi } = props;
  const isSmallScreen = useMediaQuery("(max-width: 555px)");
  console.log("slides", slides, props);
  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((image, index) => (
            <div
              style={{ backgroundImage: `url(${image})` }}
              className="embla__slide"
              key={index}
            ></div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons"></div>
      </div>
      {isSmallScreen && (
        <div className="embla_dots_container">
          {scrollSnaps.map((snap, index) => (
            <div
              style={{
                boxShadow:
                  index === selectedIndex ? "inset 0 0 0 0.2rem black" : "",
              }}
              className="embla__dot"
            >
              {}
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default EmblaCarousel;
