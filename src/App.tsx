// import { Button, Input } from "@atoms";
import { FC } from "react";
import { Header } from "@organisms";
import { clsx } from "clsx";
import styles from "./App.module.scss";
export const App: FC = () => {
  return (
    <>
      <div className={clsx(styles.app)}>
        <Header />;
      </div>
    </>
  );
};
