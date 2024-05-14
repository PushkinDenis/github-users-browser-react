import styles from "./search-form.module.scss";
import { FC, useContext } from "react";
import { SearchCard } from "@organisms";
import { Input } from "@atoms";
import { SearchContext } from "@/App.tsx";

export const SearchForm: FC = () => {
  const { searchValue } = useContext<any>(SearchContext);

  return (
    <>
      <div className={styles.searchform}>
        <Input />
        {searchValue && searchValue.login && (
          <>
            <SearchCard login={searchValue.login} id={searchValue.id} html_url={searchValue.html_url} />
          </>
        )}
      </div>
    </>
  );
};
