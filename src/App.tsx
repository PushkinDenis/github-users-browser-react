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
  setPage: (page: number) => void;
};

export type SearchContextType = {
  searchValue: { login: string; id: string; avatar_url: string; html_url: string } | null;
  setSearchValue: Dispatch<SetStateAction<{ login: string; id: string; avatar_url: string; html_url: string } | null>>;
};

export const UsersContext = createContext<UsersContextType | undefined | UserCardProps[]>([]);
export const PageContext = createContext<PageContextType>({
  page: 0,
  setPage: () => {},
});
export const SearchContext = createContext<SearchContextType>({
  searchValue: null,
  setSearchValue: () => {},
});
export const InputClickContext = createContext<any>(null);

export const App: FC = () => {
  const [users, setUsers] = useState<UserCardProps[]>([]);
  const [page, setPage] = useState<number>(0);
  const [searchValue, setSearchValue] = useState<{ login: string; id: string; avatar_url: string; html_url: string } | null>(null);
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
