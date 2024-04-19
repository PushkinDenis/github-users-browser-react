// import { Button, Input } from "@atoms";
import { FC, useState } from "react";
import { Header, Footer } from "@organisms";
import { Main } from "@atoms";
import { clsx } from "clsx";
import styles from "./App.module.scss";
export const App: FC = () => {
  // const [users, setUsers] = useState<any>([]);
  const [buttonClicked, setButtonClicked] = useState(true);
  const handleButtonClick = () => {
    if (buttonClicked) {
      setButtonClicked(false);
    } else {
      setButtonClicked(true);
    }
  };
  return (
    <>
      <div className={clsx(styles.app)}>
        <Header onButtonClick={handleButtonClick} />
        <Main buttonClicked={buttonClicked} />
        <Footer />
      </div>
    </>
  );
};
