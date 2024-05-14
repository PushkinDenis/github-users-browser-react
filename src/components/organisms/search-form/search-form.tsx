import styles from "./search-form.module.scss";
import { FC, useContext, useState } from "react";
import { SearchCard } from "@organisms";
import { Input } from "@atoms";

export const SearchForm: FC = () => {
  const [result] = useState<any>("");
  return (
    <>
      <div className={styles.searchform}>
        <Input />
        {result && result.login && (
          <>
            <SearchCard login={result.login} id={result.id} html_url={result.html_url}></SearchCard>
          </>
        )}
      </div>
    </>
  );
};
