import Header from "../Components/Header/Header";
import { ToggleBar } from "../Components/Header/Toggle/Example";
import { useMediaQuery } from "@react-hook/media-query";
import ProductMainInfo from "../Components/ProductInfo/ProductMainInfo/ProductMainInfo";
import ProductFeature from "../Components/ProductInfo/ProductFeature/ProductFeature";
import React from "react";
import { UserReviews } from "../Components/ProductInfo/UserReviews/UserReviews";
import UserReviewsCarousel from "../Components/ProductInfo/UserReviews/UserReviewsCarousel.tsx/UserReviewsCarousel";

const ProductPage = () => {
  const isSmallScreen = useMediaQuery("(max-width: 538px)");
  const [sideBarVisibility, setSideBarVisibility] = React.useState(false);
  const testimonials = [
    {
      review:
        "Эта цепочка стала моим личным оберегом. Я просто не могу ее снять! Она не только красивая, но и символизирует для меня важные вещи.",
      rating: 5,
    },
    {
      review:
        "Прекрасное качество и стильный дизайн! Я заказал эту цепочку в подарок себе на день рождения, и она стала моим самым любимым аксессуаром.",
      rating: 4,
    },
    {
      review:
        "Благодарю за эту уникальную цепочку! Она подчеркивает мой индивидуальный стиль и приносит мне уверенность в себе. Я счастлива, что нашла ее!",
      rating: 5,
    },
    {
      review:
        "Невероятно удобная и красивая цепочка! Я ношу ее каждый день, и она всегда привлекает внимание окружающих. Очень доволен своей покупкой!",
      rating: 5,
    },
    {
      review:
        "Я просто в восторге от этой цепочки! Она прекрасно сочетается с моими нарядами и добавляет особый шарм моему образу. Это лучшая покупка, которую я делала в последнее время.",
      rating: 4,
    },
    {
      review:
        "Моя новая цепочка превзошла все мои ожидания! Она невероятно красивая и качественная. Я никогда не получал столько комплиментов, нося один аксессуар!",
      rating: 5,
    },
    {
      review:
        "Эта цепочка стала моим секретным оружием для создания стильных образов. Она действительно добавляет что-то особенное к моему стилю и привлекает внимание к деталям.",
      rating: 5,
    },
    {
      review:
        "Спасибо за эту потрясающую цепочку! Она не только выглядит стильно, но и очень удобна в ношении. Я уже рекомендовал ее всем своим друзьям!",
      rating: 5,
    },
    {
      review:
        "Я просто влюблен в эту цепочку! Она стала неотъемлемой частью моего ежедневного образа, и я никогда не устаю ее носить. Она просто идеальна!",
      rating: 5,
    },
    {
      review:
        "Отличный выбор! Эта цепочка соответствует всем моим ожиданиям и даже превзошла их. Она стала моим любимым аксессуаром, который я ношу с удовольствием каждый день.",
      rating: 4,
    },
  ];

  return (
    <div>
      {!isSmallScreen ? <Header /> : <ToggleBar />}
      <ProductMainInfo
        visible={sideBarVisibility}
        setVisible={setSideBarVisibility}
      />

      <ProductFeature
        visible={sideBarVisibility}
        setVisible={setSideBarVisibility}
      />
      {!isSmallScreen ? (
        <UserReviews items={testimonials} direction="right" />
      ) : (
        <UserReviewsCarousel
          slides={testimonials}
          options={{ dragFree: true }}
        />
      )}
    </div>
  );
};
export default ProductPage;
