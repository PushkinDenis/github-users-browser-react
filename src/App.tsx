// import { Button, Input } from "@atoms";
import { FC } from "react";
import { Header, Footer } from "@organisms";
import { Main } from "@atoms";
import { clsx } from "clsx";
import styles from "./App.module.scss";
export const App: FC = () => {
  return (
    <>
      <div className={clsx(styles.app)}>
        <Header />
        <Main />
        <Footer />
      </div>
    </>
  );
};
