import { FC } from "react";
import { clsx } from "clsx";
import styles from "./main.module.scss";
export const Main: FC = () => {
  return (
    <>
      <div className={clsx(styles.main)}></div>
    </>
  );
};
