import { TypewriterEffect } from "../../../ui/typewriter-effect";

const ProductMainText = () => {
  const words = [
    {
      text: "Кулон",
    },
    {
      text: "карта",
    },
    {
      text: "України",
    },
    {
      text: "з",
    },
    {
      text: "гербом",
    },
    {
      text: "RESTEQ",
    },
    {
      text: "срібного",
    },
    {
      text: "кольору",
    },
    {
      text: "60",
    },
    {
      text: "см.",
    },
    {
      text: "Підвіска",
    },
    {
      text: "у",
    },
    {
      text: "формі",
    },
    {
      text: "Української",
    },
    {
      text: "карти",
    },
    {
      text: "з",
    },
    {
      text: "тризубом.",
    },
    {
      text: "Металевий",
    },
    {
      text: "кулон",
    },
    {
      text: "карта",
    },
  ];

  return (
    <div
      style={{ marginTop: "1.5rem" }}
      className="flex flex-col items-center  h-[11rem] "
    >
      <TypewriterEffect words={words} />
    </div>
  );
};

export default ProductMainText;
