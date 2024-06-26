import styles from "./button.module.scss";
import { FC, useContext } from "react";
import { clsx } from "clsx";
import { UsersContext, PageContext, PageContextType, UsersContextType } from "@/App.tsx";
import { useLocation, useSearchParams } from "react-router-dom";
import { fetchData } from "@helpers";

export type ButtonProps = {
  type?: "submit" | "reset" | "button" | undefined;
  className?: string;
  textContent?: string;
};

export const Button: FC<ButtonProps> = ({ type, className, textContent }) => {
  const { setUsers } = useContext<UsersContextType>(UsersContext);
  const { page } = useContext<PageContextType>(PageContext);
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams);

  return (
    <>
      <button
        type={type}
        className={clsx(styles.button, styles[`${className}`])}
        onClick={() => {
          if (location.search === "") {
            setSearchParams("?page=1");
            try {
              fetchData(`100`, `${page}00`).then((result) => setUsers(result));
            } catch (error) {
              console.log(error);
            }
          }
        }}
      >
        {textContent}
      </button>
    </>
  );
};
