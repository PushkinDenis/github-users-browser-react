import { FC, useState, createContext, Dispatch, SetStateAction, useEffect } from "react";
import { Header, Footer, UserCardProps } from "@organisms";
import { Main } from "@atoms";
import { clsx } from "clsx";
import styles from "./App.module.scss";
import { BrowserRouter, RouterProvider, Route, Link } from "react-router-dom";

export type UsersContextType = {
  users: UserCardProps[] | undefined;
  setUsers: Dispatch<SetStateAction<UserCardProps[]>>;
};

export const UsersContext = createContext<UsersContextType | undefined | UserCardProps[]>([]);
export const App: FC = () => {
  const [users, setUsers] = useState<UserCardProps[]>([]);

  return (
    <UsersContext.Provider
      value={{
        users,
        setUsers,
      }}
    >
      <div className={clsx(styles.app)}>
        <Header />
        <Main />
        <Footer />
      </div>
    </UsersContext.Provider>
  );
};
