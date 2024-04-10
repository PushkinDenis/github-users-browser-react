import styles from "./button.module.scss";
import { FC } from "react";
import { clsx } from "clsx";

export type Button = {
  type?: "submit" | "reset" | "button" | undefined;
  className?: string;
  textContent?: string;
};

export const Button: FC<Button> = ({ type, className, textContent }) => {
  return (
    <button type={type} className={clsx(styles.button, styles[`${className}`])}>
      {textContent}
    </button>
  );
};
