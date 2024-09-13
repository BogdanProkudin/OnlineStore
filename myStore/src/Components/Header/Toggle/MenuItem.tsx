import * as React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];

export const MenuItem = ({ i, title }: any) => {
  const navigate = useNavigate();
  const style = { border: `2px solid ${colors[i]}` };
  const handleToggleItemClick = (title: string) => {
    if (title === "Повернення") {
      navigate("/returnInfo");
    }
    if (title === "Доставка") {
      navigate("/deliveryInfo");
    }
  };
  return (
    <motion.li
      onClick={() => handleToggleItemClick(title)}
      className="side_bar_container"
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <span>
        <a>{title}</a>
      </span>
    </motion.li>
  );
};
