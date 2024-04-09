import styles from "./button.module.scss";
import { FC } from "react";
import classNames from "classnames";

export type Button = {
  type?: "submit" | "reset" | "button" | undefined;
  className?: string;
  textContent?: string;
};

export const Button: FC<Button> = ({ type, className, textContent }) => {
  return (
    <button type={type} className={classNames(styles.button, styles[`${className}`])}>
      {textContent}
    </button>
  );
};
