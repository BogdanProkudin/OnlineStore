import React from "react";
import { EmblaOptionsType } from "embla-carousel";

import useEmblaCarousel from "embla-carousel-react";
import { UserReviews } from "../UserReviews";

type PropType = {
  slides: { review: string; rating: number }[];
  options?: EmblaOptionsType;
};
import styles from "../styles.module.scss";
import { FaStar } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";

const UserReviewsCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  return (
    <section className={styles.user_review_embla}>
      <h1>Відгуки про продавця</h1>
      <div className={styles.user_review_embla_viewport} ref={emblaRef}>
        <div className={styles.user_review_embla_container}>
          {slides.map((review, index) => (
            <div className={styles.user_review_embla_slide}>
              <div className={styles.user_review_container}>
                <div className={styles.user_review_header}>
                  <h1>Покупець</h1>
                  <div className={styles.user_review_rating_container}>
                    {[...new Array(5)].map((star, index) => {
                      return (
                        <>
                          {review.rating >= index + 1 ? (
                            <FaStar className={styles.user_review_rating} />
                          ) : (
                            <FaRegStar className={styles.user_review_rating} />
                          )}
                        </>
                      );
                    })}
                  </div>
                </div>
                <p className={styles.user_review_text}>{review.review}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UserReviewsCarousel;
