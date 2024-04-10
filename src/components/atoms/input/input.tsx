import styles from "./input.module.scss";
import { FC } from "react";
import { clsx } from "clsx";

type Input = {
  type?: "text" | "password" | "radio" | "checkbox" | "hidden" | "button" | "image" | "reset" | "file" | "submit";
  placeholder?: string;
  value?: string;
};

export const Input: FC<Input> = ({ type, placeholder, value }) => {
  return (
    <>
      <div className={styles.wrapper}>
        <input type={type} className={clsx(styles.input, styles[`input-${type}`])} placeholder={placeholder} value={value} />
      </div>
    </>
  );
};
