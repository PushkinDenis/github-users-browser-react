import styles from "./search-form.module.scss";
import { FC, useContext } from "react";
import { SearchCard } from "@organisms";
import { Input } from "@atoms";
import { SearchContext, InputClickContext, SearchContextType } from "@/App.tsx";

export const SearchForm: FC = () => {
  const { searchValue } = useContext<SearchContextType>(SearchContext);
  const { InputClick } = useContext<any>(InputClickContext);
  return (
    <>
      <div className={styles.searchform}>
        <Input />
        {searchValue && searchValue.login && InputClick === true && (
          <>
            <SearchCard avatar_url={searchValue.avatar_url} login={searchValue.login} id={searchValue.id} html_url={searchValue.html_url} />
          </>
        )}
      </div>
    </>
  );
};
