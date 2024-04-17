import { FC } from "react";
import clsx from "clsx";
import styles from "./text.module.scss";

type Text = {
  textContent: string;
  className: string;
};

export const Text: FC<Text> = ({ textContent, className }) => {
  return (
    <>
      <p className={clsx(styles[`${className}`])}>{textContent}</p>
    </>
  );
};
