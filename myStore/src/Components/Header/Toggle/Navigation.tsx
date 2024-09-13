import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};
const wrapperItems = ["Доставка", "Повернення", "Контакти"];

export const Navigation = ({ isOpen }: { isOpen: boolean }) => (
  <motion.ul style={{ zIndex: isOpen ? 100 : 0 }} variants={variants}>
    {wrapperItems.map((el, i) => (
      <MenuItem i={i} key={i} title={el} />
    ))}
  </motion.ul>
);

const itemIds = [0, 1, 2, 3, 4];
export default Navigation;
