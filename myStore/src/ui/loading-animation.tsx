import React from "react";
import Lottie from "react-lottie";
import animationData from "../ulits/Animation - 1717066577554.json"; // путь к вашему JSON файлу

const LottieAnimation = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Lottie
      options={defaultOptions}
      style={{ position: "absolute", right: -10 }}
      height={20}
      width={70}
    />
  );
};

export default LottieAnimation;
