import { FC, useState, createContext, Dispatch, SetStateAction } from "react";
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

export type ClickContentType = {
  click: boolean | undefined;
  setClick: Dispatch<SetStateAction<boolean>>;
};

export const UsersContext = createContext<UsersContextType | undefined | UserCardProps[]>([]);
export const PageContext = createContext<any>(0);
export const ClickContext = createContext<any>(false);

export const App: FC = () => {
  const [users, setUsers] = useState<UserCardProps[]>([]);
  const [page, setPage] = useState<any>(0);
  const [click, setClick] = useState<any>(false);

  return (
    <UsersContext.Provider
      value={{
        users,
        setUsers,
      }}
    >
      <PageContext.Provider value={{ page, setPage }}>
        <ClickContext.Provider value={{ click, setClick }}>
          <div className={clsx(styles.app)}>
            <Header />
            <Main />
            <Footer />
          </div>
        </ClickContext.Provider>
      </PageContext.Provider>
    </UsersContext.Provider>
  );
};
