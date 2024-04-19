import { FC, useEffect, useState } from "react";
import { clsx } from "clsx";
import styles from "./main.module.scss";
import { Button } from "@atoms";

type MainProps = {
  buttonClicked: boolean;
};
export const Main: FC<MainProps> = ({ buttonClicked }) => {
  return (
    <>
      <div className={clsx(styles.main)}>
        <div>Button clicked: {buttonClicked ? "Yes" : "No"}</div>
      </div>
    </>
  );
};
