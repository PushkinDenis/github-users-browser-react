// import { Button, Input } from "@atoms";
import { FC, useState, createContext, Dispatch, SetStateAction } from "react";
import { Header, Footer } from "@organisms";
import { Main } from "@atoms";
import { clsx } from "clsx";
import styles from "./App.module.scss";

export interface ButtonClickContextType {
  buttonClick: ButtonClickContextType | boolean | undefined;
  setButtonClick: Dispatch<SetStateAction<ButtonClickContextType | undefined>>;
}

export const ButtonClickContext = createContext<ButtonClickContextType | undefined>(undefined);
export const App: FC = () => {
  const [buttonClick, setButtonClick] = useState<ButtonClickContextType | undefined>(undefined);
  return (
    <ButtonClickContext.Provider
      value={{
        buttonClick,
        setButtonClick,
      }}
    >
      <div className={clsx(styles.app)}>
        <Header />
        <Main />
        <Footer />
      </div>
    </ButtonClickContext.Provider>
  );
};
