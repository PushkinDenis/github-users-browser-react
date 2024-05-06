import { FC, useState, createContext, Dispatch, SetStateAction, useEffect } from "react";
import { Header, Footer, UserCardProps } from "@organisms";
import { Main } from "@atoms";
import { clsx } from "clsx";
import styles from "./App.module.scss";

export type UsersContextType = {
  users: UserCardProps[] | undefined;
  setUsers: Dispatch<SetStateAction<UserCardProps[]>>;
};

export type PageContextType = {
  page: number | undefined;
  setPage: Dispatch<SetStateAction<number>>;
};

export const UsersContext = createContext<UsersContextType | undefined | UserCardProps[]>([]);
export const PageContext = createContext<any>(0);

export const App: FC = () => {
  const [users, setUsers] = useState<UserCardProps[]>([]);
  const [page, setPage] = useState<any>(0);
  return (
    <UsersContext.Provider
      value={{
        users,
        setUsers,
      }}
    >
      <PageContext.Provider value={{ page, setPage }}>
        <div className={clsx(styles.app)}>
          <Header />
          <Main />
          <Footer />
        </div>
      </PageContext.Provider>
    </UsersContext.Provider>
  );
};
