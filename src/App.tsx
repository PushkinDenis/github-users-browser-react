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

export const UsersContext = createContext<UsersContextType | undefined | UserCardProps[]>([]);
export const PageContext = createContext<any>(0);
export const SearchContext = createContext<any>(null);
export const InputClickContext = createContext<any>(null);

export const App: FC = () => {
  const [users, setUsers] = useState<UserCardProps[]>([]);
  const [page, setPage] = useState<any>(0);
  const [searchValue, setSearchValue] = useState<any>(null);
  const [InputClick, setInputClick] = useState<any>(false);

  return (
    <UsersContext.Provider
      value={{
        users,
        setUsers,
      }}
    >
      <PageContext.Provider value={{ page, setPage }}>
        <SearchContext.Provider value={{ searchValue, setSearchValue }}>
          <InputClickContext.Provider value={{ InputClick, setInputClick }}>
            <div className={clsx(styles.app)}>
              <Header />
              <Main />
              <Footer />
            </div>
          </InputClickContext.Provider>
        </SearchContext.Provider>
      </PageContext.Provider>
    </UsersContext.Provider>
  );
};
