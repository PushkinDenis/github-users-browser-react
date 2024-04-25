import styles from "./button.module.scss";
import { FC, useContext } from "react";
import { clsx } from "clsx";
import { UsersContext } from "@/App.tsx";
import { fetchData } from "@helpers";

export type ButtonProps = {
  type?: "submit" | "reset" | "button" | undefined;
  className?: string;
  textContent?: string;
};

export const Button: FC<ButtonProps> = ({ type, className, textContent }) => {
  const { users, setUsers } = useContext<any>(UsersContext);

  return (
    <>
      <button
        type={type}
        className={clsx(styles.button, styles[`${className}`])}
        onClick={() => {
          if (users) {
            fetchData("100", "0").then((result) => setUsers(result));
          }
        }}
      >
        {textContent}
      </button>
    </>
  );
};
