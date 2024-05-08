import styles from "./button.module.scss";
import { FC, useContext } from "react";
import { clsx } from "clsx";
import { ClickContext } from "@/App.tsx";
import { useLocation, useSearchParams } from "react-router-dom";

export type ButtonProps = {
  type?: "submit" | "reset" | "button" | undefined;
  className?: string;
  textContent?: string;
};

export const Button: FC<ButtonProps> = ({ type, className, textContent }) => {
  const { setClick } = useContext<any>(ClickContext);
  const location = useLocation();
  let [searchParams, setSearchParams] = useSearchParams("");
  console.log(searchParams);
  return (
    <>
      <button
        type={type}
        className={clsx(styles.button, styles[`${className}`])}
        onClick={() => {
          setClick(true);
          if (location.search === "") {
            setSearchParams("?page=1");
          }
        }}
      >
        {textContent}
      </button>
    </>
  );
};
