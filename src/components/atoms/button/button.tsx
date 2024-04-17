import styles from "./button.module.scss";
import { FC } from "react";
import { clsx } from "clsx";
import { fetchData } from "@helpers";

export type ButtonProps = {
  type?: "submit" | "reset" | "button" | undefined;
  className?: string;
  textContent?: string;
  onClick?: () => void;
};

export const Button: FC<ButtonProps> = ({ type, className, textContent }) => {
  return (
    <button type={type} className={clsx(styles.button, styles[`${className}`])} onClick={fetchData}>
      {textContent}
    </button>
  );
};
