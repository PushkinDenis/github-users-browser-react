import styles from "./button.module.scss";
import { FC, useContext } from "react";
import { clsx } from "clsx";
import { ButtonClickContext } from "@/App.tsx";

export type ButtonProps = {
  type?: "submit" | "reset" | "button" | undefined;
  className?: string;
  textContent?: string;
};

export const Button: FC<ButtonProps> = ({ type, className, textContent }) => {
  const { buttonClick, setButtonClick } = useContext<any>(ButtonClickContext);

  return (
    <>
      <button
        type={type}
        className={clsx(styles.button, styles[`${className}`])}
        onClick={() => {
          setButtonClick(true);
          console.log(buttonClick);
        }}
      >
        {textContent}
      </button>
    </>
  );
};
